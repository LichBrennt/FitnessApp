import React, { useState } from 'react'
import Add from '../Add'
import Loading from './Loading'

const AddContainer = (props)=>{

    const [title, settitle] = useState()
    const [release, setrelease] = useState()
    const [genere, setgenere] = useState()
    const [description, setdescription] = useState()
    const [directedby, setdirectby] = useState()
    const [imgReference, setimgReference] = useState()
    const [starring, setstarring] = useState()
    const [trailer, settrailer] = useState()
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState("")


    const dataToStore ={
        title: title || "",
        release:release || "",
        genere:genere || "",
        description:description  || "",
        directedBy:directedby || "",
        imgReference:imgReference || "",
        starring:starring || "",
        trailer:trailer || ""
    }

    
    const handleChange = (e)=>{
        let toChange = e.target.name
        switch (toChange) {
            case 'title':
                settitle(e.target.value)
                break;
            case 'release':
                setrelease(e.target.value)
                break;
            case 'genere':
                setgenere(e.target.value)
                break;
            case 'description':
                setdescription(e.target.value)
                break;
            case 'directedBy':
                setdirectby(e.target.value)
                break;
            case 'imgReference':
                setimgReference(e.target.value)
                break;
            case 'starring':
                setstarring(e.target.value)
                break;
            case 'trailer':
                settrailer(e.target.value.split("v=")[1])
                break;
            default:
                break;
        }

    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading(true)
        try{
            let config = {
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToStore)
            }
    
            let res = await fetch('https://movie-api-rest.herokuapp.com/movies',config)
            let json = await res.json()
            console.log(json)
            setLoading(false)
            props.history.push('/movies')
        }
        catch(err){
            setLoading(false)
            setErr(err)

        }
    }

    if (err) console.log(err)

    if (loading) return(<Loading/>)

    return(
        <Add
            form={dataToStore}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    )
}

export default AddContainer