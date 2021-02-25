import React from 'react'
import useFetch from '../../hooks/useFetch'
import { MDBContainer, MDBRow } from "mdbreact";
import Loading from './Loading'
import InfoMovie from '../Info'
import PlusButton from '../PlusButton'


const InfoContainer = ({ match: { params } })=>{
    const { data, err, loading } = useFetch(`https://movie-api-rest.herokuapp.com/movies/${params.id}`)

    if (err) console.log(err)

    if (loading) return(<Loading/>)

    return (
        <React.Fragment>
            <MDBContainer>
                <MDBRow middle>
                   <InfoMovie
                    data={data}
                   />
                </MDBRow>
                <PlusButton
                    to={`/delete-movie/${data._id}`}
                    icon="trash-alt"
                    bottom="200px"
                />
                <PlusButton
                    to={`/update-movie/${data._id}`}
                    icon="edit"
                    bottom="100px"
                />
                <PlusButton
                    to="/movies"
                    icon="home"
                />
            </MDBContainer>
        </React.Fragment>
    )

}

export default InfoContainer