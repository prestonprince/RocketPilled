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
import TeamDeetsBanner from './components/TeamDeetsBanner';
import { useNotification } from './context/Notification';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import DisputedMatches from './components/pages/DisputedMatches/DisputedMatches';
import PostTicket from './components/pages/PostTicket/PostTicket';
import ComingSoon from './components/ComingSoon';

function App() {
  const [loaded, setLoaded] = useState(false);
  const { showModal, setShowModal } = useNotification()
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
      <Switch>
        <Route path='/login' exact={true}>
          <div className='nav'>
            <NavBar />
          </div>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <div className='nav'>
            <NavBar />
          </div>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/teams' exact>
          <div className='nav'>
            <NavBar />
          </div>
          <Banner />
          <Teams />
        </ProtectedRoute>
        <ProtectedRoute path='/teams/:type/:id'>
          <div className='nav'>
            <NavBar />
          </div>
          <TeamDeetsBanner />
          <TeamDetails />
        </ProtectedRoute>
        <ProtectedRoute path='/teams/new' exact>
          <div className='nav'>
            <NavBar />
          </div>
          <CreateTeamForm />
        </ProtectedRoute>
        <ProtectedRoute path='/my-teams'>
          <NavBar />
          <MyTeams />
        </ProtectedRoute>
        <ProtectedRoute path='/coming-soon'>
          <ComingSoon />
        </ProtectedRoute>
        <ProtectedRoute path='/my-matches'>
          <div className='nav'>
            <NavBar />
          </div>
          <MyMatches />
        </ProtectedRoute>
        <ProtectedRoute path='/my-disputed-matches'>
          <div className='nav'>
            <NavBar />
          </div>
          <DisputedMatches />
        </ProtectedRoute>
        <ProtectedRoute path='/tickets/new'>
          <div className='nav'>
            <NavBar />
          </div>
          <PostTicket />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <div className='nav'>
            <NavBar />
          </div>
          <Banner />
          <Matches />
          {/* <Footer /> */}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
      {showModal && (
        <AcceptMatchModal onClose={() => setShowModal(false)}>
          <AcceptMatchPop />
        </AcceptMatchModal>
      )} 
    </BrowserRouter>
  );
}

export default App;
