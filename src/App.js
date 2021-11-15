import './App.css';
import {useState} from "react";

export default function App() {
  return (
    <div className="App">
   <LikeCounter/>
    </div>
  );
}


function LikeCounter(){
  const[Like,setLike]=useState(0);
  console.log(Like)
  return(
    <div>
<button type="button" onClick={()=> {  setLike(Like+1)}}>Like</button>
<p>{Like}</p>

    </div>
  )
}