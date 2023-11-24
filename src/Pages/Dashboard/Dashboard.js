
import Speed from '../../images/speed.png'
function Dashboard() {
    return (
      <div className="dashboard">
        <div className="dashboard_inner">
            <div className="dashboard_base">
                <div className="base_total">
                    <p className="base_name">Всего записей в базе <span className="base_totalNum">28 400 000</span></p>
                </div>

                <div className="dashboard_request">
                    <div className="request_speed">
                        <img src={Speed} width='40' height='40' alt='speedIcon'/>
                        <span className='speed_number'>0,4 сек</span>
                    </div>
                    <p className='request_speedText'>Средняя скорость обработки запроса</p>
                </div>
            </div>

            <div className='total_request'>
                <p className='request_text'>Всего запросов: <span className='request_number'>1 000 000</span></p>
                <ul className='requestList'>
                    <li className='requestItem'>Сегодня <span className='requestItem_number'>50</span></li>
                    <li className='requestItem'>За месяц <span className='requestItem_number'>3 422</span></li>
                    <li className='requestItem'>За год <span className='requestItem_number'>16 556</span></li>
                </ul>
            </div>

            <div className='total_request'>
                <p className='request_text'>Всего фишинг атак: <span className='request_number'>235</span></p>
                <ul className='requestList'>
                    <li className='requestItem'>Сегодня <span className='requestItem_number'>10</span></li>
                    <li className='requestItem'>За месяц <span className='requestItem_number'>32</span></li>
                    <li className='requestItem'>За год <span className='requestItem_number'>117</span></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  