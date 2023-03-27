import React, { useContext, useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState([{name: "john"}])
    const [isLogout, setIsLogout] = useState(false)

    return (
        <AppContext.Provider value={{isLogged,
                                     setIsLogged,
                                     user,
                                     setUser,
                                     isLogout,
                                     setIsLogout,}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }