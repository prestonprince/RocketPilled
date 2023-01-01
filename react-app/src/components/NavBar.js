import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './cssModules/NavBar.module.css'
import SideBar from './sideBar/SideBar';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const history = useHistory()

  const handleHome = () => {
    history.push('/')
  }

  const handleSignIn = () => {
    history.push('/login')
  }

  const handleSignUp = () => {
    history.push('/sign-up')
  }

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_links}>
        <div className={styles.houseContainer} onClick={handleHome}>
        <span className="material-symbols-outlined" id={styles.house}>
          other_houses
        </span>
        </div>
        {!user ? (
          <div className={styles.sign_up_login}>
            <div onClick={handleSignIn} id={styles.login}>
              <span className={styles.link} id={styles.loginText}>
                  Sign In
              </span>
            </div>
            <div onClick={handleSignUp} id={styles.signup}>
              <span className={styles.link} id={styles.signupText}>
                  Join Free
              </span>
            </div>
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
