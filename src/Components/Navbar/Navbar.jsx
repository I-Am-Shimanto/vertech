import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="fixed w-full bg-white">
        <div className='container'>
        <div className="navbar py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0}
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Gaming Laptop</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Business Laptop</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Ultrakook</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Macbook</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>iMac & Mac mini</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>iPad</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Blog</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img className='w-[8rem]' src="images/logo.png" alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Gaming Laptop</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Business Laptop</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Ultrakook</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Macbook</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>iMac & Mac mini</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>iPad</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='text-sm font-semibold text-black'>Blog</summary>
                            <ul className="p-2">
                                <li><Link className='text-sm font-semibold text-black'>Submenu 1</Link></li>
                                <li><Link className='text-sm font-semibold text-black'>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    </div>
        </div>
    </>
  )
}

export default Navbar