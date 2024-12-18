import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Character, Episode, Location } from "./components"

export const ElementPage = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(location.pathname.includes('characters')) {
        return <Character setIsLoading={setIsLoading} />
    }

    if(location.pathname.includes('locations')) {
        return <Location setIsLoading={setIsLoading} />
    }

    if(location.pathname.includes('episodes')) {
        return <Episode setIsLoading={setIsLoading} />
    }
}