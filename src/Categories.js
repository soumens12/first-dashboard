import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Categories = () => {
    return (
        <div>
            <h1>Nested Routing</h1>
            <div className='nested d-flex gap-3'>
                <NavLink to="" end className={({ isActive }) => `btn btn-primary ${isActive ? "active-link" : ""}`}>Category 1</NavLink>
                <NavLink to="category2" className={({ isActive }) => `btn btn-primary ${isActive ? "active-link" : ""}`}>Category 2</NavLink>
            </div>

            <Outlet />
        </div >
    )
}

export default Categories
