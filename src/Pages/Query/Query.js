

import PeopleImg from '../../images/photo_2022-10-13_15-28-30.jpg'
function Query() {
    return (
      <div className="query">
        <div className="query_inner">
            <div className="query_header">
                <ul className="query_headerList">
                    <li className="query_headerItem">
                        <label>Ф.И.О</label>
                        <input className="query_headerInput" type="text" placeholder="Ф.И.О" />
                    </li>

                    <li className="query_headerItem">
                        <label>Серия</label>
                        <input className="query_headerInput" type="text" placeholder="AB" maxLength={2} minLength={2}/>
                    </li>

                    <li className="query_headerItem">
                        <label>Номер</label>
                        <input className="query_headerInput" type="text" placeholder="1234567" maxLength={7} minLength={7}/>
                    </li>

                    <li className="query_headerItem">
                        <label>PINFL</label>
                        <input className="query_headerInput" type="text" placeholder="********" />
                    </li>

                    <li className="query_headerItem">
                        <label>MAC Adress</label>
                        <input className="query_headerInput" type="text" placeholder="26-33-67-7A-C5-27" />
                    </li>

                    <li className="query_headerItem">
                        <label>Поиск по фото</label>
                        <input className="query_headerInput" type="file" placeholder="Фото" />
                        <button className="query_searchBtn" type="submit">Поиск</button>
                    </li>
                </ul>
            </div>

            <ul className="query_list">
                <li className="query_item query_itemHeader">
                    <p className="query_check"></p>
                    <p className="query_id">ID</p>
                    <p className="query_date">Дата</p>
                    <p className="query_time">Время</p>
                    <p className="query_macAddredd">MAC Адрес</p>
                    <p className="query_img">Фото</p>
                    <p className="query_fullName">Ф.И.О</p>
                    <p className="query_liveness">Liveness</p>
                    <p className="query_one_n">1:N</p>
                    <p className="query_one_one">1:1</p>
                    <p className="query_baseImg">Фото в базе</p>
                    <p className="query_attack">PHISH Атака</p>
                </li>

                <li className="query_item">
                    <p className="query_check">
                        <input className='query_checkInput' type="check" width={20} height={20}/>
                    </p>
                    <p className="query_id">1</p>
                    <p className="query_date">22.01.2023</p>
                    <p className="query_time">16:00:32</p>
                    <p className="query_macAddredd">26-33-67-7A-C5-27</p>
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
                    </p>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    <p className="query_liveness">True</p>
                    <p className="query_one_n">Success</p>
                    <p className="query_one_one">Success</p>
                    <p className="query_baseImg">
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
                    </p>
                    <p className="query_attack">Нет</p>
                </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Query;
  