import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Categories = () => {
    return (
        <div>
            <h1>Categories Heading</h1>
            <div className='nested'>
                <NavLink to="category1" className={({ isActive }) => isActive ? "active-link" : ""}>Category 1</NavLink>
                <NavLink to="category2" className={({ isActive }) => isActive ? "active-link" : ""}>Category 2</NavLink>
            </div>


            <Outlet />
        </div >
    )
}

export default Categories
