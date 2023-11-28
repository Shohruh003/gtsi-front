import { Link, useLocation } from "react-router-dom";
import TadLogo from '../../images/tad-head.png';
import '../../sass/main.scss';
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TokenContext } from "../../context/tokenContext";
import Compare from "../../Modal/Compare/Compare";
import { AuthContext } from "../../context/authContext";

function Header() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "activeColor" : "";
  };

  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)
  const {token} = useContext(TokenContext)
const [compare, setCompare] =useState(false)
const {setCompConfidens} = useContext(AuthContext)


  useEffect(() => {
    const body = document.querySelector('body');
    const btn = document.querySelector('.btn');
    const icon = document.querySelector('.btn__icon');

    function toggleDarkMode() {
      setIsDarkMode(!isDarkMode);
      icon.classList.add('animated');
      setTimeout(() => {
        icon.classList.remove('animated');
      }, 500);
    }
    if (isDarkMode) {
      body.classList.add('darkmode');
      document.body.classList.add('dark-mode');
      icon.classList.add('fa-moon');
      icon.classList.remove('fa-sun');
    } else {
      body.classList.remove('darkmode');
      icon.classList.remove('fa-moon');
      document.body.classList.remove('dark-mode');
      icon.classList.add('fa-sun');
    }

    btn.addEventListener('click', toggleDarkMode);

    return () => {
      btn.removeEventListener('click', toggleDarkMode);
    };
  }, [isDarkMode]);


  const handleImages = (evt) => {
    evt.preventDefault();
    const [image1, image2] = evt.target.elements;
    const formData = new FormData();
    formData.append('photo1', image1.files[0]);
    formData.append('photo2', image2.files[0]);
  
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRFToken': 'M1u8j44fbMPtbGOOrefkhJimIRDRtNKCJlnUMjPQTsJ2PQPO6RoOLCIz8v8PnsbL',
        Authorization: `Token ${token}`,
      },
    };
  
    axios.post('https://mycorse.onrender.com/https://www.gsi.yomon-emas.uz/api/verify/', formData, config)
      .then((response) => {
        setCompConfidens(response.data.confidence.toFixed(2) * 100)
        setCompare(true)
      })
      .catch((error) => {
        console.log(error);
        toast.error('Лицо не найдено !');
      });
  };

  return (
    <div className={`header ${isDarkMode ? 'darkmode' : ''}`}>
      <div className="header_inner">
        <div className="btn">
          <div className="btn__indicator">
            <div className="btn__icon-container">
              <i className="btn__icon fa-solid"></i>
            </div>
          </div>
        </div>
        <div className="header_logoDiv">
          <img className="header_logo" src={TadLogo} alt="Tad Logo" />
          <p className="header_logoName">
            Tad <br />
            Industries <br />
            <span className="header_logoSpan">Face IDS</span>
          </p>
        </div>
        <ul className="header_linkList">
          <li className="header_item">
            <Link className={`header_link ${isActive("/")} ${isDarkMode ? 'darkmode' : ''}`} to="/">
              Дашборд
            </Link>
          </li>
          <li className="header_item">
            <Link className={`header_link ${isActive("/query")} ${isDarkMode ? 'darkmode' : ''}`} to="/query">
              База запросов
            </Link>
          </li>
          <li className="header_item">
            <Link className={`header_link ${isActive("/database")} ${isDarkMode ? 'darkmode' : ''}`} to="/database">
              База данных
            </Link>
          </li>
        </ul>
        <div className="header_compare">
          <form onSubmit={handleImages}>
          <p className="compare_heading">Cравнение</p>
          <div className="compare_images">
            <label className={`compare_label ${isDarkMode ? 'darkmode' : ''}`}>
              фото1
              <input id="fileInput" className="compare_image compare_image1" type="file" name="image1" placeholder="image1" />
            </label>
            <label className={`compare_label ${isDarkMode ? 'darkmode' : ''}`}>
              фото2
              <input id="fileInput" className="compare_image compare_image2" type="file" name="image2" />
            </label>
          </div>
          <button className={`compare_button ${isDarkMode ? 'darkmode' : ''}`} type="submit">
            Сравнить
          </button>
          </form>
        </div>
        <div className="header_liveness">
          <p className="header_livenessText">Проверка на Liveness</p>
          <button className={`header_livenessBtn ${isDarkMode ? 'darkmode' : ''}`} type="button">
            Доступ к камере
          </button>
        </div>
        <ToastContainer />
        <Compare compare={compare} setCompare={setCompare}/>
      </div>
    </div>
  );
}

export default Header;