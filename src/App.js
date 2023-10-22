import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Input from './Components/Input';
import Show from './Components/Show';

function App() {
  const[city,setCity]=useState("")
  return (
    <>
  <Navbar />
    <h1 className="text-center m-4 mb-4">WELCOME TO EXPRESS WEATHER</h1>
      <Input city={setCity}/>
      {(city.length!=0) && < Show text={city}/>}
    </>
  );
}

export default App;
