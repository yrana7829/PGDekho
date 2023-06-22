import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './UserProfile.css';
import NavBar from '../../components/navbar/Navbar';
import Profilbtn from '../../components/btn/Profilebtn/Profilbtn';
import TermCondi from '../../components/btn/Profilebtn/TermCondi';
import AboutUs from '../../components/btn/Profilebtn/AboutUs';
import PrivacyPolicyBtn from '../../components/btn/Profilebtn/PrivacyPolicyBtn';
import ContactUs from '../../components/btn/Profilebtn/ContactUs';
import Sharebtn from '../../components/btn/Profilebtn/Sharebtn';
import img from '../../assets/image/profile.jpg';
import PersnolDetail from './PersnolDetail/PersnolDetail';
import Footer from '../footer/Footer';
import TermsAndConditions from './T&C/TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Aboutus from './AboutUs/AboutUs';
import ShareModal from './Share/ShareModal';
import Contact from './ContactUs/Contact';
import { AiOutlineLogout } from 'react-icons/ai';

const UserProfile = () => {
  const [showDetail, setShowDetail] = useState(true);
  const [TandC, setTandC] = useState(false);
  const [aboutus, setAboutUs] = useState(false);
  const [Privacy, setPrivacy] = useState(false);
  const [isDetailClicked, setIsDetailClicked] = useState(false);
  const [contact, setContact] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.closest('.user-profile') === null) {
        handleClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleClose = () => {
    setActiveButton(null);
    setShowDetail(true);
    setIsDetailClicked(false);
    setTandC(false);
    setAboutUs(false);
    setPrivacy(false);
    setShareModal(false);
    setContact(false);
  };

  const handleComponentClick = (buttonId) => {
    handleButtonClick(buttonId);
    setShowDetail(false);
    setIsDetailClicked(false);
    setTandC(false);
    setAboutUs(false);
    setPrivacy(false);
    setShareModal(false);
    setContact(false);

    // Show the clicked component
    switch (buttonId) {
      case 'personal':
        setShowDetail(true);
        setIsDetailClicked(true);
        break;
      case 'terms':
        setTandC(true);
        break;
      case 'about':
        setAboutUs(true);
        break;
      case 'privacy':
        setPrivacy(true);
        break;
      case '':
        setContact(true);
        break;
      case 'share':
        setShareModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col xs={4} className='order-1 order-md-0'>
            <div className='user-profile'>
              <div className='details-section'>
                <div className='outer-circle'>
                  <div className='inner-circle'>
                    <img src={img} alt='Profile Image' />
                  </div>
                </div>
                <div className='profile-name font-style'>
                  <div>Jackson D.</div>
                  <div>+91-9876754321</div>
                </div>
                <Col className='contain'>
                  <div
                    className={`font-style ${
                      activeButton === 'personal' ? 'active' : ''
                    }`}
                    onClick={() => handleComponentClick('personal')}
                  >
                    <Button
                      className={`profile-button font-style ${
                        activeButton === 'personal' ? 'active' : ''
                      }`}
                    >
                      <Profilbtn />
                      <span>Personal Details</span>
                    </Button>
                  </div>
                  <div
                    className={`font-style ${
                      activeButton === 'terms' ? 'active' : ''
                    }`}
                    onClick={() => handleComponentClick('terms')}
                  >
                    <Button
                      className={`profile-button font-style ${
                        activeButton === 'terms' ? 'active' : ''
                      }`}
                    >
                      <TermCondi />
                      Terms &amp; Conditions
                    </Button>
                  </div>
                  <div
                    className={`font-style ${
                      activeButton === 'about' ? 'active' : ''
                    }`}
                    onClick={() => handleComponentClick('about')}
                  >
                    <Button
                      className={`profile-button font-style ${
                        activeButton === 'about' ? 'active' : ''
                      }`}
                    >
                      <AboutUs />
                      <span>About Us</span>
                    </Button>
                  </div>
                  <div
                    className={`font-style ${
                      activeButton === 'privacy' ? 'active' : ''
                    }`}
                    onClick={() => handleComponentClick('privacy')}
                  >
                    <Button
                      className={`profile-button font-style ${
                        activeButton === 'privacy' ? 'active' : ''
                      }`}
                    >
                      <PrivacyPolicyBtn />
                      <span>Privacy Policy</span>
                    </Button>
                  </div>
                  <div
                    className={`font-style ${
                      activeButton === 'contact' ? 'active' : ''
                    }`}
                    onClick={() => handleComponentClick('contact')}
                  >
                    <Button
                      className={`profile-button font-style ${
                        activeButton === '' ? 'active' : ''
                      }`}
                    >
                      <ContactUs />
                      <span>Contact Us</span>
                    </Button>
                  </div>
                  <div
                    className={`font-style font-style ${
                      activeButton === 'share' ? 'active' : ''
                    }`}
                    onClick={() => handleComponentClick('share')}
                  >
                    <Button
                      className={`profile-button font-style ${
                        activeButton === 'share' ? 'active' : ''
                      }`}
                    >
                      <Sharebtn />
                      <span>Share Link</span>
                    </Button>
                  </div>

                  {/* New button added, can be switched on later*/}

                  {/* <div>
                    <Button
                      className='btn-button'
                      style={{
                        marginTop: '240px',
                        marginLeft: '75px',
                        background: '#FFF0EC',
                        border: '2px solid #FA6E42',
                        boxshadow: '0px 3px 10px rgba(163, 182, 204, 0.2)',
                        width: '170px',
                        borderRadius: '50px',
                      }}
                    >
                      <span style={{ color: '#FA6E42', marginLeft: '-40px' }}>
                        <AiOutlineLogout />
                      </span>
                      <span
                        style={{
                          color: '#FA6E42',
                          marginLeft: '40px',
                          fontfamily: 'Poppins',
                          fontstyle: 'normal',
                          fontweight: '700',
                          fontsize: '10px',
                          lineheight: '40px',
                        }}
                      >
                        {' '}
                        Logout
                      </span>
                    </Button>
                  </div> */}
                </Col>
              </div>
            </div>
          </Col>
          <Col xs={8}>
            {showDetail && <PersnolDetail />}
            {TandC && <TermsAndConditions />}
            {aboutus && <Aboutus />}
            {Privacy && <PrivacyPolicy />}
            {shareModal && <ShareModal handleClose={handleClose} />}
            {contact && <Contact />}
          </Col>
        </Row>
      </Container>
      <Footer style={{ marginTop: '10px' }} />
    </>
  );
};

export default UserProfile;
