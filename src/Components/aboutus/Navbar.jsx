import React from 'react'
import logo from "../../assets/logo.png";
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar p-4 px-[30px] '>
        <div className='flex justify-between items-center'>
            {/* logo */}
            <div className='flex space-x-6 items-center'>
                <img src={logo} />
                <h1 className='text-lg font-bold'>My Loan Mart</h1>
            </div>
            {/* links */}
            <ul className='flex space-x-[40px] text-lg font-semibold'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li className='dropdown'>
                    <button>Services</button>
                    <div className='content'>
                        <p>Home Loan</p>
                        <p>Business Loan</p>
                        <p>Personal Loan</p>
                        <p>Mortage Loan</p>
                    </div>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
