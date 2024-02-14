import { useContext } from 'react';
import PeopleImg from '../../images/photo_2022-10-13_15-28-30.jpg'
import { Box, Modal, Typography } from '@mui/material';
import { ThemeContext } from '../../context/themeContext';
import { AuthContext } from '../../context/authContext';


function User({ open, setOpen }) {
  const { isDarkMode } = useContext(ThemeContext);
  const {userFace} = useContext(AuthContext)

      const handleClose = () => {
        setOpen(false);
      };


  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={`modal_container ${isDarkMode ? 'darkmode' : ''}`}>
            <div className='modal_content1'>
                <div className='modal_imageDiv'>
                    <img className='modal_img' src={userFace?.photo ? userFace?.photo : PeopleImg} width="150" height="200" alt='userImg'/>
                    <div className='modal_header'>
                        <h1>{userFace?.full_name ? userFace?.full_name : "Пустой"}</h1>

                        <p>Наименование страны гражданства <span>{userFace?.citizenship_country_name ? userFace?.citizenship_country_name : "Пустой"}</span></p>
                        <p>Год рождения <span>{userFace?.birth_date ? userFace?.birth_date : "Пустой"}</span></p>
                    </div>
                </div>
                <span>{userFace?.full_name ? userFace?.full_name : "Пустой"}</span>
                <div className='parenDiv'>
                    <p>Пол <span>{userFace?.gender === true ? 'Мужчина' : userFace?.gender === false ? "Женщина" : "Пустой"}</span></p>
                    <p>Серия и номер паспорта <span>{userFace?.passport_series ? userFace?.passport_series : "Пустой"} {userFace?.passport_number ? userFace?.passport_number : "Пустой"}</span></p>
                </div>
                <div className='parenDiv'>
                    <p>Национальность <span>{userFace?.nationality ? userFace?.nationality : "Пустой"}</span></p>
                    <p>Код Национальности <span>{userFace?.nationality_code ? userFace?.nationality_code : "Пустой"}</span></p>
                </div>
                <p>Место рождения <span>{userFace?.place_of_birth ? userFace?.place_of_birth : "Пустой"}</span></p>
                <p>Код страны гражданства <span>{userFace?.birth_country_code ? userFace?.birth_country_code : "Пустой"}</span></p>
                <p>ПИНФЛ <span>{userFace?.pinfl ? userFace?.pinfl : "Пустой"}</span></p>
            </div>

            <div className='modal_content2'>
            <svg className='close_button' onClick={handleClose} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.483 1.29294C24.1961 -0.424406 26.9809 -0.431974 28.7036 1.27633C30.4251 2.98415 30.4325 5.7611 28.7205 7.47697L21.2043 15.0033L28.7284 22.5365C30.4263 24.2402 30.4033 26.9996 28.6769 28.7006C26.95 30.4008 24.1736 30.3964 22.4761 28.693L15.0034 21.2118L7.51668 28.7069C5.80363 30.4243 3.01878 30.4318 1.29609 28.7235C-0.425371 27.0157 -0.433037 24.2388 1.27927 22.5229L8.79547 14.9965L1.2716 7.46306C-0.426608 5.75939 -0.403361 3.00002 1.32304 1.29904C3.04994 -0.400967 5.82638 -0.396817 7.52385 1.30661L14.9965 8.78805L22.483 1.29294Z" fill="#393C42"/>
</svg>

                <div>
                    <p>Наименование страны рождения <span>{userFace?.citizenship_country_name ? userFace?.citizenship_country_name : "Пустой"}</span></p>
                    <p>Код страны рождения <span>{userFace?.citizenship_country_code ? userFace?.citizenship_country_code : "Пустой"}</span></p>
                    <p>Дата выдачи паспорта  <span>{userFace?.passport_issue ? userFace?.passport_issue : "Пустой"}</span></p>
                    <p>Дата истечения срока паспорта  <span>{userFace?.passport_expiration ? userFace?.passport_expiration : "Пустой"}</span></p>
                    <p>Код подразделения внутренних дел, выдавшего паспорт <span>{userFace?.internal_affairs_code ? userFace?.internal_affairs_code : "Пустой"}</span></p>
                    <p>Наименование органа, выдавшего паспорт <span>{userFace?.internal_affairs_name ? userFace?.internal_affairs_name : "Пустой"}</span></p>
                    <p>Физическое состояние <span>{userFace?.physical_condition === true ? "Живой" : userFace?.physical_condition === false ? "Мёртвый" : "Пустой"}</span></p>
                </div>
            </div>
            </div>

          </Typography>
        </Box>
      </Modal>
  );
}

export default User;