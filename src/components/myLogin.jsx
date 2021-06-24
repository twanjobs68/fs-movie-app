import React from 'react';
import authenUser from './Authlogin';

function myLogin(props) {
    return (
        <div>
            {/* <!--Login in page header--> */}
            <div className ="circle"> 
              <h1>Welcome to Twans Movie Page</h1>
              
            </div> 
    
          {/* <!--Web page heading--> */}
          {/* <!-- </form> --> */}
     
        <form class = "box" action ="myLogin.html" method= "POST">
        <div1>
            <h2>
                <center>Movie USER LOGIN</center>       
            </h2>
        </div1>
        <br></br>

    {/* <!--placeholder for user name  entrance with maximum length of 25 characters--> */}
        <div2>
            <center><h2> Username:
                <input type="text" name ="username" size = "15" maxlength="30"/>
            </h2>
            {/* <!--placeholder for user password--> */}
            {/* <!--passord will appear as asterisk as typed with the type attribute password--> */}
            <h2> Password:
                <input type="password" name ="password" size = "15" maxlength="25"/>
            </h2></center> 
        </div2>
        
        <div3>
            {/* <!-- create submit button --> */}
            <center>
                <input type="submit" name="" value= "Enter" onclick="authenUser"/>
            </center>
        </div3> 
        
        
        </form>
        </div>
    );
}

export default myLogin;