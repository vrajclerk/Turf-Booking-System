
import './App.css'
import Header from './components/Navbars/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/Page/Homepage'
import ContactUs from './components/Page/ContactUs'
import AboutUs from './components/Page/AboutUs'
import UserLoginForm from './components/User/UserLoginForm'
import UserRegister from './components/User/UserRegister'

function App() {
 
  return (
    <>
      <div>
      <h1>Turf Booking System</h1>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/hotel/location" element={<HomePage />} />
        

        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        
        <Route path="user/hotel/register" element={<UserRegister />} />
        <Route path="user/customer/register" element={<UserRegister />} />
        <Route path="user/admin/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLoginForm />} />

        
        
      </Routes>
        </div>
        </>
  )
}

export default App
