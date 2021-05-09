import React, { Component } from 'react';
import { MessageForm, MessageFormWrap, MessageLinks, MessageDisclaimer } from '../styled-components/components/messageForm';
import { Input, BigGoldButton, TextArea, FlexDiv, HalfSize } from '../styled-components/global';

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
    fetch('/emailer', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(res => {
      alert("An email has been submitted to the associates at Nelson Rozier. Someone will be in contact with you shortly.")
      this.resetState();
    })
    .catch(err => {
      alert("Something went wrong. Please contact Nelson Rozier directly via email or telephone. We are sorry for the inconvenience.")
      this.resetState();
    })
  }
  resetState = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      description: "",
      disclaimer: false
    })
  }
  updateState = (e, prop) => {
    let obj = {};
    obj[prop] = e.currentTarget.value;
    this.setState(obj);
  }
  updateCheckbox = () => {
    this.setState({disclaimer: !this.state.disclaimer})
  }
  render(){
    const { name, email, phone, description, disclaimer } = this.state;
    const buttonDisabled = disclaimer == true && email ? false : true;
    return (
      <MessageFormWrap id="consultation">
        <MessageForm>
          <h2>How Can We Help You?</h2>
          <p>Fields marked with an * are required.</p>
          <form onSubmit={this.submitForm}>
            <FlexDiv>
              <HalfSize>
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
              </HalfSize>
              <HalfSize>
                <TextArea
                  placeholder="Brief description of your legal issue."
                  value={description}
                  onChange={(e) => {this.updateState(e, "description")}}
                />
              </HalfSize>
            </FlexDiv>
            <FlexDiv>
            <HalfSize>
              <MessageLinks>
                <a href="/disclaimer">Disclaimer</a> | <a href="/privacy">Privacy Policy</a>
              </MessageLinks>
              <MessageDisclaimer>
                <input required type="checkbox" id="disclaimer" name="disclaimer" checked={disclaimer} onChange={this.updateCheckbox}/>
                <label htmlFor="disclaimer">I Have Read The Disclaimer *</label>
              </MessageDisclaimer>
            </HalfSize>
            <HalfSize>
              <BigGoldButton className={buttonDisabled ? "buttonDisabled" : ""} type="submit">Send Your Information Today</BigGoldButton>
            </HalfSize>
            </FlexDiv>
          </form>
        </MessageForm>
      </MessageFormWrap>
    );
  }
}

export default MessageFormComponent;
