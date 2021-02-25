import React from 'react'
import { MDBContainer, MDBRow, MDBCol, } from 'mdbreact';
import Card from './Card'
import Form from './Form'
import './styles/form.css'

const Add = ({form, onChange, onSubmit})=>(
    <React.Fragment>
        <MDBContainer>
            <MDBRow className="my-2 mx-auto">
                <MDBCol md="8">
                    <Form
                        form={form}
                        onChange={onChange}
                        onSubmit={onSubmit}
                    />
                </MDBCol>
                <MDBCol md="4" className="mx-auto">
                    <Card
                        doc={form}
                        hover={true}
                    />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </React.Fragment>
)

export default Add