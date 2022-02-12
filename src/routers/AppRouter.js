import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { JurnalScreen } from '../components/journal/JurnalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from './../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';
import { SprinnerLoading } from '../components/SprinnerLoading';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async user => {
      if(user?.uid) {
        dispatch(login( user.uid, user.displayName ));
        setIsLoggedIn(true);        
        
        dispatch( startLoadingNotes(user.uid) );
      }else{
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  },[dispatch, setChecking, setIsLoggedIn])

  if(checking) return <SprinnerLoading loading={checking} />;
  
  return (
    <Router>
      <div>
        <Switch>                    
          <PublicRoute 
            path="/auth"
            component={AuthRouter} 
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute 
            exact
            isAuthenticated={ isLoggedIn }
            path="/" 
            component={JurnalScreen}
          />
          <Redirect to="/auth/login" />        
        </Switch>
      </div>

    </Router>
  );
};
