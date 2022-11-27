import React from "react";
import ProfileComponents from "./Profile/ProfileComponents";
import pic from './me.png'
import './App.css'

function App({

  // fullName = " Mostafa Amine Ahmed ",
  // bio,
  // profession = "FrontEnd  web developer",
  // imge={pic},
  handleName = (e)=>{
    e.preventDefault();
    alert(`My Name Is Mostafa Amine`)
  }
 
}) {
  return (
    <div className="App">
      <header className="App-header">

        <ProfileComponents>
         <h1>My Name Is Mostafa Amine</h1>
         <h2>No bio needed </h2>
         <h3>Iam a frontend </h3>
         <img src={pic} className='mypic' alt="this is pic"></img>
         <button type='submit' onClick={handleName}> Click Here</button>
        </ProfileComponents>
      </header>
    </div>
  );
}
export default App;
