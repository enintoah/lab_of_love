import { connect } from "react-redux";
import { login } from "../actions/session_actions";
import Welcome from "./welcome";

const mapDispatchToProps = dispatch =>{
     return {
        demo: ()=> dispatch(login({email:"demo@gmail.com",password:"123456"}))
     }
    
}

export default connect(null,mapDispatchToProps)(Welcome)