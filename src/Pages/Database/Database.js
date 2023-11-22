



import PeopleImg from '../../images/photo_2022-10-13_15-28-30.jpg'
function Database() {
    return (
      <div className="database">
        <div className="database_inner">
            <div className="database_header">
                <ul className="database_headerList">
                    <li className="database_headerItem">
                        <label>Ф.И.О</label>
                        <input className="database_headerInput" type="text" placeholder="Ф.И.О" />
                    </li>

                    <li className="database_headerItem">
                        <label>Серия</label>
                        <input className="database_headerInput" type="text" placeholder="AB" maxLength={2} minLength={2}/>
                    </li>

                    <li className="database_headerItem">
                        <label>Номер</label>
                        <input className="database_headerInput" type="text" placeholder="1234567" maxLength={7} minLength={7}/>
                    </li>

                    <li className="database_headerItem">
                        <label>PINFL</label>
                        <input className="database_headerInput" type="text" placeholder="********" />
                    </li>

                    <li className="database_headerItem">
                        <label>MAC Adress</label>
                        <input className="database_headerInput" type="text" placeholder="26-33-67-7A-C5-27" />
                    </li>

                    <li className="database_headerItem">
                        <label>Поиск по фото</label>
                        <input className="database_headerInput" type="file" placeholder="Фото" />
                        <button className="database_searchBtn" type="submit">Поиск</button>
                    </li>
                </ul>
            </div>

            <ul className="database_list">
                <li className="database_item database_itemHeader">
                    <p className="database_check"></p>
                    <p className="database_id">ID</p>
                    <p className="database_img">Фото</p>
                    <p className="database_fullName">Ф.И.О</p>
                    <p className="database_time">Серия номер паспорта</p>
                    <p className="database_date">Дата рождения</p>
                    <p className="database_pinfl">PINFL</p>
                    <p className="database_placeOfBirth">Место рождения</p>
                    <p className="database_passport_issue">03.10.2029</p>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                </li>

                <li className="database_item database_itemHeader">
                    <p className="database_check">
                        <input className='database_checkInput' type="check" width={20} height={20}/>
                    </p>
                    <p className="database_id">1</p>
                    <p className="database_img">
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
                    </p>
                    <p className="database_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    <p className="database_time">AC 1827260</p>
                    <p className="database_date">17.02.2003</p>
                    <p className="database_pinfl">37dh77dd66</p>
                    <p className="database_placeOfBirth">Ташкент / Узбекистан</p>
                    <p className="database_passport_issue">16.02.2029</p>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Database;
  