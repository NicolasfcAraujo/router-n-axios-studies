import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import { useGlobalContext } from "../../context/context"

const Home = () => {
    const { isLogged, setIsLogout } = useGlobalContext()

    useEffect(() => {
        setIsLogout(false)
    },[])

    return (
        <>
            {isLogged ? 
                <div className="flex flex-col items-center pt-36">
                    <h1 className="text-center text-7xl">Welcome!</h1>
                    <h2 className="text-center text-5xl">You can see the users now</h2>
                </div>
                :
                <div className="flex flex-col items-center pt-36">
                    <h1 className="text-center text-7xl">React Router and Axios Studies</h1>
                    <h3 className="text-center text-5xl">Login to see the users</h3>
                    <h3 className="text-center text-2xl">Consuming https://api.github.com/users and using React Router</h3>
                </div>
            }
        </>
        
    )
}
export default Home