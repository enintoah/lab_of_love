import {connect} from 'react-redux'
import { editUserProfile } from '../../actions/user_profile_actions'
import Edit from './edit_page'

const mapStateToProps = (state)=> {
return {
    currentUserProfile: state.entities.currentUserProfile,
    currentUser: state.session.user
  }
}


const mapDispatchToProps = dispatch =>{
   return {
    editUserProfile: profile => dispatch(editUserProfile(profile))
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Edit)
