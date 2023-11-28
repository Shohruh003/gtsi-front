import { useContext } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import { ThemeContext } from '../../context/themeContext';
import { AuthContext } from '../../context/authContext';


function Compare({ compare, setCompare }) {
  const { isDarkMode } = useContext(ThemeContext);
const {compConfidens} = useContext(AuthContext)

     
      const handleClose = () => {
        setCompare(false);
      };


  return (
    <Modal
        open={compare}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="compare_modal">
        <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='compareModal_header'>        
                <svg className='compareModal_button' onClick={handleClose} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.483 1.29294C24.1961 -0.424406 26.9809 -0.431974 28.7036 1.27633C30.4251 2.98415 30.4325 5.7611 28.7205 7.47697L21.2043 15.0033L28.7284 22.5365C30.4263 24.2402 30.4033 26.9996 28.6769 28.7006C26.95 30.4008 24.1736 30.3964 22.4761 28.693L15.0034 21.2118L7.51668 28.7069C5.80363 30.4243 3.01878 30.4318 1.29609 28.7235C-0.425371 27.0157 -0.433037 24.2388 1.27927 22.5229L8.79547 14.9965L1.2716 7.46306C-0.426608 5.75939 -0.403361 3.00002 1.32304 1.29904C3.04994 -0.400967 5.82638 -0.396817 7.52385 1.30661L14.9965 8.78805L22.483 1.29294Z" fill="#393C42"/>
                </svg>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className={`compareModal_span ${isDarkMode ? 'darkmode' : ''}`}>
            {compConfidens} %

            </span>

          </Typography>
        </Box>
      </Modal>
  );
}

export default Compare;