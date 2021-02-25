import React from 'react'
import Movie from '../Movie'
import useFetch from '../../hooks/useFetch'
import { MDBContainer, MDBRow } from "mdbreact";
import Loading from './Loading'
import PlusButton from '../PlusButton'


const MovieContainer = ()=>{
    const { data, err, loading } = useFetch('https://movie-api-rest.herokuapp.com/movies')

    if (err) console.log(err)

    if (loading) return(<Loading/>)

    return (
        <React.Fragment>
            <MDBContainer>
                <MDBRow middle>
                    <Movie
                        data={data}
                    />
                </MDBRow>
                <PlusButton
                    to="/add"
                    icon="plus"
                />
            </MDBContainer>
        </React.Fragment>
    )

}

export default MovieContainer