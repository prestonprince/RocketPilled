import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './cssModules/NavBar.module.css'
import SideBar from './sideBar/SideBar';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_links}>
        <div>
          <span>
            <NavLink to='/' className={styles.link} exact={true} activeClassName='active'>
              Home
            </NavLink>
          </span>
        </div>
        {!user ? (
          <div className={styles.sign_up_login}>
            <span>
              <NavLink className={styles.link} to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </span>
            <span>
              <NavLink className={styles.link} to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </span>
          </div>
        ): 
          <div>
            <span className={styles.nav_user}><SideBar user={user} /></span>
          </div>
        }
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to='/my-teams' exact={true} activeClassName='active'>
            My Teams
          </NavLink>
        </li> */}
        {/* <li>
          <LogoutButton />
        </li> */}
      </div>
    </nav>
  );
}

export default NavBar;
