import { useEffect, useState } from "react"
import { fetchData } from "../utils"

interface Element {
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
    episode: string[],
    origin: {name: string, url: string},
    type: string,
    dimension: string,
    residents: string[],
    air_date: string,
    characters: string[],
}

export const useLoadElement = (path: string, paramsId: string | undefined, setIsLoading: (arg0: boolean) => void) => {
    const [data, setData] = useState<Element | null>(null)
    const [loadingError, setLoadingError] = useState(false)

    useEffect(() => {
        fetchData(`https://rickandmortyapi.com/api/${path}/${paramsId}`)
            .then(loadedData => {
                if(loadedData.error) {
                    setLoadingError(true)
                } else {
                    setData(loadedData)
                }
            })
            .catch(e => e)
            .finally(() => setIsLoading(false))
    }, [path, paramsId, setIsLoading])

    return {data, loadingError}
}