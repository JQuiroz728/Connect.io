/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Profile.css';
import {Link} from 'react-router-dom'

export default function Profile() {
    return(
        <div  style = {{
            display:'flex',
            justifyContent:"space-around",
            margin:"25px 120px",
            maxWidth:"1200px"

        }}>
            
            <div style={{width:'200px'}}>
                <img className = "image" style = {{width:"200px", height:"200px", borderRadius:"100px"}}
                src={require('../../assets/images/girl.jpeg').default} alt="pic"
                />
                <h4>Hamida Tajik</h4>
                <p>I am a Computer Engineering student at City College.
                    I love to read books and watch Netflix in my free time.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
            
                    <h4 style ={{textAlign:"left"}}>Badges</h4>
                    <div style = {{display:"flex", justifyContent:"space-between", width:"138%", margin:"30px 0px"}}>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {require('../../assets/images/star-badge.png').default}/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {require('../../assets/images/1year.PNG').default}/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {require('../../assets/images/2year.PNG').default}/>
                    </div>

                    <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {require('../../assets/images/3year.PNG').default}/>
                    <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = {require('../../assets/images/5year.PNG').default}/>
                    {/* <img style = {{width:"80px", height:"80px", borderRadius:"40px"}}
                    src = "images/person.jpg"/> */}
                    </div>         

            </div>
            <div>
                <h4 style ={{textAlign:"left",margin:"50px 0px"}}>Connections</h4>
                <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person.jpg"/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person.jpg"/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person.jpg"/>
                    </div>
                
                <h4 style ={{textAlign:"left", margin:"50px 0px"}}>Possible Connections</h4>
                <div style = {{display:"flex", justifyContent:"space-between", width:"138%"}}>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person.jpg"/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person.jpg"/>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}
                    src = "images/person.jpg"/>
                    </div>
                    <h5 style ={{textAlign:"left", margin:"50px 0px"}}>To view your full activity history</h5>
                    <button className="btn waves-effect waves-light" style = {{background: "black", margin:"0px 170px"}}>
                         <Link to = "/"> CLICK HERE</Link> 
                    </button>
                    
            </div>
        </div>
    );
}