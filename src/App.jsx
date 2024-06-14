import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import BookingForm from './components/bookingForm';
import Header from './components/header';
import LoginPage from './components/loginPage';
// import Footer from './components/Foot';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;