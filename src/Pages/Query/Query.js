
import '../../sass/main.css'
import PeopleImg from '../../images/photo_2022-10-13_15-28-30.jpg'
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
function Query() {

  const {isDarkMode} = useContext(ThemeContext)

 
    return (
      <div className="query">
        <div className="query_inner">
            <div className="query_header">
                <ul className={`query_headerList ${isDarkMode ? 'darkmode' : ''}`}>
                    <li className="query_headerItem">
                        <label>Ф.И.О</label>
                        <input className="query_headerInput" type="text" placeholder="Ф.И.О" />
                    </li>

                    <li className="query_headerItem query_seria">
                        <label>Серия</label>
                        <input className="query_headerInput" type="text" placeholder="AB" maxLength={2} minLength={2}/>
                    </li>

                    <li className="query_headerItem query_seriaNumber">
                        <label>Номер</label>
                        <input className="query_headerInput" type="text" placeholder="1234567" maxLength={7} minLength={7}/>
                    </li>

                    <li className="query_headerItem query_pinfl">
                        <label>PINFL</label>
                        <input className="query_headerInput" type="text" placeholder="********" maxLength={14} minLength={14}/>
                    </li>

                    <li className="query_headerItem query_macAddres">
                        <label>MAC Address</label>
                        <input className="query_headerInput" type="text" placeholder="26-33-67-7A-C5-27" />
                    </li>

                    <li className="query_headerItem query_searchImg">
                        <label>Поиск фото</label>
                        <input className="query_headerInput query_searchImg" type="file" placeholder="Фото" />
                    </li>

                    <li className="query_headerItem">
                        <button className="query_searchBtn" type="submit">Поиск</button>
                    </li>
                </ul>
            </div>

            <table className={`table ${isDarkMode ? 'darkmode' : ''}`}>
  <thead>
    <tr className='tableHead'>
      <th>
        <p>#</p>
      </th>
      <th>
        <p>ID</p>
      </th>
      <th>
        <p>Дата</p>
      </th>
      <th>
        <p>Время</p>
      </th>
      <th>
        <p>MAC Адрес</p>
      </th>
      <th>
        <p>Видео</p>
      </th>
      <th>
        <p>Ф.И.О</p>
      </th>
      <th>
        <p>Live</p>
      </th>
      <th>
        <p>1:N</p>
      </th>
      <th>
        <p>1:1</p>
      </th>
      <th>
        <p>Фото в базе</p>
      </th>
      <th>
        <p>PHISH Атака</p>
      </th>
    </tr>
  </thead>
  <tbody className='tbody'>
    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>

    <tr>
                    <th>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">1</p>
                    </th>
                    <th>
                    <p className="query_date">22.01.2023</p>
                    </th>
                    <th>
                    <p className="query_time">16:00:32</p>
                    </th>
                    <th>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    </th>
                    <th>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_liveness">True</p>
                    </th>
                    <th>
                    <p className="query_one_n">Success</p>
                    </th>
                    <th>
                    <p className="query_one_one">Success</p>
                    </th>
                    <th>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_attack">Нет</p>
                    </th>
    </tr>
  </tbody>
</table>

<button className='delete_button' type='button'>Удалить</button>
            
        </div>
      </div>
    );
  }
  
  export default Query;
  