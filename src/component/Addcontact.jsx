import React, { useState } from 'react';

function AddContacts({addcontact}) {

    const [ContactData, setContactData] = useState({ name: "", email: "" });
    const handlechange = (e) =>{
        if(e.target.name == "name"){
                    setContactData({...ContactData, name:e.target.value})
        }
        else{
            setContactData({...ContactData, email: e.target.value})
        }

    }

    const handleAdd = () =>{
        e.preventDefault();
        if(ContactData.name === "" || ContactData.email === ""){
            alert("please enter name and email");
            return;
        }
        addcontact(ContactData);
        setContactData({ name: "", email: "" })
    }
    return ( 
        <>
        <div className='container'>
            <h2> Add Contact </h2>
        </div>
        <form className='form'>
            <label className='form-label'>Name : </label>
            <input placeholder='Enter Name' type='text' name='name' value={ContactData.name} onChange={handlechange}/><br/>
            <label>Email : </label>
            <input placeholder='Enter Email ' type='email' name='email' value={ContactData.email} onChange={handlechange}/>
        </form>
        <button onClick={handleAdd}> Add Contact</button>
        </>
     );
}

export default AddContacts;