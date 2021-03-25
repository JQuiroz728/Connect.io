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
width: 100px;
height: 40px;
`;


class ConnectionsPiece extends React.Component {
  onButtonClickHandlerP = () => {
    window.alert('Redirect to Current User Profile')
  };
  onButtonClickHandlerD = () => {
    window.alert('Remove Invitation')
  };
  onButtonClickHandlerA = () => {
    window.alert('Add User to Current User Networkand Remove Invitation')
  };
  render() {
    return (
      <div style={{display: 'block', margin: '5px', borderWidth: '1px', borderColor: 'gray', borderStyle: 'solid', padding: '5px', boxShadow: '1px'}}>
        <div style={{ display: 'inline-block', width: '500px'}}>
          {this.props.FirstName} 
          {this.props.LastName}
          {this.props.des}
        </div>
        <CSBButton onClick={this.onButtonClickHandlerP}>Profile</CSBButton>
        <CSBButton onClick={this.onButtonClickHandlerD}>Decline</CSBButton>
        <CSBButton onClick={this.onButtonClickHandlerA}>Accept</CSBButton>
      </div>
    );
  }
}

export default ConnectionsPiece;