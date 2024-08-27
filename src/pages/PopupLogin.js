import { useContext } from "react"
import { AuthContext } from "../context"

function PopupLogin() {

    const AuthContextValue = useContext(AuthContext)

    return (
        <div className="mx-auto py-auto bg-red-600 w-[500px]">
            <button onClick={AuthContextValue.handleSignIn}>Dang nhap</button>
        </div>
    )
}

export default PopupLogin