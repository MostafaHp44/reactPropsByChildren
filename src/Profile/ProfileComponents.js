import React from "react";
import PropTypes from "prop-types";
import pic from '../me.png'
import '../App.css'



function Profile({ fullName, bio, profession, handleName,children }) {
  const stylesObject = { color: "blue", textAlign: "center" };
  return <div style={stylesObject}>

      <h3>{fullName}</h3>
      <p>{bio}</p>
      <p>{profession}</p> 
      <img class ='mypic'src={pic} alt='pic'/>
      
      <br/>

      <button onClick={handleName}>
          Click me
      </button>
  </div>;
}
Profile.defaultProps = {
  fullName: "mostafa amine ahmed",
  bio:"Just Try it I am here to learn react and be frontend",
  profession: "profession",
  children:{pic}
}
Profile.propTypes = {
  fullName: PropTypes.bool,
  bio: PropTypes.string,
  profession: PropTypes.string
}

export default Profile;