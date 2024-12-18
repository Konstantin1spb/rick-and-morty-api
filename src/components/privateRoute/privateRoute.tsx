import { Navigate } from "react-router-dom"
import { useAuth } from "../../context"

export const PrivateRoute = ({children}) => {
    const context = useAuth()

    if(context?.user) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return <Navigate to='/login' />
    }
}