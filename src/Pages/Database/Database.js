import '../../sass/main.css'
import PeopleImg from '../../images/photo_2022-10-13_15-28-30.jpg'
function Database() {
 
    return (
        <div className="query">
        <div className="query_inner">
            <div className="query_header">
                <ul className="query_headerList">
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
            <table className="table">
  <thead>
    <tr className='tableHead'>
      <th>
        <p>#</p>
      </th>
      <th>
        <p>ID</p>
      </th>
      <th>
        <p>Фото</p>
      </th>
      <th>
        <p>Ф.И.О</p>
      </th>
      <th>
        <p>Серия номер паспорта</p>
      </th>
      <th>
        <p>Дата рождения</p>
      </th>
      <th>
        <p>PINFL</p>
      </th>
      <th>
        <p>Место рождения</p>
      </th>
      <th>
        <p>Дата выдачи пассспорта</p>
      </th>
      <th>
      <p>Подробно</p>
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
                    <p className="query_img">
                        <img src={PeopleImg} width={50} height={50} alt="People"/>
                    </p>
                    </th>
                    <th>
                    <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
                    </th>
                    <th>
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>

    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
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
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>

    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
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
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>

    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
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
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>

    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
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
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>

    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
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
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>

    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
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
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>

    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
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
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>

    <tr>
                    <th className='query_th'>
                    <p className="query_check">
                        <input className='query_checkInput' type="checkbox" width={20} height={20}/>
                    </p></th>
                    <th>
                    <p className="query_id">31456</p>
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
                    <p className="query_pass_series">AC 1827260</p>
                    </th>
                    <th>
                    <p className="query_one_n">17.02.2003</p>
                    </th>
                    <th>
                    <p className="query_one_one">37dh77dd66</p>
                    </th>
                    <th>
                    <p className="query_one_one">Ташкент / Узбекистан</p>
                    </th>
                    <th>
                    <p className="query_one_one">16.02.2029</p>
                    </th>
                    <th>
                    <button className='database_itemBtn' type='button'>Побробно</button>
                    </th>
    </tr>
  </tbody>
</table>
<button className='delete_button' type='button'>Удалить</button>
            
        </div>
      </div>
    );
  }
  
  export default Database;
  