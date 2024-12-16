import { Link, Navigate, useParams } from "react-router-dom"
import { useLoadElement } from "../../../hooks"

export const Episode = ({setIsLoading}) => {
    const params = useParams()

    const {data, loadingError} = useLoadElement('episode', params.id, setIsLoading)

    if(loadingError) {
        return <Navigate to='/404' />
    }

    if(data) {
        return (
            <>
                <div className="element-card">
                    <span>Episode: {data?.episode}</span>
                    <span>Name: {data?.name}</span>
                    <span>Air Date: {data?.air_date}</span>
                </div>
                <h3>Characters</h3>
                <div className="element-list">
                    {data?.characters.map((url: string) => {
                        const characterNumber = url.split('/').reverse()[0]
                        const characterUrl = `/category/characters/${characterNumber}`
                        return <Link key={url} to={characterUrl}>{characterNumber}</Link>
                    })}
                </div>
            </>
        )
    }
}