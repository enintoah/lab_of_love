import { connect } from 'react-redux';
import CreateProfile from './sign_up_profile';
import { createSignInProfile } from '../../actions/user_profile_actions';

const mapStateToProps = (state) =>{
     return{
        currentUser:state.session.user,
        errors:state.errors.session
     }
}


const mapDispatchToProps = (dispatch) =>{
    return {
       createSignInProfile: profile => dispatch(createSignInProfile(profile))
    }
}

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(CreateProfile)