import React from 'react'
import './styles/movies.css'
import { MDBCol } from "mdbreact";
import Card from './Card'


const Movie = ({data})=>(
    <React.Fragment>
        {
            
           data.map((doc)=>(
                <MDBCol xs="12" sm="12" md="6" lg="3"  key={doc._id || Math.random()} >
                    <Card
                        doc={doc}
                    />
                </MDBCol>
            ))
            
        }
       
    </React.Fragment>
)

export default Movie