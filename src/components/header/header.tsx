import { NavLink } from "react-router-dom"
import { UserInfo } from "./components"

export const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/category/characters'>Characters</NavLink>
                <NavLink to='/category/locations'>Locations</NavLink>
                <NavLink to='/category/episodes'>Episodes</NavLink>
                <UserInfo />
            </nav>
        </header>
    )
}