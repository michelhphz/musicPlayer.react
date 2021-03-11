/*
    Developed by.........: Michel Pech
    Date project.........: Febuary, 2021
    Name Project.........: Music Player
*/

// React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Database
import firebase from "../../firebase"

// Page Styles
import "bootstrap/dist/css/bootstrap.min.css"

// Styled components

// --------------------------------  { Register } --------------------------------
class Register extends Component {
    render(){
        return(
            <div className="register-content">
                register
            </div>
        )
    }
}

export default withRouter(Register)