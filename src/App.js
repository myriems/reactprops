import React from "react";
import ProfileComponent from "./Profile/ProfileComponent";
import './App.css';

function App() {
  const  handleName = () => alert (`This is the profile of : Myriem Slama`)
  return (
    <div className="App" style={{display:"grid", placeItems: "center", alignItems:'center', height:"100vh", backgroundColor:"#becccc"}}>
    <ProfileComponent  fullName={'Myriem Slama'} bio={"Existence thinker and art lover"} profession={'Poet'} handleName={handleName}>
    <img src={'./Assets/profilePhoto.png'} style={{margin:"2em",position:"relative",width:"10em", borderRadius:"50em", border:"solid 0.2em #becccc"}}/> 
    </ProfileComponent>
  </div>
  );
}

export default App;