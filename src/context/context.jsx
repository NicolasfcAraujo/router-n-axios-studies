import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState([{name: "john"}])
    const [isLogout, setIsLogout] = useState(false)
    const [userWidth, setUserWidth] = useState(150)
    const [columnsNumber, setColumnsNumber] = useState(0)

    const handleCheckWidth = () => {
        const UsersGridColumns = Math.floor((window.innerWidth*0.8)/userWidth)
        setColumnsNumber(UsersGridColumns)
    }

    useEffect(() => handleCheckWidth)
    useEffect(() => {
        window.addEventListener("resize", handleCheckWidth)
    })

    return (
        <AppContext.Provider value={{isLogged,
                                     setIsLogged,
                                     user,
                                     setUser,
                                     isLogout,
                                     setIsLogout,
                                     userWidth,
                                     columnsNumber,}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }