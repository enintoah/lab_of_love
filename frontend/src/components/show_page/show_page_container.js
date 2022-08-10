import {connect} from 'react-redux'
import Show from './show_page'
import { getCurrentUserProfile } from '../../actions/user_profile_actions'
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) =>{
    return{
       currentUserProfile: state.entities.currentUserProfile,
       currentUser: state.session.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getCurrentUserProfile: (id) => dispatch(getCurrentUserProfile(id)),
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Show)