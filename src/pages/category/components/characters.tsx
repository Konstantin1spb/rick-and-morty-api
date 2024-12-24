import { Link } from "react-router-dom"
import { fetchData } from "../../../utils"
import { useEffect, useState } from "react"
import { useUpdatePageNumber } from "../../../hooks"

interface ICharacter {
    id: string,
    name: string,
    image: string
}

export const Characters = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<ICharacter[]>([])
    const [pageNumber, setPageNumber] = useState(1)
    const [shouldLoadData, setShouldLoadData] = useState(true)

    const lastNodeRef = useUpdatePageNumber(isLoading, shouldLoadData, setPageNumber)

    useEffect(() => {
        setIsLoading(true)

        fetchData(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
            .then(loadedData => {
                setData(prevState => [...prevState, ...loadedData.results])
                if(!loadedData.info.next) {
                    setShouldLoadData(false)
                }
            })
            .catch(e => e)
            .finally(() => setIsLoading(false))
    }, [pageNumber])

    return (
        <main className="main-content">
            {data.map(({id, name, image}, index) => {
                if(data.length - 3 === index + 1) {
                    return (
                        <div ref={lastNodeRef} className="category-card" key={id}>
                            <Link to={`/category/characters/${id}`}>
                                <div>
                                    <span>{name} </span>
                                </div>
                                <img src={image} />
                            </Link>
                        </div>
                    )
                } else {
                    return (
                        <div className="category-card" key={id}>
                            <Link to={`/category/characters/${id}`}>
                                <div>
                                    <span>{name} </span>
                                </div>
                                <img src={image} />
                            </Link>
                        </div>
                    )
                }
            })}
            {isLoading && <div>Loading...</div>}
        </main>
    )
}