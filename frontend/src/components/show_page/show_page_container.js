import {connect} from 'react-redux'
import Show from './show_page'

const mapStateToProps = (state) =>{
    return{
       currentUserProfile: state.entities.currentUserProfile,
       currentUser: state.session.user
    }
}

const mapDispatchToProps = ()=>{
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)