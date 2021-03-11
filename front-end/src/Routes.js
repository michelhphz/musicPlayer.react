/*
    Developed by.........: Michel Pech
    Date project.........: Febuary, 2021
    Name Project.........: Music Player
*/

import { BrowserRouter, Route, Router, Switch } from "react-router-dom"

import Home from "./Components/Home"
import Dashboard from "./Components/Dashboard"
import Player from "./Components/Player"
import Register from "./Components/Register"

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/register"><Register/></Route>
                <Route exact path="/dashboard"><Dashboard/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes