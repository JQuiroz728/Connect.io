import React from "react";
import {Link} from "react-router-dom";
import NotificationsPiece from "./NotificationsPiece";
import Sidebar from "./ConnectionsSidebar";


class NotificationsPage extends React.Component {
  render() {
    const style = {}
    return (
      <div style={style}>
       <Sidebar/>
        <div style={{display: 'inline-block', marginLeft: '200px'}}>
          <NotificationsPiece Notification='Meriselle ' Type=' has sent you a' Preview=' Connection Request '/>
          <NotificationsPiece  Notification='Francesca '  Type=' has liked your post ' Preview=' "New Ways to Network in 2021" '/>
          <NotificationsPiece  Notification='Gleo '  Type=' has commented on your post. ' Preview=' "Inciteful! This is actually useful for my..." '/>
          <NotificationsPiece  Notification='Lynjean '  Type=' has messaged you. ' Preview=' "Hey, I was wondering if you were about to speak at..." '/>
          <NotificationsPiece  Notification='Julia '  Type=' has sent you a ' Preview=' Connection Request '/>
          <NotificationsPiece  Notification='Diane '  Type=' has commented on your post. ' Preview=' "I get what you mean, but I think you forget that..." '/> 
        </div>
      </div>
    );
  }
}
export default NotificationsPage;