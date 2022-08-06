import axios from "axios"

const url="http://localhost:8080/BackEndFAI"

export const sampleCall=async()=>{
    const mine="razak:mohamed"
    const tok=btoa(mine)
    await axios.get(`${url}/haithere`,{
        headers:{"Authorization":`Basic ${tok}`}
    })
}


    //await axios.get(`${url}/haithere`,{},{auth:{username:"razak",password:"mohamed"}})
    //const tok=Buffer.from(`${mine}`,"utf-8").toString('base64')
    //await axios.get(`${url}/haithere`)