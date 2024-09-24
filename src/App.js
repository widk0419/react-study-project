import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import routes from './routes';

function App() {

  return (

    <Router>
      <Navbar />
       <div className="container">
        <Switch>
            {routes.map((route) => {
              return <Route key={route.path} exact path={route.path} component = {route.component} />
            })}
        </Switch>
      </div>
    </Router>
    
  ); 
}

export default App;