import { useEffect, useState } from 'react'
import './App.css'
import Headder from './component/headder'
import AddContacts from './component/Addcontact'
import Contactlist from './component/contactlist'
import './index.css'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [count, setCount] = useState(0)
    const localstroagekey ="contact";

  


// 2. just pass the data to contactlist
  const [contact, setcontact] = useState(()=>{
        return JSON.parse(localStorage.getItem(localstroagekey)) || []

  });


  useEffect(() =>{
    localStorage.setItem(localstroagekey, JSON.stringify(contact),[contact])
  })
// 1. just defining addcontact to get the data from Addcontact.jsx file
  const addcontact = (data) =>{
    setcontact([...contact,{id:uuidv4(),data}]);
  }
  const removecontact = (id) =>{
    const updatelist = contact.filter((val) =>{
      return val.id !== id;
    })
    setcontact(updatelist);

  }


  return (
    <>
      <Headder/>
      <AddContacts addcontact={addcontact}/>
      <Contactlist contact={contact} removecontact={removecontact}/>
    </>
  )
}

export default App
