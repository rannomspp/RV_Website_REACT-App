import React from 'react';

const Contact = () => {
  return <div id="CONTACT">
  <h2>Contact!</h2>
  <form action="/action_page.php" method="post"><p>Name: </p><input required type="text" name="username" maxLength={10} size={20} />
    <p>Email: </p><input required type="email" name="email" size={20} />
    <br />
    <p>Write a Message!</p>
    <textarea required name="message" defaultValue={""} />
    <br />
    <input id="send" type="submit" defaultValue="Send" />
  </form>
</div>;
};

export default Contact;
