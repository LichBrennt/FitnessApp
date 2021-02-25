import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';

const DeleteMovie = (props)=>{
    
    const { id } = useParams()
    const [modal, setModal] = useState(true)

    const toggle = ()=>{
        modal? setModal(false) : setModal(true)
        props.history.push(`/movie-info/${id}`)
    }

    const deleteFetch = async()=>{
        const del = await fetch(`https://movie-api-rest.herokuapp.com/movies/${id}`,{
            method: 'DELETE'
        })

        let res = del.json()
        console.log(res)
        props.history.push('/home')
    }

    return(
        <React.Fragment>
        <MDBContainer>
            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalBody>
                    <h3>¿Desea eliminar la pelicula?</h3>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="elegant" onClick={toggle}>Cancelar</MDBBtn>
                    <MDBBtn color="danger" onClick={deleteFetch}>Eliminar</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    </React.Fragment>
    )
}

export default DeleteMovie