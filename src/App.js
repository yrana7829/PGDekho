import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'react-input-range/lib/css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Home from './components/Home';
import SignInModal from './components/SingInModal';
import AllPropCards from './cards/AllPropCards';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/signin' element={<SignInModal />} />
        <Route path='/all-properties' element={<AllPropCards />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
