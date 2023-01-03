import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Matches from './components/pages/matches/Matches';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Teams from './components/pages/teams/Teams'
import { authenticate } from './store/session';
import MyTeams from './components/pages/myTeams/MyTeams';
import CreateTeamForm from './components/forms/CreateTeamForm';
import TeamDetails from './components/pages/teamDetails/TeamDetails';
import { getAllTeams } from './store/teams';
import MyMatches from './components/pages/myMatches/MyMatches';
import AcceptMatchPop from './components/pages/matches/AcceptMatchPop';
import { AcceptMatchModal } from './context/AcceptMatchModal';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllTeams())
      setLoaded(true)
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/teams' exact>
          <Banner />
          <Teams />
        </ProtectedRoute>
        <ProtectedRoute path='/teams/:type/:id'>
          <Banner />
          <TeamDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/teams/new' exact>
          <CreateTeamForm />
        </ProtectedRoute>
        <ProtectedRoute path='/my-teams'>
          <MyTeams />
        </ProtectedRoute>
        <ProtectedRoute path='/my-matches'>
          <MyMatches />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Banner />
          <Matches setOpen={setOpen} setShowModal={setShowModal} />
        </Route>
      </Switch>
      {showModal && (
        <AcceptMatchModal open={open} onClose={() => setShowModal(false)}>
          <AcceptMatchPop setShowModal={setShowModal} setOpen={setOpen} />
        </AcceptMatchModal>
      )} 
    </BrowserRouter>
  );
}

export default App;
