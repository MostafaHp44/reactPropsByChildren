import React from "react";
import ProfileComponents from "./Profile/ProfileComponents";
import pic from './me.png'

function App({

  fullName = " Mostafa Amine Ahmed ",
  bio,
  profession = "FrontEnd  web developer",
  imge={pic},
  handleName = (e)=>{
    e.preventDefault();
    alert(`${fullName}`)
  }
}) {
  return (
    <div className="App">
      <header className="App-header">

        <ProfileComponents fullName={fullName}
                            bio={bio} 
                            profession={profession}
                            handleName={handleName}
                            img={imge}>
         
        </ProfileComponents>
      </header>
    </div>
  );
}
export default App;
