import React, { Component } from 'react';
import { MessageForm, MessageFormWrap } from '../styled-components/components/messageForm';
import { Input, BigGoldButton, TextArea } from '../styled-components/global';

class MessageFormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      description: "",
      disclaimer: false
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  updateState = (e, prop) => {
    let obj = {};
    obj[prop] = e.currentTarget.value;
    this.setState(obj);
  }
  render(){
    const { name, email, phone, description, disclaimer } = this.state;
    //add disclaimer
    return (
      <MessageFormWrap>
        <MessageForm>
          <h2>How Can We Help You?</h2>
          <p>Fields marked with an * are required.</p>
          <form onSubmit={this.submitForm}>
            <Input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => {this.updateState(e, "name")}}
            />
            <Input
              placeholder="Email Address*"
              type="email"
              value={email}
              required
              onChange={(e) => {this.updateState(e, "email")}}
            />
            <Input
              placeholder="Phone"
              type="phone"
              value={phone}
              onChange={(e) => {this.updateState(e, "phone")}}
            />
            <TextArea
              placeholder="Brief description of your legal issue."
              value={description}
              onChange={(e) => {this.updateState(e, "description")}}
            />
            <BigGoldButton type="submit">Send Your Information Today</BigGoldButton>
          </form>
        </MessageForm>
      </MessageFormWrap>
    );
  }
}

export default MessageFormComponent;
