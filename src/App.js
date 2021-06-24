import './App.css';
import authenUser from './components/Authlogin';
import myLogin from './components/MyLogin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className="App">
      

      <switch>
         <Route path="home" exact component={MyLogin}/> */}
        {/* <Route path="/" exact component={Home} />
        <Route path="/moviedata" component={Moviedata} />
        <Route path="/searchapi" component={Searchapi} />
        <Route path ="/home" component={Home} /> */}
      </switch>
    </div>
    </Router>
  );
}

export default App;
