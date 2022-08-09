import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Welcome from "./welcome";


const mapStateToProps = (state) =>{
   return {
        currentUser:state.session.user
   }
}

const mapDispatchToProps = dispatch =>{
     return {
        demo: (user)=> dispatch(login(user))
     }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Welcome)