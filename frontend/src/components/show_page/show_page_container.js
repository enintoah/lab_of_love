import {connect} from 'react-redux'
import Show from './show_page'

const mapStateToProps = (state) =>{
    return{
       currentUserProfile: state.entities.currentUserProfile,
       currentUser: state.session.user
    }
}



export default connect(mapStateToProps, null)(Show)