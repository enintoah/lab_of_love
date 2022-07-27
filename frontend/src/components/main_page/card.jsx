import React from 'react';

class Card extends React.Component{
  constructor(props){
    super(props)

    this.test = this.test.bind(this)
  }
  
  test(e) {
    e.preventDefault()
    this.props.redirectToMessaging(e)
  }

  render(){
    return(
      <div className='card' onClick={this.test} value={this.props.match.user_id}>
        <img className='card-img' src='https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png'/>
        <div className='info-container' >
          <p>{this.props.match.name}</p>
          <p>Age: {this.props.match.age}</p>
          <p>Gender: {this.props.match.gender}</p>
          <p>Happiness Level: {this.props.match.happinessLevel}</p>
          <p>Commitment Level: {this.props.match.commitmentLevel}</p>
        </div>
      </div>
    )
  }
}


export default Card