import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import { useNotification } from '../../context/Notification';

import styles from '../cssModules/LoginForm.module.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()
  const { setContent, setShowModal, setOpen } = useNotification()

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    const e1 = "email : Email provided not found."
    const e2 = 'password : Password was incorrect.'
    if (data) {
      if (data.includes(e1) && data.length < 2) {
        setContent("Member with email not found.")
      } else if (data.includes(e2) && data.length < 2) {
        setContent('Incorrect Password')
      } else {
        setContent("Sorry, invalid login information. The email and/or password you entered is incorrect.")
      }
      setShowModal(true)
      setTimeout(() => {
        setOpen(true)
    }, 50)
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRedirect = () => {
    history.push('/sign-up')
  }

  const handleDemoLogin = async(e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.bar}></div>
        <div className={styles.header}>
          <div className={styles.headTop}>
            <h2 className={styles.title}>SIGN IN</h2>
          </div>
          <div className={styles.headBot}>
            <span className={styles.member}>Not a member yet? <span className={styles.join} onClick={handleRedirect}>Join Free!</span></span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={(e) => handleDemoLogin(e)} className={styles.demo}>Continue with Demo User</button>
        </div>
        <form className={styles.form} onSubmit={onLogin}>
          <div>
            <input
              className={styles.input}
              name='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
              required
            />
          </div>
          <div>
            <input
              className={styles.input}
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
              required
            />
          </div>
          <button className={styles.signIn} type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
