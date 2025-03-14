import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchData } from "../../../utils"
import { useUpdatePageNumber } from "../../../hooks"
import { CircularProgress } from "@mui/material"

interface ILocation {
    id: string,
    name: string,
    type: string
}

export const Locations = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<ILocation[]>([])
    const [pageNumber, setPageNumber] = useState(1)
    const [shouldLoadData, setShouldLoadData] = useState(true)

    const lastNodeRef = useUpdatePageNumber(isLoading, shouldLoadData, setPageNumber)

    useEffect(() => {
        setIsLoading(true)

        fetchData(`https://rickandmortyapi.com/api/location/?page=${pageNumber}`)
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
            {data.map(({id, name, type}, index) => {
                if(data.length - 3 === index + 1) {
                    return (
                        <div ref={lastNodeRef} className="category-card" key={id}>
                            <Link to={`/category/locations/${id}`}>
                                <span>{name} </span>
                                <span>{type}</span>
                            </Link>
                        </div>
                    )
                } else {
                    return (
                        <div className="category-card" key={id}>
                            <Link to={`/category/locations/${id}`}>
                                <span>{name} </span>
                                <span>{type}</span>
                            </Link>
                        </div>
                    )
                }
            })}
            {isLoading && <CircularProgress />}
        </main>
    )
}