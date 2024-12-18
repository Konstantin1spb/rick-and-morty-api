import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { fetchData } from "../../utils"
import { Characters, Episodes, Locations } from "./components"

export const CategoryPage = () => {
    const params = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        let path = ''
        switch(params.id) {
            case 'characters':
                path = 'character'
                    break;

            case 'locations':
                path = 'location'
                    break;

            case 'episodes':
                path = 'episode'
        }

        fetchData(`https://rickandmortyapi.com/api/${path}`)
                    .then(loadedData => {
                        setData(loadedData.results)
                    })
                    .catch(e => e)
                    .finally(() => setIsLoading(false))
    }, [params.id])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(params.id === 'characters') {
        return <Characters data={data} />
    }

    if(params.id === 'locations') {
        return <Locations data={data} />
    }

    if(params.id === 'episodes') {
        return <Episodes data={data} />
    } else {
        return <Navigate to='/404' />
    }
}