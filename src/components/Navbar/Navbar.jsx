import { disconnectedLinks, loggedLinks } from "../../data/data"
import { useGlobalContext } from "../../context/context"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = () => {
    const {isLogged, setIsLogged, user, isLogout, setIsLogout} = useGlobalContext()
    const [coordinates, setCoordinates] = useState({x: 0,y: 0})
    const [logoutModalWidth, setLogoutModalWidth] = useState(200)

    const handleLogout = (e) => {
        console.log(e.target.offsetTop + e.target.offsetHeight + 20 )
        setIsLogout(!isLogout)
        const positionX = e.target.offsetLeft + (e.target.offsetWidth/2) - (logoutModalWidth/2)
        const positionY = e.target.offsetTop + e.target.offsetHeight + 20 
        setCoordinates({x:positionX, y:positionY})
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsLogout(false)
        })
    })

    useEffect(() => {
        setIsLogout(false)
    }, [])

    return (
        <div className="grid grid-cols-3 items-center py-4 px-3 bg-white h-24">
            <div className="text-4xl">
                <h1>Stud<span>y</span></h1>
            </div>
            <div>
                <nav className="flex justify-around">
                    {(isLogged ? loggedLinks : disconnectedLinks).map((link) => {
                        if (link.name === "logout") {
                            return (
                                <button style={{color: "gray"}} onClick={handleLogout}>
                                    {`${link.name}`}
                                </button>
                            )
                        }
                        return (
                            <NavLink key={link.id} to={`/${link.name}`}
                                     style={({ isActive }) => {
                                        return {color: isActive ? "purple" : "grey"}
                                     }}>
                                {`${link.name}`}
                            </NavLink>
                        )
                    })}
                </nav>
            </div>
            <div className="flex justify-end">
                {isLogged && <h2>Hello, {user[0].name}</h2>}
            </div>
            <div id="logoutBtn" className="bg-slate-100" style={{position: "absolute", left: `${coordinates.x}px`, top: `${coordinates.y}px`,
                                                                   display: isLogout ? "block":"none", width: `${logoutModalWidth}px`,
                                                                   padding: "15px", border: "solid", borderWidth: "1px", borderColor: "#dcdcdc",
                                                                   borderRadius: "8px", boxShadow: "-7px 7px 6px rgb(0,0,0,0.2)"}}>
                <h4 className="text-base">Are you sure ?</h4>
                <button className="text-red-700" onClick={() => {
                    setIsLogged(false)
                    setIsLogout(false)
                }}>
                    Logout
                </button>
            </div>
        </div>
    )
}
export default Navbar