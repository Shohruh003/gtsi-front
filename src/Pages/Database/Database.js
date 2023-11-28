import '../../sass/main.css'
import PeopleImg from '../../images/photo_people.jpg'

import { useContext, useEffect, useState } from 'react';
import User from '../../Modal/User/User';
import { TokenContext } from '../../context/tokenContext';
import axios from 'axios';
function Database() {
    const [database, setDatabase] = useState()
    const {token} = useContext(TokenContext)
 const [open, setOpen] = useState(false);
 const [pasNum, setPasNum] = useState()
 const [pasSer, setPasSer] = useState()
 const [pinfl, setPinfl] = useState()
 const [name, setName] = useState()
 const [selectedItems, setSelectedItems] = useState([]);

 const handleCheckboxChange = (event, itemId) => {
  const isChecked = event.target.checked;
  if (isChecked) {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
  } else {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((id) => id !== itemId)
    );
  }
};

const handleDelete = async () => {
  try {
    if (selectedItems.length === 0) {
      console.log('No items selected for deletion.');
      return;
    }
    const timestamp = Date.now();
    const response = await axios.delete(
      `https://mycorse.onrender.com/https://www.gsi.yomon-emas.uz/api/card/${selectedItems.join(',')}/`,
      {
        headers: {
          accept: 'application/json',
          'X-CSRFToken': 'M1u8j44fbMPtbGOOrefkhJimIRDRtNKCJlnUMjPQTsJ2PQPO6RoOLCIz8v8PnsbL',
          Authorization: `Token ${token}`,
        },
        params: {
          timestamp: timestamp,
        },
      }
    );

    setDatabase((prevDatabase) =>
        prevDatabase.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
  } catch (error) {
    console.error('Error deleting items:', error);
  }
};

 const handleNameChange = (event) => {
  const searchName = event.target.value;
  setName(searchName);
};

 const handlePasSeriaChange = (event) => {
  const searchName = event.target.value;
  setPasSer(searchName);
};

const handlePasNumberChange = (event) => {
  const searchName = event.target.value;
  setPasNum(searchName);
};

const handlePinflChange = (event) => {
  const searchName = event.target.value;
  setPinfl(searchName);
};

 const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {

    const fetchPupils = async () => {
      try {
        const params = {};
        if (name) {
          params.full_name__icontains = name;
        }

        if (pasSer) {
          params.passport_series__icontains = pasSer;
        }

        if (pasNum) {
          params.passport_number__icontains = pasNum;
        }

        if (pinfl) {
          params.pinfl__icontains = pinfl;
        }
        const response = await axios.get(
          'https://mycorse.onrender.com/https://www.gsi.yomon-emas.uz/api/card',
          {
            params,
            headers: {
              'accept': 'application/json',
              'X-CSRFToken': 'M1u8j44fbMPtbGOOrefkhJimIRDRtNKCJlnUMjPQTsJ2PQPO6RoOLCIz8v8PnsbL',
              "Authorization": `Token ${token}`
            }
          }
        );
        setDatabase(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPupils();
  }, [name, pasSer, pasNum, pinfl]);
    return (
        <div className="query">
        <div className="query_inner">
            <div className="query_header">
                <ul className="query_headerList">
                    <li className="query_headerItem">
                        <label>Ф.И.О</label>
                        <input onChange={handleNameChange} className="query_headerInput" type="text" placeholder="Ф.И.О" />
                    </li>

                    <li className="query_headerItem query_seria">
                        <label>Серия</label>
                        <input onChange={handlePasSeriaChange} className="query_headerInput" type="text" placeholder="AB" maxLength={2} minLength={2}/>
                    </li>

                    <li className="query_headerItem query_seriaNumber">
                        <label>Номер</label>
                        <input onChange={handlePasNumberChange} className="query_headerInput" type="text" placeholder="1234567" maxLength={7} minLength={7}/>
                    </li>

                    <li className="query_headerItem query_pinfl">
                        <label>ПИНФЛ</label>
                        <input onChange={handlePinflChange} className="query_headerInput" type="text" placeholder="********" maxLength={14} minLength={14}/>
                    </li>

                    <li className="query_headerItem query_macAddres">
                        <label>УИД</label>
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
        <p>ПИНФЛ</p>
      </th>
      <th>
        <p>Место рождения</p>
      </th>
      <th>
        <p>Дата выдачи паспорта</p>
      </th>
      <th>
      <p>Подробно</p>
      </th>
    </tr>
  </thead>
  <tbody className='tbody'>
        {database?.map((item, index) => (
                <tr key={index}>
                <th className='query_th'>
                <p className="query_check">
                    <input checked={selectedItems.includes(item.id)}
                    onChange={(e) => handleCheckboxChange(e, item.id)} className='query_checkInput' type="checkbox" width={20} height={20}/>
                </p></th>
                <th>
                <p className="query_id">{item?.id ? item?.id : "Пустой"}</p>
                </th>
                <th>
                <p className="query_img">
                    <img src={item?.photo ? item?.photo : PeopleImg} width={50} height={50} alt="People"/>
                </p>
                </th>
                <th>
                <p className="query_fullName">{item?.full_name ? item?.full_name : "Пустой"}</p>
                </th>
                <th>
                <p className="query_pass_series">{item?.passport_series ? item?.passport_series : "Пустой"} {item?.passport_number ? item?.passport_number : "Пустой"}</p>
                </th>
                <th>
                <p className="query_one_n">{item?.birth_date ? item?.birth_date : "Пустой"}</p>
                </th>
                <th>
                <p className="query_pnfl">{item?.pinfl ? item?.pinfl : "Пустой"}</p>
                </th>
                <th>
                <p className="query_country">{item?.birth_country_name ? item?.birth_country_name : "Пустой"}</p>
                </th>
                <th>
                <p className="query_passDate">{item?.passport_expiration ? item?.passport_expiration : "Пустой"}</p>
                </th>
                <th>
                <button className='database_itemBtn' onClick={handleOpen} type='button'>Подробно </button>
                </th>
</tr>
        ))}
  </tbody>
</table>
<button onClick={handleDelete} className='delete_button' type='button'>Удалить</button>
<User open={open} setOpen={setOpen}/>
        </div>
      </div>
    );
  }
  
  export default Database;
  