import React, { useState } from 'react'

const Home = () => {
  const [ show, setShow] = useState(false)
  return (
    <section className=' bg-light  min-vh-100 overflow-hidden position-relative'>
      <div className="container">
        <nav className='d-flex  justify-content-between align-items-center'>
          <a href="">Logo</a>
          <div className={`menulist d-flex  gap-5 align-items-center ${ show ? "right-0" : "right-100"}`}>
            <ul className=' d-flex gap-4  p-0 m-0'>

              {['Home' ,'About' ,'Box'].map((item,index) =>(
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`}  >{item}</a>

                </li>
              ))}
           
            </ul>
            <button>Click me</button>
          </div>
          <div className="menuicon d-lg-none z-1 d-block " onClick={()=> setShow(!show)}>
            <span className={`bar ${ show ? 'bar1' :' '}`}></span>
            <span className='bar  my-1'></span>
            <span className='bar '></span>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Home


