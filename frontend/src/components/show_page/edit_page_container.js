import {connect} from 'react-redux'
import { editUserProfile } from '../../actions/user_profile_actions'
import Edit from './edit_page'
import { getCurrentUserProfile } from '../../actions/user_profile_actions'

const mapStateToProps = (state)=> {
return {
    currentUserProfile: state.entities.currentUserProfile,
    currentUser: state.session.user
  }
}


const mapDispatchToProps = dispatch =>{
   return {
    editUserProfile: profile => dispatch(editUserProfile(profile)),
    getCurrentUserProfile: (id) => dispatch(getCurrentUserProfile(id))
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Edit)
