import React from 'react'
import webImage from '../images/photo-2.png'
function Home() {
  return (
    <div className="alert alert-info  mt-5  container"role="alert">
      <img src="/images/photo-1.jpg" width =" 150px" className='width-border-radius'alt="My Photo" />
<p>Hello My  Name is Yosra , I am a Fullstack Web Developer</p>
<img src={webImage} alt="Web" style={{width:'100%'}} />
    </div>
  )
}

export default Home