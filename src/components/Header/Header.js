import { Link, useLocation } from "react-router-dom";
import TadLogo from '../../images/tad-head.png'
import '../../sass/main.scss'
function Header() {
    const location = useLocation();

    const isActive = (path) => {
      return location.pathname === path ? "activeColor" : "";
    };
  

    return (
      <div className="header">
        <div className="header_inner">
            <div className="header_logoDiv">
                <img className="header_logo" src={TadLogo}/>

                <p className="header_logoName">Tad <br/> Industries <br/> <span className="header_logoSpan">Face IDS</span></p>

            </div>

            <ul className="header_linkList">
          <li className="header_item">
            <Link
              className={`header_link ${isActive("/")}`}
              to="/"
            >
              Дашборд
            </Link>
          </li>
          <li className="header_item">
            <Link
              className={`header_link ${isActive("/query")}`}
              to="/query"
            >
              База запросов
            </Link>
          </li>
          <li className="header_item">
            <Link
              className={`header_link ${isActive("/database")}`}
              to="/database"
            >
              База данных
            </Link>
          </li>
        </ul>

            <div className="header_compare">
                <p className="compare_heading">Cравнение</p>
                <div className="compare_images">
                    <label className="compare_label">фото1
                        <input className="compare_image compare_image1" type="file" name="image1"/>
                    </label>
                    
                    <label className="compare_label">фото2
                        <input className="compare_image compare_image2" type="file" name="image2"/>
                    </label>
                </div>
                <button className="compare_button" type="submit">Сравнить</button>
            </div>


            <div className="header_liveness">
                <p className="header_livenessText">Проверка на Liveness</p>
                <button className="header_livenessBtn" type="button">Доступ к камере</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  