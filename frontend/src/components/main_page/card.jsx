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
        <div className='header' onClick={this.test} value={this.props.match.user_id}>
          <p>{this.props.match.name}({this.props.match.pronouns})</p>
        </div>
        <div className='info-container' value={this.props.match.user_id}>
          <img onClick={this.test} value={this.props.match.user_id} className='card-img' src='https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png'/>
          <div onClick={this.test} value={this.props.match.user_id} className='text-container' >
            <p>Age: {this.props.match.age}</p>
            <p>Happiness Level: {this.props.match.happinessLevel}</p>
            <p>Commitment Level: {this.props.match.commitmentLevel}</p>
            <p style={{fontWeight: 'bold'}}>Personality: <ul style={{fontWeight: 'lighter'}}>{this.props.match.personality.map(el => {
              return(
                <li>-{el}</li>            
                )
            })}</ul></p>
          </div>
        </div>
      </div>
    )
  }
}


export default Card