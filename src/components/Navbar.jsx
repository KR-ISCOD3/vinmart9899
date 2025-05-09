import React from 'react'
import { NavLink } from 'react-router-dom'
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

function Navbar() {
  return (
    <div className='container-fluid'>
        <nav className='navbar'>
            <div className='container py-2'>
                <div className='d-flex align-items-center font-logo'>
                    <div className='rounded-circle overflow-hidden border border-4 border-secondary-subtle' style={{width:60,height:60}}>
                        <img src="./logo/vinmart.png" alt="" className='w-100 h-100 object-fit-cover'/>
                    </div>
                    <div>
                        <NavLink  className='m-0 ms-1 fs-2 nav-link'>
                            Vinmart
                            <sub>9899</sub>
                        </NavLink>
                    </div>
                </div>
                <div className='d-none d-lg-block'>
                    <ul className='nav font-text'>  
                        <li>
                            <NavLink className="fs-4 nav-link text-dark">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink className="fs-4 nav-link text-dark">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink className="fs-4 nav-link text-dark">Location</NavLink>
                        </li>
                        <li>
                            <NavLink className="fs-4 nav-link text-dark">
                                Review
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* cart */}
                <div className='d-none d-lg-flex'>
                    <button type="button" className="btn position-relative me-2">
                        <PiShoppingCartSimpleDuotone className='fs-2'/>
                        <span style={{top:10,left:45}} className="position-absolute translate-middle badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>

                    <div className="dropdown">
                                
                            <button className="btn dropdown-toggle d-flex align-items-center border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">  
                                <div style={{width:50,height:50}} className='bg-secondary rounded-circle overflow-hidden me-1'>
                                    <img src="./image/lokru.png" alt="" className='w-100 h-100 object-fit-cover'/>
                                </div>
                                <span className='fs-5 font-khmer'>គ្រូអាយធីចិត្តល្អ</span>
                            </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
