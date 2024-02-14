import { Link, useLocation } from "react-router-dom";
import TadLogo from '../../images/tad-head.png';
import '../../sass/main.scss';
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TokenContext } from "../../context/tokenContext";
import Compare from "../../Modal/Compare/Compare";
import { AuthContext } from "../../context/authContext";

function Header() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "activeColor" : "";
  };

  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const { token } = useContext(TokenContext);
  const [compare, setCompare] = useState(false);
  const { setCompConfidens } = useContext(AuthContext);

  useEffect(() => {
    const body = document.querySelector('body');
    const btn = document.querySelector('.btn');
    const icon = document.querySelector('.btn__icon');

    function toggleDarkMode() {
      setIsDarkMode(!isDarkMode);
      icon.classList.add('animated');
      setTimeout(() => {
        icon.classList.remove('animated');
      }, 500);
    }
    if (isDarkMode) {
      body.classList.add('darkmode');
      document.body.classList.add('dark-mode');
      icon.classList.add('fa-moon');
      icon.classList.remove('fa-sun');
    } else {
      body.classList.remove('darkmode');
      icon.classList.remove('fa-moon');
      document.body.classList.remove('dark-mode');
      icon.classList.add('fa-sun');
    }

    btn.addEventListener('click', toggleDarkMode);

    return () => {
      btn.removeEventListener('click', toggleDarkMode);
    };
  }, [isDarkMode]);


  const handleImages = (evt) => {
    evt.preventDefault();
    const [image1, image2] = evt.target.elements;
    const formData = new FormData();
    formData.append('photo1', image1.files[0]);
    formData.append('photo2', image2.files[0]);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRFToken': 'M1u8j44fbMPtbGOOrefkhJimIRDRtNKCJlnUMjPQTsJ2PQPO6RoOLCIz8v8PnsbL',
        Authorization: `Token ${token}`,
      },
    };

    axios.post('https://mycorse.onrender.com/https://gsiback.tadi.uz/api/verify/', formData, config)
      .then((response) => {
        setCompConfidens(response.data.confidence.toFixed(2) * 100);
        setCompare(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Лицо не найдено !');
      });
  };
  const handleCameraAccess = () => {
    const constraints = { video: { width: { max: 1280 }, height: { max: 720 } } };
  
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();
  
        setTimeout(() => {
          const canvas = document.createElement('canvas');
          const videoWidth = video.videoWidth;
          const videoHeight = video.videoHeight;
          const aspectRatio = videoWidth / videoHeight;
          const targetHeight = Math.min(videoHeight, 720);
          const targetWidth = Math.round(targetHeight * aspectRatio);
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          canvas.getContext('2d').drawImage(video, 0, 0, targetWidth, targetHeight);
  
          const dataUrl = canvas.toDataURL('video/mp4', 1);
          const blob = new Blob([dataURItoBlob(dataUrl)], { type: 'video/mp4' });
          uploadVideo(blob)
            .then(() => {
              setTimeout(() => {
                stream.getTracks().forEach((track) => {
                  track.stop();
                });
              }, 1000);
            })
            .catch((error) => {
              console.log(error);
              toast.error('Video jo\'natishda xatolik yuz berdi..');
            });
  
          setTimeout(() => {
            stream.getTracks().forEach((track) => {
              track.stop();
            });
          }, 1000);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Kameraga kirishda xatolik yuz berdi.');
      });
  };
  
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'video/mp4' });
  };
  
  const uploadVideo = async (videoBlob) => {
    try {
      const formData = new FormData();
      formData.append('video', videoBlob, 'liveness-video.mp4');
  
      const response = await fetch('https://gsiback.tadi.uz/api/liveness/', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': `multipart/form-data`,
          // 'Content-Type': `multipart/form-data; boundary=${boundary}`,
        },
      });

      const errorData = await response.json();
console.log(errorData);
  
      if (response.ok) {
        toast.success('Video muvaffaqiyatli jo\'natildi!');
      } else {
        toast.error('Video jo\'natishda xatolik yuz berdi!!!');
      }
    } catch (error) {
      console.log(error);
      toast.error('Video jo\'natishda xatolik yuz berdi.');
    }
  };
  
  const convertToH264 = (videoData) => {
    const h264Data = fakeH264Converter(videoData);
    return h264Data;
  };
  
  const fakeH264Converter = (videoData) => {
    const h264Data = convertToH264(videoData);
    return h264Data;
  };
  

  return (
    <div className={`header ${isDarkMode ? 'darkmode' : ''}`}>
      <div className="header_inner">
        <div className="btn">
          <div className="btn__indicator">
            <div className="btn__icon-container">
              <i className="btn__icon fa-solid"></i>
            </div>
          </div>
        </div>
        <div className="header_logoDiv">
          <img className="header_logo" src={TadLogo} alt="Tad Logo" />
          <p className="header_logoName">
            Tad <br />
            Industries <br />
            <span className="header_logoSpan">Face IDS</span>
          </p>
        </div>
        <ul className="header_linkList">
          <li className="header_item">
            <Link className={`header_link ${isActive("/")} ${isDarkMode ? 'darkmode' : ''}`} to="/">
              Дашборд
            </Link>
          </li>
          <li className="header_item">
            <Link className={`header_link ${isActive("/query")} ${isDarkMode ? 'darkmode' : ''}`} to="/query">
              База запросов
            </Link>
          </li>
          <li className="header_item">
            <Link className={`header_link ${isActive("/database")} ${isDarkMode ? 'darkmode' : ''}`} to="/database">
              База данных
            </Link>
          </li>
        </ul>
        <div className="header_compare">
          <form onSubmit={handleImages}>
            <p className="compare_heading">Cравнение</p>
            <div className="compare_images">
              <label className={`compare_label ${isDarkMode ? 'darkmode' : ''}`}>
                фото1
                <input id="fileInput" className="compare_image compare_image1" type="file" name="image1" placeholder="image1" />
              </label>
              <label className={`compare_label ${isDarkMode ? 'darkmode' : ''}`}>
                фото2
                <input id="fileInput" className="compare_image compare_image2" type="file" name="image2" />
              </label>
            </div>
            <button className={`compare_button ${isDarkMode ? 'darkmode' : ''}`} type="submit">
              Сравнить
            </button>
          </form>
        </div>
        <div className="header_liveness">
          <p className="header_livenessText">Проверка на Liveness</p>
          <button className={`header_livenessBtn ${isDarkMode ? 'darkmode' : ''}`} type="button" onClick={handleCameraAccess}>
            Доступ к камере
          </button>
        </div>
        <ToastContainer />
        <Compare compare={compare} setCompare={setCompare} />
      </div>
    </div>
  );
}

export default Header;