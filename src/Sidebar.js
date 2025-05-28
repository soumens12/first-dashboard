import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsMenuButtonWideFill, BsFillGearFill, BsX
} from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ openSide, toggleSide }) => {
    return (
        <aside id='sidebar' className={openSide ? "sidebar-open" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon' />
                    Shop
                </div>
                <span className='icon close_icon' onClick={toggleSide}>
                    {/* <BsX /> */}
                    <BsX />
                </span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <NavLink
                        to="/"
                        onClick={toggleSide}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                        end // Important for exact root path
                    >
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </NavLink>

                </li>
                <li className='sidebar-list-item'>
                    <NavLink
                        to="/product"
                        onClick={toggleSide}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <BsFillArchiveFill className='icon' /> Products
                    </NavLink>

                </li>
                <li className='sidebar-list-item'>
                    <NavLink
                        to="/category"
                        onClick={toggleSide}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                    </NavLink>

                </li>
                <li className='sidebar-list-item'>
                    <NavLink
                        to="/customer"
                        onClick={toggleSide}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <BsPeopleFill className='icon' /> Customers
                    </NavLink>
                </li>

                <li className='sidebar-list-item'>
                    <NavLink
                        to="/reports"
                        onClick={toggleSide}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </NavLink>
                </li>
                <li className='sidebar-list-item'>
                    <NavLink
                        to="/settings"
                        onClick={toggleSide}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <BsFillGearFill className='icon' /> Settings
                    </NavLink>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar
