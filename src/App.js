import './App.css';
import HomePage from './HomePage';
import OurStoryPage from './OurStoryPage';
import MenuPage from './MenuPage';
import OrderOnlinePage from './OrderOnlinePage';
import ReservationsPage from './ReservationsPage';
import LoginPage from './LoginPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
<div className='wrapper'>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<OurStoryPage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/reservations" element={<ReservationsPage />}></Route>
            <Route path="/order-online" element={<OrderOnlinePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
