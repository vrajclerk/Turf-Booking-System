
import './App.css'
import Header from './components/Navbars/Header'
import { Routes, Route } from 'react-router-dom'
//import NormalHeader from './components/Navbars/NormalHeader'

function App() {
 
  return (
    <>
      <div>
      <h1>Turf Booking System</h1>
      <Header />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/hotel/location" element={<HomePage />} />

        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />

        <Route path="user/hotel/register" element={<UserRegister />} />
        <Route path="user/customer/register" element={<UserRegister />} />
        <Route path="user/admin/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />

        <Route path="admin/ground/add" element={<AddGroundForm />} />
        <Route path="book/ground/add" element={<AddGroundForm />} />
        <Route path="user/customer/all" element={<ViewAllCustomer />} />

        <Route path="/book/ground/:groundId" element={<Ground />} />
        <Route path="user/ground/bookings" element={<ViewMyBooking />} />
        <Route path="user/ground/booking/all" element={<ViewAllBooking />} />
        <Route
          path="/user/admin/verify/booking/:bookingId"
          element={<VerifyBooking />}
        /> 
         <Route path="/customer/wallet" element={<MyWallet />} />
        <Route path="/ground/review/add" element={<AddReview />} />
        <Route path="/admin/ground/all" element={<ViewAllGround />} />
        <Route path="/turf/all" element={<ViewAllTurf />} /> 

         <Route path="user/admin/booking/all" element={<ViewAllBooking />} />
        <Route path="user/hotel/bookings" element={<ViewMyBooking />} />
        
      </Routes> */}
        </div>
        </>
  )
}

export default App
