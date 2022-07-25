import React from 'react'
import { AiOutlineMail} from 'react-icons/ai';
import { BsFillPhoneFill} from 'react-icons/bs';
import { FaMapMarkerAlt} from 'react-icons/fa';


const contactInformations={
  email:'yosrajarraya50@gmail.com',
  phone:'+216 95542309',
  adress:{
    street: 'Route Gremda km 7',
    city: 'sfax',
    postalCode: '3012',
    country: 'Tunisie',
  }
}
function Contact() {
  return (
    <div className='container mt-5'>
<div>
< AiOutlineMail size={30}/>
<span style={{marginLeft:'6px'}}>{contactInformations.email}</span>
  
</div>
<div className='mt-3'>
< BsFillPhoneFill size={30}/>
<span style={{marginLeft:'6px'}}>{contactInformations.phone}</span>
  
</div>
<div className='mt-3'>
< FaMapMarkerAlt size={30}/>
<span style={{marginLeft:'6px'}}>{contactInformations.adress.street},{contactInformations.adress.city},{contactInformations.adress.postalCode},{contactInformations.adress.country}</span>
  
</div>
    </div>
  )
}

export default Contact