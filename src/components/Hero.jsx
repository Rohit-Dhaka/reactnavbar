import React, { useState } from 'react'

const Hero = () => {
    const [ show ,setShow] = useState(false)
    if(show){
        document.body.classList.add('overflow-hidden')
    }
    else{
        document.body.classList.remove('overflow-hidden')
    }

    const handlelink = () =>{
        setShow(false)
    }
  return (
    <section className=' position-relative overflow-hidden min-vh-100'>
        <nav className='py-4'>
            <div className="container">
            <div className=" d-flex  justify-content-between">
                <a href="">Logo</a>
                <div className={`menulist d-flex gap-5 ${show ? 'left-0' : 'left-100'}`}>
                    <ul className='d-flex  gap-4 p-0 m-0'>
                        <li><a href="">Home</a></li>
                        <li><a href="#about" onClick={handlelink} >About</a></li>
                        <li><a href="#help" onClick={handlelink}>Help</a></li>
                    </ul>
                    <button>Click me</button>
                </div>
                <div className="menuicon d-md-none  d-block z-1" onClick={()=> setShow(!show)}>
                    <span className={`bar ${show ? 'bar1' : ''}`}></span>
                    <span className={`bar my-1 ${show ? 'bar2' :''}`}></span>
                    <span className={`bar ${show ? 'bar3' :''}`}></span>
                </div>
            </div>
            </div>
        </nav>
    </section>
  )
}

export default Hero