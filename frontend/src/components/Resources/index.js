import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
background: cornflowerblue;
border-radius: 8px;
color: white;
height: ${props => props.small ? 40 : 60}px;
width: ${props => props.small ? 60 : 120}px;
vertical-align: top;
margin-left: 10px;
margin-right: 10px;
`;

class Resources extends React.Component {
  render() {
    const style = {
      textAlign: 'center',
    }
    return (
      <div style={style}>
        <p>
          This is the Resources Page.
        </p>
        <Link to="/TempResume"><Button>
            Resume Review/Interview Prep
          </Button>
        </Link>
        <Link to="/tempnetworking"><Button>
            Networking Events
          </Button>
        </Link>
        <Link to="/tempjobboard"><Button>
            Job Board
          </Button>
        </Link>
      </div>
    );
  }
}

export default Resources;