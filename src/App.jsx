import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const StyledDiv = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  height: 100vh;

  header {
    text-align: center;
    padding: 20px 0;
    background-color: #007BFF;
    color: #fff;
    width: 100%;
  }

  .container {
    text-align: center;
    padding: 20px;
    font-size: 1.2em;
    color: #333;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    margin: 20px;
  }

  form {
    width: 100%;
    max-width: 500px;
  }

  .icon {
    color: #007BFF;
    margin-right: 10px;
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
  }

  input[type="text"]:focus {
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0,123,255,.5);
  }

  input[type="text"]::placeholder {
    color: #aaa;
  }
`;
class BookingForm extends React.Component {
    render() {
        return (
            <StyledDiv>
                <header>
                    <h1>LoLa Cabs</h1>
                </header>
                <div className="container">
                    <p>Fill Out This Form To Book Your Trip</p>
                </div>
                <div className="form">
                    <form action="index.php" method="post">
                        <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
                        <input type="text" placeholder="Passenger's Name" required />
                        <span className="icon"><FontAwesomeIcon icon={faPhone} /></span>
                        <input type="text" placeholder="Contact Number" required />
                        <span className="icon"><FontAwesomeIcon icon={faHome} /></span>
                        <input type="text" placeholder="Enter PickUp Address" required />
                        <span className="icon"><FontAwesomeIcon icon={faHome} /></span>
                        <input type="text" placeholder="Enter Destination Address" required />
                        <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <input type="text" placeholder="Enter Your Email Id(Optional*)" />
                    </form>
                </div>
            </StyledDiv>
        );
    }
}

export default BookingForm;