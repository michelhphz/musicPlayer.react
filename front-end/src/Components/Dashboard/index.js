/*
    Developed by.........: Michel Pech
    Date project.........: Febuary, 2021
    Name Project.........: Music Player
*/

// React
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// Database
import firebase from "../../firebase";

// Styles Page
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Styled components
import { Button, Card } from 'react-bootstrap'
import { BsFillHeartFill, BsFillMicFill, BsMusicNote, BsPeopleFill } from "react-icons/bs"

// --------------------------------  { Dashboard } --------------------------------
class Dashboard extends Component {
    
    state = {
        tracks: []
    }

    componentDidMount() {
        this.loadData()        
    }

    loadData() {
        const tracks = firebase.app.database().ref('tracks')
        console.log(tracks)
    }

    loadTracks() {
        firebase.app.ref('tracks').on('value', (snapshot) => {
            let state = this.state
            state.tracks = []

            snapshot.forEach((childItem) => {
                state.tracks.push({
                    key: childItem.key,
                    name: childItem.val().name,
                    link: childItem.val().link,
                    description: childItem.val().description,
                    status: childItem.val().status
                })
            })
        })

        console.log(this.state.tracks)
    }

    logout = async () => {
        await firebase.logout().catch((error) => {
            alert(error);
        });

        localStorage.removeItem("nome");
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="dashboard-content">
                <div className="dashboard-menu">
                    <div className="dashboard-menu-content">
                        <Button variant="secondary">
                            <BsMusicNote/> Music
                        </Button>
                        <Button variant="secondary">
                            <BsFillMicFill/> Shows
                        </Button>
                        <Button variant="secondary">
                            <BsPeopleFill/> Podcast
                        </Button>                   
                        <Button variant="secondary">
                            <BsFillHeartFill/> Favorites
                        </Button>                                            
                    </div>
                </div>
                <div className="dashboard-main">
                    <div className="dashboard-main-content">
                        <input className="dashboard-main-content-search"
                            type = "search"
                            placeholder = "find you song"                                
                        >
                        </input>
                        <div className="dashboard-main-content-files">                         
                            {this.state.tracks.map((track) =>{
                                <Card 
                                    style={{ width: '18rem' }}
                                    key={track.key}
                                >
                                    <iframe
                                        width="350" 
                                        height="350" 
                                        src={track.link}
                                        frameborder="0"
                                        allow="accelerometer; 
                                            autoplay; 
                                            clipboard-write; 
                                            encrypted-media; 
                                            gyroscope;
                                            picture-in-picture" 
                                        allowfullscreen>                                    
                                    </iframe>
                                    <Card.Body>
                                        <Card.Title>
                                            {track.name}
                                        </Card.Title>
                                        <Card.Text>
                                            {track.description}
                                        </Card.Text>                                        
                                    </Card.Body>
                                </Card>                                
                            })}                                                                                                       
                        </div>
                    </div>
                </div>
                <div className="dashboard-footer">
                    <div className="dashboard-footer-content">

                    </div>
                </div>
            </div>
        );
  }
}

export default withRouter(Dashboard);
