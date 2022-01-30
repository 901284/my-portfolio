import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {
  return (
    <div>
      <Router>
      <div className="noise"></div>
          <div className="App">
            <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/about" exact><About /></Route>
              <Route path="/projects" exact><Projects /></Route>
              <Route path="/contact" exact><Contact /></Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
