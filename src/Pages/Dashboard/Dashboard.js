import React, { useContext, useEffect, useState } from 'react';
import Speed from '../../images/speed.png';
import { ThemeContext } from '../../context/themeContext';
import { BarChart } from '@mui/x-charts';
import axios from 'axios';
import { TokenContext } from '../../context/tokenContext';

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);
  const [dashboard, setDashboard] = useState()
  const {token} = useContext(TokenContext)
  const [date01, setDate01] =useState()

  function getLastWeekDates() {
    const currentDate = new Date();
    const lastWeekDates = [];
    const lastWeek = []

    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      const formattedDate1 = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      const formattedDate2 = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      lastWeekDates.push(formattedDate1);
      lastWeek.push(formattedDate2)
    }

    return lastWeekDates;
  }  

  function getLastWeek() {
    const currentDate = new Date();
    const lastWeek = []

    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      const formattedDate2 = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      lastWeek.push(formattedDate2)
    }

    return lastWeek;
  } 

  const results = getLastWeek(); 
  const result = getLastWeekDates();
  const date1 = result[0];
  const date2 = result[1];
  const date3 = result[2];
  const date4 = result[3];
  const date5 = result[4];
  const date6 = result[5];
  const date7 = result[6];

  let week1 = null
let week2 = null
let week3 = null
let week4 = null
let week5 = null
let week6 = null


  useEffect(() => {
    axios.get('https://mycorse.onrender.com/https://gsiback.tadi.uz/api/request/dashboard/',{
    headers: {
        'accept': 'application/json',
        'X-CSRFToken': 'M1u8j44fbMPtbGOOrefkhJimIRDRtNKCJlnUMjPQTsJ2PQPO6RoOLCIz8v8PnsbL',
        "Authorization": `Token ${token}`
      }
})
    .then((response) => {
        setDashboard(response.data);
        })
    .catch((error) => {
      console.log(error);
    });
}, [])

dashboard?.diagram?.map((e) => {
  if(e.date === results[6]) {
    week6 = e.count
  }

  if(e.date === results[5]) {
    week5 = e.count
  }

  if(e.date === results[4]) {
    week4 = e.count
  }

  if(e.date === results[3]) {
    week3 = e.count
  }

  if(e.date === results[2]) {
    week2 = e.count
  }

  if(e.date === results[1]) {
    week1 = e.count
  }
})


  const avg_duration = dashboard?.avg_duration?.toFixed(2);
  
  return (
      <div className={`dashboard ${isDarkMode ? 'darkmode' : ''}`}>
        <div className="dashboard_inner">
          <div className="dashboard_base">
            <div className="base_total">
              <p className="base_name">
                Всего записей в базе <span className="base_totalNum">11</span>
              </p>
              <div className="column">
                <BarChart
                  xAxis={[
                    {
                      scaleType: 'band',
                      data: [date2, date3, date4, date5, date6, date7],
                    },
                  ]}
                  series={[{ data: [week1,week2,week3,week4,week5,week6] }]}
                  width={400}
                  height={190}
                />
              </div>
            </div>

            <div className="dashboard_request">
              <div className="request_speed">
                <img src={Speed} width="40" height="40" alt="speedIcon" />
                <span className="speed_number">{avg_duration} сек</span>
              </div>
              <p className="request_speedText">Средняя скорость обработки запроса</p>
            </div>
          </div>

          <div className="total_request">
            <p className="request_text">
              Всего запросов: <span className="request_number">{dashboard?.total_count}</span>
            </p>
            <ul className="requestList">
              <li className="requestItem">
                Сегодня <span className="requestItem_number">{dashboard?.this_year}</span>
              </li>
              <li className="requestItem">
                За месяц <span className="requestItem_number">{dashboard?.this_month}</span>
              </li>
              <li className="requestItem">
                За год <span className="requestItem_number">{dashboard?.today}</span>
              </li>
            </ul>
          </div>

          <div className="total_request">
            <p className="request_text">
              Всего фишинг атак: <span className="request_number">{dashboard?.total_count_attack}</span>
            </p>
            <ul className="requestList">
              <li className="requestItem">
                Сегодня <span className="requestItem_number">{dashboard?.this_year_attack}</span>
              </li>
              <li className="requestItem">
                За месяц <span className="requestItem_number">{dashboard?.this_month_attack}</span>
              </li>
              <li className="requestItem">
                Загод <span className="requestItem_number">{dashboard?.today_attack}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;