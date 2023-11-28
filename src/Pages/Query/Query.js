
import '../../sass/main.css'
import PeopleImg from '../../images/photo_people.jpg'
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { TokenContext } from '../../context/tokenContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Query() {
    const [query, setQuery] = useState()
    const {token} = useContext(TokenContext)
  const {isDarkMode} = useContext(ThemeContext)
  const [name, setName] = useState()
  const [uid, setUid] = useState()

  const handleNameChange = (event) => {
    const searchName = event.target.value;
    setName(searchName);
  };


  const handleUidChange = (event) => {
    const searchName = event.target.value;
    setUid(searchName);
  };

  useEffect(() => {

    const fetchPupils = async () => {
      try {
        const params = {};
        if (name) {
          params.name__icontains = name;
        }

        if (uid) {
          params.uuid__icontains = uid;
        }

        const response = await axios.get(
          'https://mycorse.onrender.com/https://www.gsi.yomon-emas.uz/api/request/',
          {
            params,
            headers: {
              'accept': 'application/json',
              'X-CSRFToken': 'M1u8j44fbMPtbGOOrefkhJimIRDRtNKCJlnUMjPQTsJ2PQPO6RoOLCIz8v8PnsbL',
              "Authorization": `Token ${token}`
            }
          }
        );
        setQuery(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPupils();
  }, [name, uid]);

  const handleImage = (evt) => {
    evt.preventDefault();
    const [image] = evt.target.elements;
    const formData = new FormData();
    formData.append('image', image.files[0]);
  
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRFToken': 'M1u8j44fbMPtbGOOrefkhJimIRDRtNKCJlnUMjPQTsJ2PQPO6RoOLCIz8v8PnsbL',
        Authorization: `Token ${token}`,
      },
    };
  
    axios.post('https://mycorse.onrender.com/https://www.gsi.yomon-emas.uz/api/search-faces/', formData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Лицо не найдено !');
      });
  };

    return (
      <div className="query">
        <div className="query_inner">
            <div className="query_header">
                <ul className={`query_headerList ${isDarkMode ? 'darkmode' : ''}`}>
                    <li className="query_headerItem">
                        <label>Ф.И.О</label>
                        <input onChange={handleNameChange} className="query_headerInput" type="text" placeholder="Ф.И.О" />
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
                        <label>ПИНФЛ</label>
                        <input className="query_headerInput" type="text" placeholder="********" maxLength={14} minLength={14}/>
                    </li>

                    <li className="query_headerItem query_macAddres">
                        <label>УИД</label>
                        <input onChange={handleUidChange} className="query_headerInput" type="text" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
                    </li>

                    <li className="query_headerItem query_searchImg">
                        <label>Поиск фото</label>
                        <input className="query_headerInput query_searchImg" type="file" name='image' placeholder="Фото" />
                    </li>

                    <li className="query_headerItem">
                        <button onSubmit={handleImage} className="query_searchBtn" type="submit">Поиск</button>
                    </li>
                </ul>
            </div>

            <table className={`table ${isDarkMode ? 'darkmode' : ''}`}>
  <thead>
    <tr className='tableHead'>
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
      <p>УИД</p>
      </th>
      <th>
        <p>Медиа</p>
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
        <p>ФИШ Атака</p>
      </th>
    </tr>
  </thead>
  <tbody className='tbody'>
        {query?.map((item, index) => (
                <tr key={index}>
                <th>
                <p className="query_id">{item.id}</p>
                </th>
                <th>
                <p className="query_date">{item && item.created_at.split('T')[0]}</p>
                </th>
                <th>
                <p className="query_time">{item && item.created_at.split('T')[1].split('.')[0]}</p>
                </th>
                <th>
                <p className="query_uniqueId">{item?.unique_id ? item?.unique_id : "Пустой"}</p>
                </th>
                <th>
                <p className="query_baseImg">
                <video width={60} height={60} controls>
                    <source src={item?.video} type="video/mp4" />
                </video>
                </p>
                </th>
                <th>
                <p className="query_fullName">{item?.name ? item?.name : "Пустой"}</p>
                </th>
                <th>
                <p className="query_liveness">{item?.is_alive === true ? "True" : "False"}</p>
                </th>
                <th>
                    <p className="query_one_n">{item?.one_n === true ? "True" : "False"}</p>
                </th>
                <th>
                    <p className="query_one_one">{item?.one_one === true ? "True" : "False"}</p>
                </th>
                <th>
                <p className="query_baseImg">
                    <img src={item?.photo ? item?.photo : PeopleImg} width={50} height={50} alt="People"/>
                </p>
                </th>
                <th className={item?.is_phishing === true ? "Да" : "Нет"}>
                    <p className="query_attack">{item?.is_phishing === true ? "Да" : "Нет"}</p>
                </th>
</tr>
        ))}
  </tbody>
</table>

<button className='delete_button' type='button'>Удалить</button>
<ToastContainer />
        </div>
      </div>
    );
  }
  
  export default Query;
  