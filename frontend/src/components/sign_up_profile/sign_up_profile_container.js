import { connect } from 'react-redux';
import CreateProfile from './sign_up_profile';
import { createSignInProfile } from '../../actions/user_profile_actions';
import { login } from '../../actions/session_actions';
import { receiveCreateProfileErrors } from '../../actions/user_profile_actions';


const mapStateToProps = (state) =>{
     return{
        currentUser:state.session.user,
        errors:state.errors.UserProfile,
     }
}
  

const mapDispatchToProps = (dispatch) =>{
    return{
       createSignInProfile: (profile) => dispatch(createSignInProfile(profile)),
       login: user => dispatch(login(user)),
       receiveErrors: errors => dispatch(receiveCreateProfileErrors(errors))
    }
}

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(CreateProfile)