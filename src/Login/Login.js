import React, { useContext, useEffect } from 'react';
import { FaUser, FaUnlockAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { TokenContext } from '../context/tokenContext';

const Login = () => {
    const {setToken} = useContext(TokenContext)
    const navigate = useNavigate();

    const handleUserLogin = (evt) => {
        evt.preventDefault();
        const [email, password] = evt.target.elements;
        const formData = new FormData();
        formData.append('username', email.value);
        formData.append('password', password.value);
    
        axios.post('https://mycorse.onrender.com/https://www.gsi.yomon-emas.uz/api/api-token-auth/', formData)
        .then((response) => {
          if (response.data) {
            setToken(response.data.token);
            navigate('/');
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error('Неверный логин/пароль !');
        });
      };
  useEffect(() => {
    const inputTexts = document.querySelectorAll('.input_text');

    const handleFocus = (event) => {
      const prevIcon = event.target.previousElementSibling;
      prevIcon.classList.add('glowIcon');
    };

    const handleFocusOut = (event) => {
      const prevIcon = event.target.previousElementSibling;
      prevIcon.classList.remove('glowIcon');
    };

    inputTexts.forEach((input) => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('focusout', handleFocusOut);
    });

    return () => {
      inputTexts.forEach((input) => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('focusout', handleFocusOut);
      });
    };
  }, []);

  return (
    <div className='login'>
        <form onSubmit={handleUserLogin}>
        <div className="login_form_container">
      <div className="login_form">
        <h2>Login</h2>
        <div className="input_group">
        <FaUser className="icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="input_group">
        <FaUnlockAlt className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="button_group" id="login_button">

          <button type='submit'>Submit</button>
        </div>
        <ToastContainer />

        {/* <div className="fotter">
          <a>Forgot Password ?</a>
          <a>SingUp</a>
        </div> */}
      </div>
    </div>
        </form>
    </div>
  );
};

export default Login;