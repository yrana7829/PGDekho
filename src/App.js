import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'react-input-range/lib/css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import React from 'react';

import AllPropCards from './components/cards/AllPropCards';
import PropertyDetail from './components/propertyDetailedPage/PropertyDetail';
import UserProfile from './components/userProfile/UserProfile';
import PersonalDetail from './components/userProfile/PersnolDetail/PersonalDetail';
import RatingModal from './components/userProfile/RatingModal/RatingModal';
import DetailFormModal from './components/modal/DetailFormModal';
import UserProfileSmall from './components/userProfile/UserProfileSmall';
import SignUpSmall from './components/modal/smallModal/SignUpSmall';
import LogInSmall from './components/modal/smallModal/LogInSmall';
import OtpSm from './components/modal/smallModal/OtpSm';
import SignUpDetailedsm from './components/modal/smallModal/SignUpDetailedsm';
import LocationDetailSm from './components/modal/smallModal/LocationDetailSm';
import FilterModal from './components/modal/FilterModal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/all-properties' element={<AllPropCards />}></Route>
        <Route path='/property' element={<PropertyDetail />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/persnolDetail' element={<PersonalDetail />} />
        <Route path='/ratingModal' element={<RatingModal />} />
        <Route path='/postproperti' element={<DetailFormModal />} />
      </Routes>
    </Router>
  );
};

export default App;
