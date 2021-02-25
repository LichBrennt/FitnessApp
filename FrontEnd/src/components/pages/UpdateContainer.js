import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { MDBContainer, MDBRow, MDBCol, } from 'mdbreact';
import { useParams } from 'react-router-dom'
import Form from '../Form'
import Card from '../Card'
import Loading from './Loading'

const UpdateContainer = (props)=>{
    const {id} = useParams()
    const { data, err, loading } = useFetch(`https://movie-api-rest.herokuapp.com/movies/${id}`)

    const [title, settitle] = useState()
    const [release, setrelease] = useState()
    const [genere, setgenere] = useState()
    const [description, setdescription] = useState()
    const [directedby, setdirectby] = useState()
    const [imgReference, setimgReference] = useState()
    const [starring, setstarring] = useState()
    const [trailer, settrailer] = useState()

    const dataToUpdate ={
        title: title || data.title || "",
        release:release || data.release || "",
        genere:genere || data.genere || "",
        description:description || data.description || "",
        directedBy:directedby || data.directedBy || "",
        imgReference:imgReference || data.imgReference || "",
        starring:starring || data.starring || "",
        trailer:trailer || data.trailer || ""
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
        try {
            let config = {
				method: 'PUT',
				headers:{
					'Accept':'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dataToUpdate)
			}

            let res = await fetch(`https://movie-api-rest.herokuapp.com/movies/${id}`,config)
            let json = res.json()
            console.log(json)
            console.log(props)
            props.history.push(`/movie-info/${id}`)
        } catch (error) {
            
        }
    }

    if (err) console.log(err)

    if (loading) return(<Loading/>)

    return(
        <React.Fragment>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <Form
                            form={dataToUpdate}
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                        />
                    </MDBCol>
                    <MDBCol>
                        <Card
                            doc={dataToUpdate}
                            hover={true}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    )
}

export default UpdateContainer