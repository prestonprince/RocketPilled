import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import styles from '../cssModules/LoginForm.module.css'

const SignUpForm = ({ setContent, setShowModal, setOpen }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setContent(data)
        setShowModal(true)
        setTimeout(() => {
          setOpen(true)
        }, 50)
      }
    } else {
      setContent('Passwords do not match')
      setShowModal(true)
      setTimeout(() => {
        setOpen(true)
      }, 50)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value)
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleRedirect = () => {
    history.push('/login')
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.bar}></div>
        <div className={styles.header2}>
          <div className={styles.headTop}>
            <h2 className={styles.title2}>STEP UP YOUR GAME JOIN TODAY</h2>
          </div>
          <div className={styles.headBot}>
            <span className={styles.member2}>
              Already a member? 
              <span onClick={handleRedirect} className={styles.join}> Sign in</span>
            </span>
          </div>
        </div>
        <form className={styles.form2} onSubmit={onSignUp}>
          {/* <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div> */}
          <div>
            <input
              className={styles.input}
              placeholder='Username'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              required
            ></input>
          </div>
          <div>
            <input
              className={styles.input}
              placeholder='Email'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              required
            ></input>
          </div>
          <div>
            <input
              className={styles.input}
              placeholder='Password'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              required
            ></input>
          </div>
          <div>
            <input
              className={styles.input}
              placeholder='Repeat Password'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className={styles.btnBox}>
            <button className={styles.signIn} type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
