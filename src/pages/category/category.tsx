import { Navigate, useParams } from "react-router-dom"
import { Characters, Episodes, Locations } from "./components"
import ErrorBoundary from "../../components/ErrorBoundary/errorBoundary"

export const CategoryPage = () => {
    const params = useParams()

    if(params.id === 'characters') {
        return (
            <ErrorBoundary>
                <Characters />
            </ErrorBoundary>
        )
    }

    if(params.id === 'locations') {
        return (
            <ErrorBoundary>
                <Locations />
            </ErrorBoundary>
        )
    }

    if(params.id === 'episodes') {
        return (
            <ErrorBoundary>
                <Episodes />
            </ErrorBoundary>
        )
    } else {
        return <Navigate to='/404' />
    }
}