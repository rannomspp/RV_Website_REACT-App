import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      status: ""
    };
  };

  componentDidMount = () => {
    axios.get("http://localhost:3001/").then(response => {
      const newState = response["data"];
      this.setState({
        status: newState
      });
    });
  };

  render(){ return (
    <div id="CONTACT">
    <h2>Contact!</h2>
    {this.state.status}
    <form action="/action_page.php" method="post"><p>Name: </p><input required type="text" name="username" maxLength={10} size={20} />
      <p>Email: </p><input required type="email" name="email" size={20} />
      <br />
      <p>Write a Message!</p>
      <textarea required name="message" defaultValue={""} />
      <br />
      <input id="send" type="submit" defaultValue="Send" />
    </form>
    </div>
  )};
};

export default Contact;
