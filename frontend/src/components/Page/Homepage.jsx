//import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Carousel from './Carousel';
import football_turf from "../../images/football_turf.jpg";
import cricket_turf from "../../images/cricket_turf.jpg";

const HomePage = () => {
    return (
      <div className="container-fluid mb-2">
        <Carousel />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <h1 className="text-color">Welcome to Turf Booking System</h1>
              <p>
                Welcome to our Turf Booking System, your ultimate destination for
                seamless sports experiences! Whether you are a passionate athlete,
                a weekend warrior, or just looking for some fun with friends,
                we have got you covered. Our platform is designed to simplify the
                process of booking a turf, making it as easy as 1-2-3!
              </p>
              <p>
                With our user-friendly interface, you can browse through a wide
                selection of top-quality turfs available in your area. Our
                extensive network of partner facilities ensures that you all find
                the perfect turf for your favorite sport, be it cricket, football,
                or any other. Once you have found the turf that suits your needs,
                booking is a breeze. No more lengthy phone calls or waiting in
                line – just a few clicks and you are all set!
              </p>
              <Link to="/turf/all" className="btn bg-color custom-bg-text">
                <button>Get Started</button>
              </Link>
            </div>
            <div className="col-md-4">
              <img
                src={football_turf}
                alt="Logo"
                width="450"
                height="auto"
                className="home-image"
              />
            </div>
          </div>
  
          <div className="row mt-5">
            <div className="col-md-4">
              <img
                src={cricket_turf}
                alt="Logo"
                width="400"
                height="auto"
                className="home-image"
              />
            </div>
            <div className="col-md-8">
              <h1 className="text-color ms-5">
                Instant Booking & Premium Facilities
              </h1>
              <p className="ms-5">
                Gone are the days of tedious turf reservation processes! With our
                Instant Turf Booking feature, securing your favorite playing field
                is faster and easier than ever before. Simply log in to our
                platform, select your preferred location, date, and time, and with
                just a few taps, your reservation is confirmed. No more waiting on
                hold or dealing with last-minute disappointments.
              </p>
              <p className="ms-5">
                At our Turf Booking System, we believe in providing nothing but
                the best for our players. That is why we have partnered with
                top-notch turf facilities that offer a range of premium amenities
                to elevate your sports experience. From impeccably maintained,
                lush green playing surfaces to well-equipped changing rooms and
                modern lighting systems for evening games, every aspect of our
                partnered turfs is carefully curated to cater to your needs.
              </p>
              <Link to="/turf/all" className="btn bg-color custom-bg-text ms-5">
                <button>Get Started</button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    );
  };
  
  export default HomePage;
  