import React from 'react'

const Info = ({data})=>(
    <React.Fragment>
        <div className="movie-full-info-container my-3">
            <div className="movie-info-container" style={{backgroundImage:`url("${data.imgReference}")`}}>
                <div className="movie-info">
                <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <p><strong>Genero:</strong> {data.genere}</p>
                    <p><strong>Director:</strong> {data.directedBy}</p>
                    <p><strong>Estreno:</strong> {data.release}</p>
                    <p><strong>Elenco:</strong> {data.starring}</p>
                </div>
            </div>
            <div className="movie-trailer">
                <iframe title={Math.random()} width="560" height="315" src={`https://www.youtube.com/embed/${data.trailer}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    </React.Fragment>
)

export default Info