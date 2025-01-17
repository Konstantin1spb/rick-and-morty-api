import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Character, Episode, Location } from "./components"
import ErrorBoundary from "../../components/ErrorBoundary/errorBoundary"
import { CircularProgress } from "@mui/material"

export const ElementPage = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)

    if(isLoading) {
        return <CircularProgress />
    }

    if(location.pathname.includes('characters')) {
        return (
            <ErrorBoundary>
                <Character setIsLoading={setIsLoading} />
            </ErrorBoundary>
        )
    }

    if(location.pathname.includes('locations')) {
        return (
            <ErrorBoundary>
                <Location setIsLoading={setIsLoading} />
            </ErrorBoundary>
        )
    }

    if(location.pathname.includes('episodes')) {
        return (
            <ErrorBoundary>
                <Episode setIsLoading={setIsLoading} />
            </ErrorBoundary>
        )
    }
}