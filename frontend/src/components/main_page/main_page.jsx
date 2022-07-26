import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../nav/nav_container";
class MainPage extends React.Component{
    render() {
        return (
          <div>
            <h1>Love of Lab</h1>
                  <div>
                     <NavBar/>
                 </div>

            <footer>
              Copyright &copy; 2022 Lab
            </footer>
          </div>

          
        );
      }

}


export default MainPage;