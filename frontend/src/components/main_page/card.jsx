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
          <p value={this.props.match.user_id} >{this.props.match.name}({this.props.match.pronouns})</p>
        </div>
        <div className='info-container' value={this.props.match.user_id}>
          <img onClick={this.test} value={this.props.match.user_id} className='card-img' src={this.props.match.imageUrl} />
          <div onClick={this.test} value={this.props.match.user_id} className='text-container' >
            <p value={this.props.match.user_id} >Age: {this.props.match.age}</p>
            <p value={this.props.match.user_id} >Happiness Level: {this.props.match.happinessLevel}</p>
            <p value={this.props.match.user_id} >Commitment Level: {this.props.match.commitmentLevel}</p>
            <p value={this.props.match.user_id} style={{fontWeight: 'bold'}}>Personality: <ul value={this.props.match.user_id} style={{fontWeight: 'lighter'}}>{this.props.match.personality.map(el => {
              return(
                <li value={this.props.match.user_id}>-{el}</li>            
                )
            })}</ul></p>
          </div>
        </div>
      </div>
    )
  }
}


export default Card