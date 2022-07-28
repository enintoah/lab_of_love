import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h2>{this.props.message.message}</h2>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default Message