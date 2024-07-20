import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div>

        <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Blog Application</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link href={`/post`} className='btn btn-secondary '>Post Page Material Ui Example</Link></li>
            
            </ul>
        </div>
        </div>
    </div>
  )
}

export default NavBar