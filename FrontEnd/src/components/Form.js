import React from 'react'
import { MDBBtn, MDBInput } from 'mdbreact';

const Form = ({form, onChange, onSubmit})=>(
    <React.Fragment>
        <form onSubmit={onSubmit} className="addMovie">
            <div className="grey-text">
            <MDBInput label="Titulo" group type="text" validate error="wrong"
                success="right" name="title" onChange={onChange} value={form.title} />
            <MDBInput label="Año de Lanzamiento" group type="text" validate error="wrong"
                success="right" name="release" onChange={onChange} value={form.release} />
            <MDBInput label="Genero" group type="text" validate error="wrong"
                success="right" name="genere" onChange={onChange} value={form.genere} />
            <MDBInput label="Descripción" group type="text" validate error="wrong"
                success="right" name="description" onChange={onChange} value={form.description} />
            <MDBInput label="Director" group type="text" validate error="wrong"
                success="right" name="directedBy" onChange={onChange} value={form.directedBy} />
            <MDBInput label="Imagen de referencia" group type="text" validate error="wrong"
                success="right" name="imgReference" onChange={onChange} value={form.imgReference} />
            <MDBInput label="Elenco" group type="text" validate error="wrong"
                success="right" name="starring" onChange={onChange} value={form.starring} />
            <MDBInput label="Trailer - enlace youtube" group type="text" validate error="wrong"
                success="right" name="trailer" onChange={onChange} value={form.trailer} />
            </div>
            <div className="text-center">
            <MDBBtn type="submit" color="elegant" size="lg">
                Guardar
            </MDBBtn>
            </div>
        </form>
    </React.Fragment>
)

export default Form