import './App.css';
import authenUser from './components/Authlogin';
import myLogin from './components/MyLogin';
import './components/Login.css'
import Searchapi from './components/Searchapi';
import MovieHome from './components/MovieHome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
      <div className="wrapper">
         <h4>application</h4>

    <Router>
      <div className="App">
      

      <switch>
         {/* <Route path="myLogin" exact component={MyLogin}/>  */}
        {/* <Route path="/" exact component={Home} />
        <Route path="/moviedata" component={Moviedata} />*/}
        <Route path="/searchapi" component={Searchapi} />
        {/*<Route path ="/home" component={Home} /> */}
      </switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
