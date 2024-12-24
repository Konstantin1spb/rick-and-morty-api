import { Link, Navigate, useParams } from "react-router-dom"
import { useLoadElement } from "../../../hooks"

export const Location = ({setIsLoading}) => {
    const params = useParams()

    const {data, loadingError} = useLoadElement('location', params.id, setIsLoading)

    if(loadingError) {
        return <Navigate to='/404' />
    }

    if(data) {
        return (
            <>
                <div className="element-card">
                    <span>Name: {data?.name}</span>
                    <span>Type: {data?.type}</span>
                    <span>Dimension: {data?.dimension}</span>
                </div>
                <h3>Residents</h3>
                <div className="element-list">
                    {data?.residents.map((url: string) => {
                        const residentNumber = url.split('/').reverse()[0]
                        const residentUrl = `/category/characters/${residentNumber}`
                        return <Link key={url} to={residentUrl}>{residentNumber}</Link>
                    })}
                </div>
            </>
        )
    }
}