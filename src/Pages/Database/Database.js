



// import PeopleImg from '../../images/photo_2022-10-13_15-28-30.jpg'
// function Database() {
//     return (
//       <div className="database">
//         <div className="database_inner">
//             <div className="database_header">
//                 <ul className="database_headerList">
//                     <li className="database_headerItem">
//                         <label>Ф.И.О</label>
//                         <input className="database_headerInput" type="text" placeholder="Ф.И.О" />
//                     </li>

//                     <li className="database_headerItem">
//                         <label>Серия</label>
//                         <input className="database_headerInput" type="text" placeholder="AB" maxLength={2} minLength={2}/>
//                     </li>

//                     <li className="database_headerItem">
//                         <label>Номер</label>
//                         <input className="database_headerInput" type="text" placeholder="1234567" maxLength={7} minLength={7}/>
//                     </li>

//                     <li className="database_headerItem">
//                         <label>PINFL</label>
//                         <input className="database_headerInput" type="text" placeholder="********" />
//                     </li>

//                     <li className="database_headerItem">
//                         <label>MAC Adress</label>
//                         <input className="database_headerInput" type="text" placeholder="26-33-67-7A-C5-27" />
//                     </li>

//                     <li className="database_headerItem">
//                         <label>Поиск по фото</label>
//                         <input className="database_headerInput" type="file" placeholder="Фото" />
//                         <button className="database_searchBtn" type="submit">Поиск</button>
//                     </li>
//                 </ul>
//             </div>

//             <ul className="database_list">
//                 <li className="database_item database_itemHeader">
//                     <p className="database_check"></p>
//                     <p className="database_id">ID</p>
//                     <p className="database_img">Фото</p>
//                     <p className="database_fullName">Ф.И.О</p>
//                     <p className="database_time">Серия номер паспорта</p>
//                     <p className="database_date">Дата рождения</p>
//                     <p className="database_pinfl">PINFL</p>
//                     <p className="database_placeOfBirth">Место рождения</p>
//                     <p className="database_passport_issue">03.10.2029</p>
//                     <button className='database_itemBtn' type='button'>Побробно</button>
//                 </li>

//                 <li className="database_item database_itemHeader">
//                     <p className="database_check">
//                         <input className='database_checkInput' type="check" width={20} height={20}/>
//                     </p>
//                     <p className="database_id">1</p>
//                     <p className="database_img">
//                         <img src={PeopleImg} width={50} height={50} alt="image"/>
//                     </p>
//                     <p className="database_fullName">Shohruh Azimov Nabijon o'g'li</p>
//                     <p className="database_time">AC 1827260</p>
//                     <p className="database_date">17.02.2003</p>
//                     <p className="database_pinfl">37dh77dd66</p>
//                     <p className="database_placeOfBirth">Ташкент / Узбекистан</p>
//                     <p className="database_passport_issue">16.02.2029</p>
//                     <button className='database_itemBtn' type='button'>Побробно</button>
//                 </li>
//             </ul>

//             <table className="table">
//   <thead>
//     <tr className='tableHead'>
//       <th>
//         <p>#</p>
//       </th>
//       <th>
//         <p>ID</p>
//       </th>
//       <th>
//         <p>Дата</p>
//       </th>
//       <th>
//         <p>Время</p>
//       </th>
//       <th>
//         <p>MAC Адрес</p>
//       </th>
//       <th>
//         <p>Фото</p>
//       </th>
//       <th>
//         <p>Ф.И.О</p>
//       </th>
//       <th>
//         <p>Liveness</p>
//       </th>
//       <th>
//         <p>1:N</p>
//       </th>
//       <th>
//         <p>1:1</p>
//       </th>
//       <th>
//         <p>Фото в базе</p>
//       </th>
//       <th>
//         <p>PHISH Атака</p>
//       </th>
//     </tr>
//   </thead>
//   <tbody className='tbody'>
//     <tr>
//                     <th className='query_th'>
//                     <p className="query_check">
//                         <input className='query_checkInput' type="checkbox" width={20} height={20}/>
//                     </p></th>
//                     <th>
//                     <p className="query_id">31456</p>
//                     </th>
//                     <th>
//                     <p className="query_date">22.01.2023</p>
//                     </th>
//                     <th>
//                     <p className="query_time">16:00:32</p>
//                     </th>
//                     <th>
//                     <p className="query_macAddredd">26-33-67-7A-C5-27</p>
//                     </th>
//                     <th>
//                     <p className="query_img">
//                         <img src={PeopleImg} width={50} height={50} alt="image"/>
//                     </p>
//                     </th>
//                     <th>
//                     <p className="query_fullName">Shohruh Azimov Nabijon o'g'li</p>
//                     </th>
//                     <th>
//                     <p className="query_liveness">True</p>
//                     </th>
//                     <th>
//                     <p className="query_one_n">Success</p>
//                     </th>
//                     <th>
//                     <p className="query_one_one">Success</p>
//                     </th>
//                     <th>
//                     <p className="query_baseImg">
//                         <img src={PeopleImg} width={50} height={50} alt="image"/>
//                     </p>
//                     </th>
//                     <th>
//                     <p className="query_attack">Нет</p>
//                     </th>
//     </tr>
//   </tbody>
// </table>
//         </div>
//       </div>
//     );
//   }
  
//   export default Database;
  



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
                        <label>MAC Adress</label>
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
      <p>Побробно</p>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
                        <img src={PeopleImg} width={50} height={50} alt="image"/>
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
  