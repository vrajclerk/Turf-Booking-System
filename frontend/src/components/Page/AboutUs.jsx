//import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.aboutUsContainer}>
      <h1 style={styles.welcomeHeading}>Welcome to Our Turf Booking System</h1>
      <p>
        At BookYourTurf, we are dedicated to providing you with a seamless experience in finding and booking the perfect grounds for your events.<br/>
         Our mission is to simplify the process, making it easy for you to discover and reserve the ideal spaces for your activities.
      </p>
      <p>
        We pride ourselves on our extensive database, user-friendly interface, transparent pricing, and exceptional customer support. Whether you are organizing a sports event, a concert, a wedding, or any other gathering,<br/> <b>Book Your Turf</b> is here to make your event planning journey smooth and stress-free.
      </p>
      <p>
        Join our community today and experience the convenience of modern ground booking. Thank you for choosing <b>Book Your Turf</b> – Where Your Events Begin!
      </p>
      <h2 style={styles.whyChooseHeading}>Why Choose BookYourTurf?</h2>
      <p style={{textAlign:'left'}}>
        We understand the challenges of finding the perfect grounds for your events.<br/> 
        That is why we have designed our platform to offer a wide range of benefits, including:
      </p>
      <p style={{textAlign:'left'}}>
        <span style={styles.highlight}><i>User-Friendly Interface</i></span> <br/>
        <span style={styles.highlight}><i>Wide Selection of Venues</i> </span><br/>
        <span style={styles.highlight}><i>Real-Time Availability</i> </span><br/>
        <span style={styles.highlight}><i>Secure Online Payments </i></span> <br/>
     
         </p>
    </div>
  );
};

const styles = {
  aboutUsContainer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '800px',
  },
  welcomeHeading: {
    color: '#333',
  },
  whyChooseHeading: {
    color: '#007bff',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#28a745',
    textAlign: 'left',
  },
};

export default AboutUs;
 