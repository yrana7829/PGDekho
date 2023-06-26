import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'react-input-range/lib/css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

import AllPropCards from './components/cards/AllPropCards';
import PropertyDetail from './components/propertyDetailedPage/PropertyDetail';
import UserProfile from './components/userProfile/UserProfile';
import PersnolDetail from './components/userProfile/PersnolDetail/PersnolDetail';
import RatingModal from './components/userProfile/RatingModal/RatingModal';
import DetailFormModal from './components/modal/DetailFormModal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/all-properties' element={<AllPropCards />}></Route>
        <Route path='/property' element={<PropertyDetail />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/persnolDetail' element={<PersnolDetail />} />
        <Route path='/ratingModal' element={<RatingModal />} />
        <Route path='/postproperties' element={<DetailFormModal />} />
      </Routes>
    </Router>
  );
};

export default App;
