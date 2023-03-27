import axios from "axios"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../../context/context"
import useAxios from "../../hooks/useAxios"

const url = "https://api.github.com/users"

const Users = () => {
    const {userWidth, columnsNumber} = useGlobalContext()
    const { response, loading, error } = useAxios({
        method: "get",
        url: url
    })

    return (
        <div className="pb-24 flex justify-center">
            {loading ?
                <div>
                    <h1>Loading...</h1>
                </div>
                :
                <div>
                    <div className="flex justify-center pt-5 pb-10 text-5xl"><h2>Users</h2></div>
                    <div style={{display: "grid", gridTemplateColumns: `repeat(${columnsNumber}, 1fr)`, justifyItems: "center",
                                gap: "30px 10px"}}>
                        {response.map((user) => {
                            const {login, avatar_url, id} = user
                            return (
                                <article key={id} style={{width: userWidth}}>
                                    <div>
                                        <img src={avatar_url} alt={login} />
                                    </div>
                                    <div>
                                        <h2>{login}</h2>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
                
            }
        </div>
    )
}
export default Users