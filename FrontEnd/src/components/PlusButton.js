import React from 'react'
import { MDBIcon } from 'mdbreact'
import { Link } from 'react-router-dom'
import './styles/PlusButton.css'

const PlusButton = ({ to, icon, bottom})=>(
    <React.Fragment>
        <div className="plus-button-container" style={{bottom:`${bottom}`} || {bottom:"10px"}}>
            <Link className="link-to" to={to}>
                <MDBIcon icon={icon} />
            </Link>
        </div>
    </React.Fragment>
)

export default PlusButton