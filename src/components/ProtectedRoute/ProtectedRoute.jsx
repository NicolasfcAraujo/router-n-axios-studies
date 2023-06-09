import { Navigate } from "react-router-dom"
import { useGlobalContext } from "../../context/context"

const ProtectedRoute = ({children}) => {
    const {isLogged} = useGlobalContext()
    if (!isLogged) {
        return <Navigate to="/home"/>
    }
    return children
}
export default ProtectedRoute