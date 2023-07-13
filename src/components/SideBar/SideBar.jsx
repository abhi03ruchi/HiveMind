import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import user from '../../data';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sideBarProfile">
          <img src={user[0].image} alt="" className="sideBarProfileImg" />
          <span className="sidebarProfileName">{user[0].name}</span>
          <div className="sideshortDesc">{user[0].desc}</div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Link to="/" className="sidebarLink">
                Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/project" className="sidebarLink">
                Projects
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/team" className="sidebarLink">
                My Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">LogOut</h3>
        </div>
      </div>
    </div>
  );
}
