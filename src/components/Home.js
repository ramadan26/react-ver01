import React from "react";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Home!</h1>
        <p>
          My Name : {this.props.name}, My Age: {this.props.age}
        </p>
        <p>User Object => Name : {this.props.user.name}</p>
        <h3>Hobbies: </h3>
        <ul className="list-group">
          {this.props.user.hobbies.map(hobby => (
            <li className="list-group-item">{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}
