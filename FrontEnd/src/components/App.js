import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import notFound from './pages/NotFound'
import NavBar from './NavBar'
import './styles/home.css'
import MovieContainer from './pages/MovieContainer'
import AddContainer from './pages/AddContainer'
import InfoContainer from './pages/InfoContainer'
import UpdateContainer from './pages/UpdateContainer'
import DeleteMovie from './pages/DeleteMovie'

const App = ()=>(
    <React.Fragment>
        <Router>
        <ScrollToTop />
            <NavBar/>
            <Switch>
                <Route exact path={["/home","/"]} component={MovieContainer}></Route>
                <Route exact path="/add" component={AddContainer}></Route>
                <Route exact path="/movies" component={MovieContainer}></Route>
                <Route exact path="/movie-info/:id" component={InfoContainer}></Route>
                <Route exact path="/update-movie/:id" component={UpdateContainer}></Route>
                <Route exact path="/delete-movie/:id" component={DeleteMovie}></Route>
                <Route component={notFound}></Route>
            </Switch>
        </Router>
    </React.Fragment>
)

export default App