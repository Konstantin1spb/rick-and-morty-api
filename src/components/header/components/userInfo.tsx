import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context"

export const UserInfo = () => {
    const context = useAuth()
    const navigate = useNavigate()

    const handleSignInClick = () => {
        navigate('/login')
    }

    if(context?.user) {
        return (
            <>
                <div>{context.user}</div>
                <button onClick={() => context.signOut(() => navigate('/login'))}>Sign Out</button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={handleSignInClick}>Sign In</button>
            </>
        )
    }
}