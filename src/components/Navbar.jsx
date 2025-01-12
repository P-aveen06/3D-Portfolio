import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from "../style"
import { logo, menu, close } from "../assets"
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex justify-between items-center py-4 top-0 z-20 bg-primary fixed`}>  
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>3D &nbsp; <span className='sm:block hidden'>| Portfolio</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li className={`hover:text-white text-[18px] font-medium cursor-pointer ${active === "" ? "text-white" : "text-secondary"}`} onClick={() => setActive("")}>
            <Link to="/">Home</Link>
          </li>
          <li className={`hover:text-white text-[18px] font-medium cursor-pointer ${active === "about" ? "text-white" : "text-secondary"}`} onClick={() => setActive("about")}>
            <Link to="/about">About</Link>
          </li>
          <li className={`hover:text-white text-[18px] font-medium cursor-pointer ${active === "works" ? "text-white" : "text-secondary"}`} onClick={() => setActive("works")}>
            <Link to="/works">Works</Link>
          </li>
          <li className={`hover:text-white text-[18px] font-medium cursor-pointer ${active === "contact" ? "text-white" : "text-secondary"}`} onClick={() => setActive("contact")}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              <li className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "" ? "text-white" : "text-secondary"}`} onClick={() => {
                setActive("")
                window.scrollTo(0, 0)
              }}>
                <Link to="/">Home</Link>
              </li>
              <li className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "about" ? "text-white" : "text-secondary"}`} onClick={() => setActive("about")}>
                <Link to="/about">About</Link>
              </li>
              <li className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "works" ? "text-white" : "text-secondary"}`} onClick={() => setActive("works")}>
                <Link to="/works">Works</Link>
              </li>
              <li className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "contact" ? "text-white" : "text-secondary"}`} onClick={() => setActive("contact")}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar