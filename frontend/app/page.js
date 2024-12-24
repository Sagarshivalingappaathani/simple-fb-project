"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [id, setId]=useState('');
  const [name, setName] = useState('');

  async function handleSubmit(){
    const url = 'http://localhost:8000/users';
    const res = await axios.post(url, {id, name});
    console.log(res);
  }

  return (
    <div className="flex flex-col w-1/2 text-black">
      <input value={id} onChange={(event)=>{
        setId(event.target.value);
      }}/> 
      <input value={name} onChange={(event)=>{
        setName(event.target.value);
      }}/>
      <button onClick={handleSubmit} className="text-white">submit</button>
    </div>
  );
}
