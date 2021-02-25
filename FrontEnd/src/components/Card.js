import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({doc,hover})=>{
    return(
        <React.Fragment>
            <div className="card-movie-container my-4 mx-auto">
                <Link to={hover?"#!":`/movie-info/${doc._id}`}>
                    <img src={doc.imgReference || 'https://c8.alamy.com/compes/pm7tfp/el-exorcista-1973-warner-archivo-poster-referencia-31386-680tha-pm7tfp.jpg'} alt={doc.title}/>                  
                    <div className={hover? "content-card-movie hover" : "content-card-movie"}>
                        <h3>{doc.title || 'Titulo de Ejemplo'}</h3>
                        <p>{doc.release || 'xxxx'} - {doc.genere || 'Genero'}</p>
                        <p><strong>Director:</strong> {doc.directedBy || 'Director'}</p>
                        <p className="text-ellipsis">{doc.description || 'Descripcion de Ejemplo'}</p>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )

}

export default Card