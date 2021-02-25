import React from 'react'
import '../styles/home.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Home = ()=>(
    <React.Fragment>
        <MDBContainer>
            <MDBRow className="full-container my-3">
                <MDBCol md="5" className="my-auto">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmef6ypjGcpnDOcGhZUr7tGf9-a4ROfEp-rkwzRIeWMBjBFkQA" alt="Img ref" width="100%"/>
                </MDBCol>
                <MDBCol md="7" className="my-auto">
                    <h2>Harry Potter y la piedra filosofal</h2>
                    <p>El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.</p>
                    <p><strong>Genero:</strong> Fantasía/Aventura</p>
                    <p><strong>Director:</strong> Chris Columbus</p>
                    <p><strong>Elenco:</strong> Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets, Daniel Radcliffe, Fiona Shaw, Harry Melling, Richard Griffiths, Derek Deadman, Ian Hart, Ben Borowiecki, Warwick Davis, Verne Troyer, John Hurt, Richard Bremmer</p>
                    <iframe title={Math.random()} width="560" height="315" src="https://www.youtube.com/embed/VyHV0BRtdxo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <div className="movie-full-info-container">
            <div className="movie-info-container" style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmef6ypjGcpnDOcGhZUr7tGf9-a4ROfEp-rkwzRIeWMBjBFkQA")`}}>
                <div className="movie-info">
                <h2>Harry Potter y la piedra filosofal</h2>
                    <p>El día de su cumpleaños, Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla una amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un malévolo y poderoso mago llamado Voldemort está en busca de una piedra filosofal que alarga la vida de quien la posee.</p>
                    <p><strong>Genero:</strong> Fantasía/Aventura</p>
                    <p><strong>Director:</strong> Chris Columbus</p>
                    <p><strong>Elenco:</strong> Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets, Daniel Radcliffe, Fiona Shaw, Harry Melling, Richard Griffiths, Derek Deadman, Ian Hart, Ben Borowiecki, Warwick Davis, Verne Troyer, John Hurt, Richard Bremmer</p>
                </div>
            </div>
            <div className="movie-trailer">
                <iframe title={Math.random()} width="560" height="315" src="https://www.youtube.com/embed/VyHV0BRtdxo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>

    </React.Fragment>
)

export default Home