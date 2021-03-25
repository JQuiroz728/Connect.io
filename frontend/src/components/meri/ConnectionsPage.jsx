import React from "react";
import {Link} from "react-router-dom";
import ConnectionsPiece from "./ConnectionPiece";
import Sidebar from "./ConnectionsSidebar";

class ConnectionsPage extends React.Component {
  render() {
    const style = {}
     return (
      <div style={style}>
        
        <Sidebar/>
        <div style={{display: 'inline-block', marginLeft: '200px'}}>
          <ConnectionsPiece FirstName='Meriselle ' LastName='Ruotolo ' des=' Software Architect at Accenture '/>
          <ConnectionsPiece FirstName='Francesca ' LastName='Ruotolo ' des=' Art Major at Pratt '/>
          <ConnectionsPiece FirstName='Gleo ' LastName='S. ' des=' Secretary at Mayor Office '/>
          <ConnectionsPiece FirstName='Lynjean ' LastName='Q.' des=' Nursing Assistant at Mount Sinai '/>
          <ConnectionsPiece FirstName='Julia ' LastName='D' des=' Planning Technician at Wilmington Construction '/>
          <ConnectionsPiece FirstName='Diane ' LastName='L. ' des=' Graduate Student at Tisch School of the Arts '/> 
        </div>
      </div>
    );
  }
}

export default ConnectionsPage;