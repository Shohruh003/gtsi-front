import { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import PeopleImg from '../../images/photo_2022-10-13_15-28-30.jpg'
import { Box, Modal, Typography } from '@mui/material';
import close_Button from '../../images/close-btn.svg'
import { ThemeContext } from '../../context/themeContext';


function User({ open, setOpen }) {
  const { isDarkMode } = useContext(ThemeContext);
     
      const handleClose = () => {
        setOpen(false);
      };
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//           const response = await axios.get(
//             `https://www.api.yomon-emas.uz/api/users/pupils/${item?.id}`
//           );

//         setUser(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

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
                    <img className='modal_img' src={PeopleImg} width="150" height="200" alt='userImg'/>
                    <div className='modal_header'>
                        <h1>Садыков Дурёд Талибжанович</h1>

                        <p>Наименование страны гражданства <span>Республика Узбекистан</span></p>
                        <p>Год рождения <span>22.04.2000</span></p>
                    </div>
                </div>
                <span>Sadikov Duryod</span>
                <div className='parenDiv'>
                    <p>Пол <span>Мужчина</span></p>
                    <p>Серия и номер паспорта <span>AB 4112532</span></p>
                </div>
                <div className='parenDiv'>
                    <p>Национальность <span>Узбек</span></p>
                    <p>Код Национальности <span>*********</span></p>
                </div>
                <p>Место рождения <span>г. Ташкент, ул. Жахонаро, д. 8 стр. 1</span></p>
                <p>Код страны гражданства <span>122399993</span></p>
                <p>ПИНФЛ <span>112233445566778</span></p>
            </div>

            <div className='modal_content2'>
            <svg className='close_button' onClick={handleClose} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.483 1.29294C24.1961 -0.424406 26.9809 -0.431974 28.7036 1.27633C30.4251 2.98415 30.4325 5.7611 28.7205 7.47697L21.2043 15.0033L28.7284 22.5365C30.4263 24.2402 30.4033 26.9996 28.6769 28.7006C26.95 30.4008 24.1736 30.3964 22.4761 28.693L15.0034 21.2118L7.51668 28.7069C5.80363 30.4243 3.01878 30.4318 1.29609 28.7235C-0.425371 27.0157 -0.433037 24.2388 1.27927 22.5229L8.79547 14.9965L1.2716 7.46306C-0.426608 5.75939 -0.403361 3.00002 1.32304 1.29904C3.04994 -0.400967 5.82638 -0.396817 7.52385 1.30661L14.9965 8.78805L22.483 1.29294Z" fill="#393C42"/>
</svg>


                {/* <img className='close_button' onClick={handleClose} src={close_Button} /> */}
                <div>
                    <p>Наименование страны рождения <span>Республика Узбекистан</span></p>
                    <p>Код страны рождения <span>********************</span></p>
                    <p>Дата выдачи паспорта  <span>22.05.2016</span></p>
                    <p>Дата истечения срока паспорта  <span>22.06.2026</span></p>
                    <p>Код подразделения внутренних дел, выдавшего паспорт <span>356398794</span></p>
                    <p>Наименование органа, выдавшего паспорт <span>Орган внутренних дел Республики Узбекистана</span></p>
                    <p>Физическое состояние <span>Живой</span></p>
                </div>
            </div>
            </div>

          </Typography>
        </Box>
      </Modal>
  );
}

export default User;