import { Link, useLocation } from "react-router-dom";
import TadLogo from '../../images/tad-head.png';
import '../../sass/main.scss';
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";

function Header() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "activeColor" : "";
  };

  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)

  console.log(isDarkMode);

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
console.log(isDarkMode);
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
          <p className="compare_heading">Cравнение</p>
          <div className="compare_images">
            <label className={`compare_label ${isDarkMode ? 'darkmode' : ''}`}>
              фото1
              <input className="compare_image compare_image1" type="file" name="image1" />
            </label>
            <label className={`compare_label ${isDarkMode ? 'darkmode' : ''}`}>
              фото2
              <input className="compare_image compare_image2" type="file" name="image2" />
            </label>
          </div>
          <button className={`compare_button ${isDarkMode ? 'darkmode' : ''}`} type="submit">
            Сравнить
          </button>
        </div>
        <div className="header_liveness">
          <p className="header_livenessText">Проверка на Liveness</p>
          <button className={`header_livenessBtn ${isDarkMode ? 'darkmode' : ''}`} type="button">
            Доступ к камере
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;