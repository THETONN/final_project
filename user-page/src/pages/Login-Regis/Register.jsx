import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:8081/register', values);

      if (res.data.Status === 'Success') {
        navigate('/login');
      } else {
        alert('Registration failed. Please check your inputs and try again.');
      }
    } catch (err) {
      console.error('Error during registration:', err);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100 '>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto ' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column' style={{ borderRadius: '1rem' }}>
                <h2 className='fw-bold mb-4 mt-2 text-warning'>Sign up</h2>
                <form onSubmit={handleSubmit} className='w-100'>
                  <Link to='/HomePage' style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none', color: '#892CDC' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#FFA500', fontSize: '24px', cursor: 'pointer' }} />
                  </Link>
                  <MDBInput
                    label='Name'
                    type='text'
                    size='lg'
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                  />
                  <MDBInput
                    label='Email'
                    type='email'
                    size='lg'
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                  />
                  <MDBInput
                    label='Password'
                    type='password'
                    size='lg'
                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                  />
                  <MDBInput
                    label='Confirm Password'
                    type='password'
                    size='lg'
                    onChange={(e) => setValues({ ...values, confirm_password: e.target.value })}
                  />
                  <MDBBtn type='submit' className='btn btn-primary btn-lg w-100 rounded-9 mb-4' style={{ backgroundColor: '#FFA500' }}>
                    Register
                  </MDBBtn>
                </form>
                <Link to='/login' className='text-center' style={{ color: '#FFA500' }}>
                  Go to Login
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Register;
