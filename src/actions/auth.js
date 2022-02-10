import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types'
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch(e => {        
        Swal.fire('Error', e.message, 'error');
      }).finally( () => {
        dispatch(finishLoading())
      });
  } 
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return ( dispatch ) => {
    dispatch(startLoading());
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch(e => {        
        Swal.fire('Error', e.message, 'error');
      }).finally( () => {
        dispatch(finishLoading())
      });;
  }
}

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then( ({ user }) => {
        dispatch( login(user.uid, user.displayName) );
      }).catch(e => {        
        Swal.fire('Error', e.message, 'error');
      }).finally( () => {
        dispatch(finishLoading())
      });; 
  }
}

export const login = ( uid, displayName ) => {
  return { 
    type: types.login,
    payload: { uid, displayName }
  }
}

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut();
    dispatch(logout());
  }
}

export const logout = () => {
  return { type: types.logout }
}