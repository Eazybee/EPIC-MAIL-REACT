import React, { Component } from 'react';

class Compose extends Component {
  state = {
    to: 'Individual',
    email: '',
    subject: '',
    message: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onChangeRadio = e => this.setState({ to: e.target.value });

  render() {
    return (
      <div className="right-compose">
        <form name="sendMail" action="#">
          <input type="hidden" value="" name="id" />
          <div className="address">
            <div>
              <label>To :</label>
              <span>
                <input
                  type="radio"
                  value="Individual"
                  onChange={this.onChangeRadio}
                  name="to"
                  checked={this.state.to === 'Individual'}
                  required
                />{' '}
                Individual
              </span>
              <span>
                <input
                  type="radio"
                  value="Group"
                  onChange={this.onChangeRadio}
                  name="to"
                  checked={this.state.to === 'Group'}
                  required
                />{' '}
                Group
              </span>
            </div>
            <div>
              <label>Address :</label>
              <input type="email" name="email" onChange={this.onChange} placeholder="Johndoe@epicmail.com" required />
              <select className="hidden" />
            </div>
          </div>
          <div className="message">
            <input type="text" name="subject" onChange={this.onChange} placeholder="Enter Subject / Topic" required />
            <textarea name="message" onChange={this.onChange} placeholder="Enter message body" required />
          </div>
          <button type="submit">SEND</button>
          <button id="saveMail" form="">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

export default Compose;
