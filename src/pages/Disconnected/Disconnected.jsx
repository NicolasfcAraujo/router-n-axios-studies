import Navbar from "../../components/Navbar/Navbar"
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../../context/context"
import { useLocation } from "react-router-dom"

const Disconnected = () => {

    const {setIsLogout} = useGlobalContext()

    const navigate = useNavigate()
    const location = useLocation()

    const handleGoHome = () => {
        navigate("/home")
    }

    useEffect(() => {
        handleGoHome()
    },[])

    useEffect(() => {
      setIsLogout(false)
    }, [location])

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
export default Disconnected