
import './App.css'
import Header from './components/Navbars/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Page/Homepage'
import ContactUs from './components/Page/ContactUs'
import AboutUs from './components/Page/AboutUs'
import UserLoginForm from './components/User/UserLoginForm'
import UserRegister from './components/User/UserRegister'
import AddGroundForm from './components/Ground/AddGroundForm';
import VerifyBooking from './components/Booking/VerifyBooking';
import ViewAllBooking from './components/Booking/VerifyAllBooking';
import ViewMyBooking from './components/Booking/VerifyMyBooking';
import ViewAllTurf from './components/Ground/ViewAllTurf';
import ViewAllGround from './components/Ground/ViewAllGround';

function App() {
 
  return (
    <>
      <div>
      
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        
        

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />

        
        <Route path="/user/customer/register" element={<UserRegister />} />
        <Route path="/user/admin/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />

        <Route path="admin/ground/add" element={<AddGroundForm />} />
        <Route path="book/ground/add" element={<AddGroundForm />} />
        {/* <Route path="user/customer/all" element={<ViewAllCustomer />} /> */}

        {/* <Route path="/book/ground/:groundId" element={<Ground />} /> */}
        <Route path="user/ground/bookings" element={<ViewMyBooking />} />
        <Route path="user/ground/booking/all" element={<ViewAllBooking />} />
        <Route
          path="/user/admin/verify/booking/:bookingId"
          element={<VerifyBooking />}
        />
        {/* <Route path="/customer/wallet" element={<MyWallet />} />
        <Route path="/ground/review/add" element={<AddReview />} /> */}
        <Route path="/admin/ground/all" element={<ViewAllGround />} />
        <Route path="/turf/all" element={<ViewAllTurf />} />

        
        
      </Routes>
      
      </BrowserRouter>
        </div>
        </>
  )
}

export default App
