import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const CSBButton = styled.button`
background: cornflowerblue;
border-radius: 2px;
color: white;
border-width: 0px;
margin-left: 2px;
margin-right: 2px;
margin-top:2px;
width: 200px;
height: 40px;
`;


class Sidebar extends React.Component {
  onButtonClickHandler = () => {
    window.alert('First 10 Elements will now be Displayed')
  };
  render() {
    return (
      <div style={{display: 'inline-block', height: 'calc(100vh - 50px)', verticalAlign: 'top'}}>
        {/*This is homebar. My hello prop is {this.props.hello}*/}
        <CSBButton onClick={this.onButtonClickHandler}>Connections</CSBButton>
        <br/>
        <CSBButton onClick={this.onButtonClickHandler}>Available Connections</CSBButton>
        <br/>
        <CSBButton onClick={this.onButtonClickHandler}>Invitations</CSBButton>
        <br/>
        <CSBButton onClick={this.onButtonClickHandler}>Invitations Sent</CSBButton>
       <br/>
      </div>
    );
  }
}

export default Sidebar;