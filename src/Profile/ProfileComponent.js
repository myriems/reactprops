import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


const ProfileComponent = (props) => {
    const {fullName, bio, profession, children,handleName} = props 
    return (
      <div  style={{backgroundColor:"grey" , width:"20em", height:'27em', borderRadius:"1em"}}>

      <div>
         { children }
     </div>

      <div style={{margin:'2em' , position:"relative", bottom:"1em" }}>
        <h1 style={{color: "#becccc"}}> {fullName} </h1>              
         <p style={{fontWeight:"lighter"}}> {bio} </p>
         <h4 style={{fontWeight:"bold"}}> {profession} </h4>
         <FontAwesomeIcon icon={faInfoCircle} onClick={()=> handleName()} style={{color: "#becccc", float:"right", cursor:'pointer'}}></FontAwesomeIcon>
      </div>
    
  </div>        
    );
}

ProfileComponent.defaultProps = {
    fullName : "fullName",
     bio:"bio",
    profession : "profession",
   };

ProfileComponent.propTypes = {
    fullName: PropTypes.string,
     bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
  };


  

export default ProfileComponent;


