import { connect } from 'react-redux';
import MessagingPage from './messaging_page'

const mapStateToProps = (state, ownProps) => {
  return {
    userProfiles: state.entities.userProfiles,
  }
};

const mapDispatchToProps = dispatch => {
  return{
  }
}

  
  export default connect(mapStateToProps, mapDispatchToProps)(MessagingPage);