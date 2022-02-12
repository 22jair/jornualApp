import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from './../../actions/auth';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';

export const LoginScreen = () => {

  const { msgError, loading } = useSelector( state => state.ui );

  const dispatch = useDispatch();
  const [ formValues, handleInputChange ] = useForm({
    email: 'jair@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    isFormValid() && dispatch( startLoginEmailPassword( email, password ) );    
  }

  const hadleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  const isFormValid = () => {
    if(!validator.isEmail(email)) {
      dispatch( setError('Email is invalid') );
      return false;
    }else if(password.length < 5){
      dispatch( setError('Password must be at least 6 characters') );      
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form 
        onSubmit={ handleLogin }
        className='animate__animated animate__fadeIn animate__faster'
      >
      { msgError && <div className='auth__alert-error'>{msgError}</div> }        
        <input 
          type="text"
          placeholder="Email"
          name='email'
          className='auth__input'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          className='auth__input' 
          value={ password }
          onChange={ handleInputChange }
        />
          
        <button 
          type='submit'
          className='btn btn-primary btn-block'
          disabled={loading}
        >Login</button>
        <div className='auth__social-networks'>
          <p>Login with social networks</p>
          <div className='google-btn' onClick={hadleGoogleLogin}>
            <div className='google-icon-wrapper'>
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className='btn-text'>
              Sign in with google
            </p>
          </div>
        </div>
        <Link to="/auth/register" className='link mt-5'>
          Create an account
        </Link>
      </form>
    </>
  );
};
