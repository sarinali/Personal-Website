import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopBar from './components/TopBar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <Router>
      <div className="App">
        <TopBar></TopBar>
        <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/aboutme'>
              <AboutMe></AboutMe>
            </Route>
            <Route exact path='/experience'>
              <Experience></Experience>
            </Route>
            <Route exact path='/projects'>
              <Projects></Projects>
            </Route>
            <Route exact path='/contact'>
              <ContactMe></ContactMe>
            </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
