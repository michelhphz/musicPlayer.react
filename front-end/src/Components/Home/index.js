/*
    Developed by.........: Michel Pech
    Date project.........: Febuary, 2021
    Name Project.........: Music Player
*/

// React
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

// Database
import firebase from "../../firebase"

// Page Styles
import './home.css'
import "bootstrap/dist/css/bootstrap.min.css"

// Styled components
import { BsHouseDoor, BsPeopleCircle } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { Button, Form } from 'react-bootstrap'

// --------------------------------  { Home } --------------------------------
class Home extends Component {
    
    constructor(props){
        
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.entrar = this.entrar.bind(this)
        this.login  = this.login.bind(this)
    }

	entrar(e)
	{
		e.preventDefault()
		
		this.login()
	}  
    
	componentDidMount(){
		// Verificar se tem algum usuario logado
		if(firebase.getCurrent())
		{
			return this.props.history.replace('dashboard')
		}
	}    

	login = async () => 
	{
		const {email, password} = this.state;
		console.log(email, password)
		try
		{
			
		    await firebase.login(email, password)
            .then((result) =>
                this.props.history.replace('/dashboard')
            ) 
            .catch((error) => 
			{
		    	if(error.code === 'auth/user-not-found' || 
                   error.code === 'auth/invalid-email'  ||
                   error.code === 'auth/wrong-password'
                )
		    	{
		    		alert('Este usuario não existe!')
		    	}                
		    	else
		    	{
		    		alert('Codigo de erro:' + error.code)
		    	}
		    })           
			
		}
		catch(error)
		{
			alert(error.message)
		}
	}    
    
    render()
    {
        return(
            <div className="home-content">
                <div className="home-main">
                    <div className="home-main-content">
                        <Form onSubmit={this.entrar} id='login'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type = "email" 
                                    placeholder = "Enter email" 
                                    value = {this.state.email}
                                    onChange = {(e) => this.setState({email: e.target.value})}
                                />                        
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type = "password" 
                                    placeholder = "Password" 
                                    value = {this.state.password}
                                    onChange = {(e) => this.setState({password: e.target.value})} 
                                />
                            </Form.Group>

                            <Button variant="outline-primary" type="submit">
                                Login
                            </Button>    

                            <Link to='/register'>
                                <Button variant="primary">
                                    Register
                                </Button>
                             </Link>                    
                        </Form>                
                    </div>
                </div>
                <div className="home-aside">
                    <img
                        src="https://cache.desktopnexus.com/thumbseg/95/95988-bigthumbnail.jpg"
                        width="100%"
                        height="100%"
                    ></img>
                </div>
                <div className="home-footer">
                    <div className="home-footer-icons-content">
                        <a
                            href="https://www.linkedin.com/in/michel-henrique-straub-pech-ba2a0b75/"
                            target="_blanck"
                        >
                            <AiOutlineLinkedin
                                size="40px"
                            /> 
                        </a>  
                        <a
                            href="https://github.com/michelhphz"
                            target="_blanck"
                        >
                            <AiOutlineGithub
                                size="40px"
                            />  
                        </a>
                        <a
                            href="https://www.instagram.com/michelpech/?hl=pt-br"
                            target="_blanck"
                        >
                            <AiOutlineInstagram
                                size="40px"
                            />  
                        </a>  
                        <a
                            href="https://api.whatsapp.com/send?phone=51989249247"
                            target="_blanck"
                        >
                            <AiOutlineWhatsApp
                                size="40px"
                            />  
                        </a>                                                                                                                                                                                                
                    </div>
                    <strong>developed by Michel Pech - 2021</strong> 
                </div>
            </div>
        )
    }
}

export default withRouter(Home)