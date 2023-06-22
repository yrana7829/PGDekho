import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import './ShareModal.css';
import img1 from '../../../assets/image/icon/copy.png';
import img2 from '../../../assets/image/icon/whatsapp.png';
import img3 from '../../../assets/image/icon/fb.png';
import img4 from '../../../assets/image/icon/chat.png';
import img6 from '../../../assets/image/icon/twitter.png';
import img7 from '../../../assets/image/icon/insta.png';
import img8 from '../../../assets/image/icon/skype.png';

const ShareModal = ({ handleClose }) => {
  const handleClick = (message) => {
    let redirectUrl = '';
    let encodedMessage = '';

    switch (message) {
      case 'Copy Link':
        // Handle copy link functionality
        console.log('Copying link...');
        break;
      case 'WhatsApp':
        encodedMessage = encodeURIComponent(
          'Hello, this is my WhatsApp message!'
        );
        redirectUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
        break;
      case 'Facebook':
        encodedMessage = encodeURIComponent(
          'Hello, this is my Facebook message!'
        );
        redirectUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedMessage}`;
        break;
      case 'Messenger':
        encodedMessage = encodeURIComponent(
          'Hello, this is my Messenger message!'
        );
        redirectUrl = `https://www.facebook.com/dialog/send?link=${encodedMessage}`;
        break;
      case 'Twitter':
        encodedMessage = encodeURIComponent(
          'Hello, this is my Twitter message!'
        );
        redirectUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
        break;
      case 'Instagram':
        encodedMessage = encodeURIComponent(
          'Hello, this is my Instagram message!'
        );
        redirectUrl = `https://www.instagram.com/direct/inbox/?text=${encodedMessage}`;
        break;
      case 'Skype':
        encodedMessage = encodeURIComponent('Hello, this is my Skype message!');
        redirectUrl = `skype:${encodedMessage}`;
        break;
      default:
        console.log(`Navigating to: ${message}`);
        break;
    }

    if (redirectUrl) {
      window.open(redirectUrl, '_blank');
    }
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      maxWidth='md'
      className='MuiDialog-paper'
    >
      <div className='share-modal-dialog'>
        <button className='share-modal-close' onClick={handleClose}>
          &times;
        </button>
        <DialogContent
          style={{
            width: '797px',
            height: '454px',
            marginTop: '10%',
            overflow: 'hidden',
            borderRadius: '30px',
          }}
        >
          <div
            className='share-modal-row'
            style={{ top: '389px', left: '342px' }}
          >
            {/* First Row */}
            <div className='share-modal-col'>
              <div
                className='share-modal-icon-container'
                onClick={() => handleClick('Copy Link')}
              >
                <span className='share-modal-icon share-modal-1'>
                  <img
                    src={img1}
                    alt='copy'
                    style={{ width: '90px', height: '90px' }}
                    className='hov-image'
                  />
                </span>
                <span className='share-modal-text'>Copy Link</span>
              </div>
            </div>
            <div className='share-modal-col'>
              <div
                className='share-modal-icon-container'
                onClick={() => handleClick('WhatsApp')}
              >
                <div className='share-modal-icon share-modal-2'>
                  <img
                    src={img2}
                    alt='whatsapp'
                    style={{ width: '120px', height: '90px' }}
                    className='hov-image'
                  />
                </div>
                <span className='share-modal-text'>WhatsApp</span>
              </div>
            </div>
            <div className='share-modal-col'>
              <div
                className='share-modal-icon-container'
                onClick={() => handleClick('Facebook')}
              >
                <div className='share-modal-icon share-modal-3'>
                  <img
                    src={img3}
                    alt='facebook'
                    style={{ width: '90px', height: '80px' }}
                    className='hov-image'
                  />
                </div>
                <span className='share-modal-text'>Facebook</span>
              </div>
            </div>
            <div className='share-modal-col'>
              <div
                className='share-modal-icon-container'
                onClick={() => handleClick('Messenger')}
              >
                <div
                  className='share-modal-icon share-modal-4'
                  style={{ marginTop: '15px' }}
                >
                  <img
                    src={img4}
                    alt='messenger'
                    style={{ width: '130px', height: '98px' }}
                    className='hov-image'
                  />
                </div>
                <span className='share-modal-text'>Messenger</span>
              </div>
            </div>
          </div>
          <div
            className='share-modal-row'
            style={{ marginTop: '0', marginRight: '10%' }}
          >
            {/* Second Row */}
            <div className='share-modal-col'>
              <div
                className='share-modal-icon-container'
                onClick={() => handleClick('Twitter')}
              >
                <div
                  className='share-modal-icon share-modal-5'
                  style={{ marginTop: '14px' }}
                >
                  <img
                    src={img6}
                    alt='twitter'
                    style={{ width: '90px', height: '90px' }}
                    className='hov-image'
                  />
                </div>
                <span className='share-modal-text'>Twitter</span>
              </div>
            </div>
            <div className='share-modal-col'>
              <div
                className='share-modal-icon-container'
                onClick={() => handleClick('Instagram')}
              >
                <div className='share-modal-icon share-modal-6'>
                  <img
                    src={img7}
                    alt='instagram'
                    style={{ width: '140px', height: '110px' }}
                    className='hov-image'
                  />
                </div>
                <span className='share-modal-text'>Instagram</span>
              </div>
            </div>
            <div className='share-modal-col'>
              <div className='share-modal-icon-container'>
                <div className='share-modal-icon share-modal-7'>
                  <img
                    src={img8}
                    alt='skype'
                    style={{ width: '140px', height: '110px' }}
                    onClick={() => handleClick('Skype')}
                    className='hov-image'
                  />
                </div>
                <span className='share-modal-text'>Skype</span>
              </div>
            </div>
            <div className='share-modal-col'>
              <div className='share-modal-icon-container'>
                <div className='share-modal-icon share-modal-7'></div>
                <span className='share-modal-text'></span>
              </div>
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default ShareModal;
