// import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const StyledDiv = styled.div`
  font-family: Apple Chancery, cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BookingForm = () => {
  return (
    <StyledDiv>
      <header>
        <h1>Travelloo - Cabs</h1>
      </header>
      <div className="container">
        <p>Fill Out This Form To Book Your Trip</p>
        <br />
      </div>
      <div className="form">
        <form action="/submitForm" method="post">
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <input type="text" placeholder="Passenger's Name" required />
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <input type="text" placeholder="Contact Number" required />
          <span className="icon">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <input type="text" placeholder="Enter PickUp Address" required />
          <span className="icon">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <input type="text" placeholder="Enter Destination" required />
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <input type="text" placeholder="Enter Your Email Id(Optional*)" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default BookingForm;
