
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {
  return (
    <>

    <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
        </Switch>
    </Router>

    </>
  )
}

export default App
