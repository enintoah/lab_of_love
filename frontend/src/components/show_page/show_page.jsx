import React from "react";
import { Link } from "react-router-dom";
class Show extends React.Component{
  
    render(){
        const currentUser = this.props.currentUser
        return(
            <div>
             <button><Link to={`/users/${currentUser.id}/edit`}>Edit</Link></button>
                <h1>User show page</h1>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Show;