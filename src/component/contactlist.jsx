import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Contactlist(props) {
    const {contact,removecontact} = props;
    console.log(contact);
    const contactlist = contact.map((val) => (
        <div className='contactlist'>
            <div className='contactlist-name'>{val.data.name}</div>
            <div className='contactlist-email'>{val.data.email}</div>
            <span onClick={() => removecontact(val.id)}><DeleteForeverIcon/></span>
        </div>
    ))
    return ( 
        <>
            <h2>ContactList</h2>
            {contactlist}
        </>
     );
}
export default Contactlist;