import './App.css';
import HomePage from './HomePage';
import OurStoryPage from './OurStoryPage';
import MenuPage from './MenuPage';
import OrderOnlinePage from './OrderOnlinePage';
import BookingPage from './BookingPage';
import LoginPage from './LoginPage';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
<div className='wrapper'>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<OurStoryPage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/reservations" element={<BookingPage />}></Route>
            <Route path="/order-online" element={<OrderOnlinePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
