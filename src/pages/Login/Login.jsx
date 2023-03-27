import "./style.css"
import { useGlobalContext } from "../../context/context"
import { useEffect, useState } from "react"
import { redirect, useNavigate } from "react-router-dom"

const Login = () => {

    const [value, setValue] = useState("")
    const [alert, setAlert] = useState(false)

    const navigate = useNavigate()

    const {user, setUser, setIsLogged} = useGlobalContext()

    const handleAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(value.length)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setUser([{name: value}])
        if (value.length > 0) {
            setIsLogged(true)
            navigate("/home")
            
        } else {
            handleAlert()
        }
    }

    return (
        <div className="login flex justify-center items-center">
            <div className="form rounded-lg border border-slate-300 p-5 w-96 bg-white">
                <form value={value} onChange={handleChange} onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
                    <div>
                        <div>
                            <label htmlFor="userName">Name</label>
                        </div>
                        <input className="bg-slate-200 mt-3 pl-2 py-1 w-full rounded focus:outline-none" type="text" name="userName" id="" />
                    </div>
                    {alert && <div className="px-2 py-1 bg-red-300 text-red-700 border-red-700 rounded">Very short name!</div>}
                    <div className="flex justify-center">
                        <button className="bg-green-500 rounded px-3 py-1" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login