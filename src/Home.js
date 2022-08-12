import { WindowSharp } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { callLogout } from "./Contact"
import { List } from "./List"
import { Login } from "./Login"

export const Home=()=>{

    const[logview,setLogview]=useState(true)

    const check=()=>{
        const t= sessionStorage.getItem("valid")
        if(t){
            setLogview(false)
        }
        else{
            setLogview(true)
        }
    }

    useEffect(()=>{
        //sessionStorage.removeItem("valid")
        check()
    },[])

    return(
        <>
            {
                (logview)?<Login/>
                :
                <>
                    <h1>Home page</h1>
                    <List/>
                    <Button color="error" onClick={async()=>{
                        await callLogout()
                        window.location.assign("/")
                    }}>
                        Logout
                    </Button>
                </>
            }
        </>
    )
}