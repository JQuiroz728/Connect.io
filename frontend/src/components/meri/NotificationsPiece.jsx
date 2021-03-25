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


class NotificationsPiece extends React.Component {
    onButtonClickHandler = () => {
        window.alert('Redirect to Notification')
      };
    render() {
        return (
            <div style={{display: 'block', margin: '5px', borderWidth: '1px', borderColor: 'gray', borderStyle: 'solid', padding: '5px', boxShadow: '1px'}}>
                <div style={{ display: 'inline-block', width: '500px'}}>
                    {this.props.Notification} 
                    {this.props.Type}
                    <br/>
                    {this.props.Preview}
                </div>
                <CSBButton onClick={this.onButtonClickHandler}>View</CSBButton>
          </div>
        );
    }
}

export default NotificationsPiece;