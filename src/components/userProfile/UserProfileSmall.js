import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, Button, Navbar } from 'react-bootstrap';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Profilebtn from '../../components/btn/Profilebtn/Profilbtn';
import TermCondi from '../../components/btn/Profilebtn/TermCondi';
import AboutUs from '../../components/btn/Profilebtn/AboutUs';
import PrivacyPolicyBtn from '../../components/btn/Profilebtn/PrivacyPolicyBtn';
import ContactUs from '../../components/btn/Profilebtn/ContactUs';
import Sharebtn from '../../components/btn/Profilebtn/Sharebtn';
import img from '../../assets/image/profile.jpg';
import './UserProfileSmall.css';
import Footer from '../footer/Footer';
import PersonalDetail from './PersnolDetail/PersonalDetail';
import TermsAndConditions from './T&C/TermsAndConditions';
import Aboutus from './AboutUs/AboutUs';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import ShareModal from './Share/ShareModal';
import Contact from './ContactUs/Contact';

const UserProfileSmall = () => {
  const [showDetail, setShowDetail] = useState(true);
  const [showTandC, setshowTandC] = useState(false);
  const [contact, setContact] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [Privacy, setPrivacy] = useState(false);
  const [aboutus, setAboutUs] = useState(false);
  const [isDetailClicked, setIsDetailClicked] = useState(false);

  const handlePersonalDetails = () => {
    setShowDetail(true);
  };
  const handleTandC = () => {
    setShowDetail(false);
    setshowTandC(true);
    setContact(false);
    setPrivacy(false);
    setAboutUs(false);
    setShareModal(false);
  };
  const handleContact = () => {
    setShowDetail(false);
    setshowTandC(false);
    setContact(true);
    setPrivacy(false);
    setAboutUs(false);
    setShareModal(false);
  };
  const handlePrivacy = () => {
    setShowDetail(false);
    setshowTandC(false);
    setContact(false);
    setPrivacy(true);
    setAboutUs(false);
    setShareModal(false);
  };
  const handleAboutUs = () => {
    setShowDetail(false);
    setshowTandC(false);
    setContact(false);
    setPrivacy(false);
    setAboutUs(true);
    setShareModal(false);
  };
  const handleShareModal = () => {
    setShowDetail(false);
    setshowTandC(false);
    setContact(false);
    setPrivacy(false);
    setAboutUs(false);
    setShareModal(true);
  };

  return (
    <>
      <div>
        <Navbar>
          <div className='d-flex dropBtn p-2'>
            <DropdownButton
              title={<DehazeIcon />}
              variant='none'
              className='dropdown-btn '
            >
              <Dropdown.Item variant='none' style={{ marginBottom: 'auto' }}>
                <div className='user-pro-1'>
                  <Button
                    variant='none'
                    id='profile-button-1'
                    className={`profile-button font-style`}
                    onClick={handlePersonalDetails}
                  >
                    <Profilebtn />
                    <span>Personal Details</span>
                  </Button>
                  <Button
                    className={`profile-button font-style `}
                    onClick={handleTandC}
                  >
                    <TermCondi />
                    Terms &amp; Conditions
                  </Button>
                  <Button
                    className={`profile-button font-style `}
                    onClick={handleAboutUs}
                  >
                    <AboutUs />
                    <span>About Us</span>
                  </Button>
                  <Button
                    className={`profile-button font-style`}
                    onClick={handlePrivacy}
                  >
                    <PrivacyPolicyBtn />
                    <span>Privacy Policy</span>
                  </Button>
                  <Button
                    className={`profile-button font-style`}
                    onClick={handleContact}
                  >
                    <ContactUs />
                    <span>Contact Us</span>
                  </Button>
                  <Button
                    className={`profile-button font-style `}
                    onClick={handleShareModal}
                  >
                    <Sharebtn />
                    <span>Share Link</span>
                  </Button>
                </div>
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <img src={img} alt='Profile' className='avatar' />
          </div>
        </Navbar>
        <div className='profile-content px-5 py-5'>
          {' '}
          {showDetail && <PersonalDetail />}
          {showTandC && <TermsAndConditions />}
          {aboutus && <Aboutus />}
          {Privacy && <PrivacyPolicy />}
          {shareModal && <ShareModal />}
          {contact && <Contact />}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default UserProfileSmall;
