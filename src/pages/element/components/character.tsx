import { Link, Navigate, useParams } from "react-router-dom"
import { useLoadElement } from "../../../hooks"



export const Character = ({setIsLoading}) => {
    const params = useParams()

    const {data, loadingError} = useLoadElement('character', params.id, setIsLoading)

    const originUrl = `/category/locations/${data?.origin.url.split('/').reverse()[0]}`

    if(loadingError) {
        return <Navigate to='/404' />
    }

    if(data) {
        return (
            <>
                <div className="element-card">
                    <div className="element-card__text">
                        <span>Name: {data?.name}</span>
                        <span>Status: {data?.status}</span>
                        <span>Species: {data?.species}</span>
                        <span>Gender: {data?.gender}</span>
                        <span>Origin: <Link to={originUrl}>{data?.origin.name}</Link></span>
                    </div>
                    <img src={data?.image} />
                </div>
                <h3>Episodes</h3>
                <div className="element-list">
                    {data?.episode.map((url: string) => {
                        const episodeNumber = url.split('/').reverse()[0]
                        const episodeUrl = `/category/episodes/${episodeNumber}`
                        return <Link key={url} to={episodeUrl}>{episodeNumber}</Link>
                    })}
                </div>
            </>
        )
    }
}