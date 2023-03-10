import React from 'react';
import { useHistory } from 'react-router-dom';
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
    <div className={styles.poppaContainer}>
      <div className={styles.nav_container}>
        {/* <div className={styles.nav_links}> */}
          <div className={styles.houseContainer} onClick={handleHome}>
            <span className="material-symbols-outlined" id={styles.house}>
              other_houses
            </span>
          </div>
          <div className={user ? styles.logoContainer : styles.logoNoUser} onClick={handleHome}>
            <img 
              alt='logo'
              className={styles.logo}
              src="https://media.discordapp.net/attachments/1049445170778738789/1059992237775269929/logo.png?width=488&height=488">
            </img>
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
        {/* </div> */}
      </div>
    </div>
  );
}

export default NavBar;
