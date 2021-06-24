import './App.css';
import Navbr from './Components/Navbr';
import Moviedata from './Components/Moviedata';
import Searchapi from './Components/Searchapi';

//1. import browser router from react router dom.  Add switch and route tools from react router dom as well
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    //2. wrap application in a router(browser router) to be able to use Router through application
    <Router>
      <div className="App">
        <Navbr />
        {/*3 make a route to the component by replacing <about /> with the following*/}
        {/*4.Use Switch(wrap routes in a switch tag. go to path don't render anything else) and Exact to go to exact(if component is exactly the forward slash then go to home) paths*/}
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/moviedata" component={Moviedata} />
          <Route path="/searchapi" component={Searchapi} />
          <Route path ="/home" component={Home} />
        </switch>


      </div>
    </Router>
  );
}

const Home = () => (
  <div className="homecss">
    <h2>Home</h2>
  
  </div>
)
export default App;
