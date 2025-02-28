import { useState } from "react"
import { useAuth } from "../../context"
import { Navigate } from "react-router-dom"

export const LoginPage = () => {
    const [login, setLogin] = useState('')

    const context = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault()
        if(login) {
            context?.signIn(login, () => {
                return <Navigate to='/' />
            })
            setLogin('')
        }
    }

    const handleChange = ({target}) => {
        setLogin(target.value)
    }

    if(context?.user) {
        return <Navigate to='/' />
    } else {
        return (
            <>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="login" value={login} placeholder="Login" onChange={handleChange} />
                    <button type="submit">Log in</button>
                </form>
            </>
        )
    }
}