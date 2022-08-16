import axios from "axios"

const url="http://localhost:8080/BackEndFAI"

const mine="razak:mohamed"
const tok=btoa(mine)

export const callCreate=async(object)=>{
    const t = await axios.post(`${url}/new`,object,{
        headers:{"Authorization":`Basic ${sessionStorage.getItem('valid')}`}
    })
    return t
}

export const callList=async()=>{
    try{
        const t = await axios.get(`${url}/`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('valid')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const callLogout=async()=>{
    await axios.get(`${url}/logout`)
    sessionStorage.removeItem("valid")
    return;
}

export const callLogin=async(obj)=>{
    const credentials=obj.username+":"+obj.password
    const token=btoa(credentials)
    //alert(token)

    try{
        const t = await axios.get(`${url}/`,{headers:{"Authorization":`Basic ${token}`}})
        if(t.data){
            sessionStorage.setItem("valid",token)
        }
    }
    catch(hai){
        alert(hai)
    }
}






export const callSimpleReturn=async()=>{
    const receiv=await axios.get(`${url}/askint`,{
        headers:{"Authorization":`Basic ${tok}`}
    })
    //alert(receiv.data)
    return receiv;
}

export const passByBody=async()=>{
    const oj={
        "tvId":76567,
        "model":"Ultra",
        "brand":"Hier",
        "cost":39002,
        "inches":31.5,
        "type":"FHD"
    }
    await axios.post(`${url}/posting`,oj,{
        headers:{"Authorization":`Basic ${tok}`}
    })
}

export const simpleCall=async()=>{
    const hey="Anu Silviya FAI";
    const ter=945;
    await axios.get(`${url}/pass/${hey}/${ter}`,{
        headers:{"Authorization":`Basic ${tok}`}
    })
}

export const sampleCall=async()=>{
    await axios.get(`${url}/haithere`,{
        headers:{"Authorization":`Basic ${tok}`}
    })
}


    //await axios.get(`${url}/haithere`,{},{auth:{username:"razak",password:"mohamed"}})
    //const tok=Buffer.from(`${mine}`,"utf-8").toString('base64')
    //await axios.get(`${url}/haithere`)