import React from 'react';
//5.import link from react router dom so we can link pages
import {Link} from "react-router-dom"
function Navbr() {

 //   {/* style inside of component*/}
    const navStyle ={

        display: "flex", 
        justifyContent:"space-around",
        color: "white"
    }

    return (
        <div>
            < nav >
                <Link to= "/">
                     <h3>2K's Movie Search</h3>
                </Link>
               
                {/* <ul> */}
                <ul style = {navStyle}>
                    {/*6.wrap each li in link tag*/}
                    {/* <Link to = "/moviedata">
                       <li>Movie Info</li>
                    </Link> */}
                    {/* <Link to = "/home">
                       <li>HOME</li>
                    </Link> */}
                    <Link to = "/searchapi">
                       <li>Search</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
export default Navbr;