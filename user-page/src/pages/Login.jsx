import React, { useState, useEffect} from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Login = () => {
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // ตรวจสอบว่ามี session ใน localStorage หรือไม่
    const userId = localStorage.getItem('userId');
    console.log(userId);
    if (userId) {
      navigate('/LoginHome'); // ถ้ามี session, นำทางไปยังหน้าหลัก
    }
  }, [navigate]);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data: res } = await axios.post("http://localhost:8081/login", values);
      // alert('Login response:', res);
      localStorage.setItem("userId", res.userId);
      localStorage.setItem("username", res.username); // ตั้งค่า username ใน localStorage
  
      if (res.role === "ADMIN") {
        navigate('http://localhost:5173/Dashboard'); // พอร์ตสำหรับ Admin
      } else {
        navigate('/LoginHome'); // พอร์ตสำหรับ User
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column' style={{ borderRadius: '1rem' }}>
                <div className="hover-zoom">
                  {/* <img src={Logo} style={{ width: '100px', height: '100px' }} alt="logo" /> */}
                </div>
                {/* <Link to="/" style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none', color: '#892CDC' }}>
                  <FontAwesomeIcon icon={faTimes} style={{ color: '#892CDC', fontSize: '24px', cursor: 'pointer' }} />
                </Link> */}

                <h2 className="fw-bold mb-2 mt-3" style={{ color: "#892CDC" }} >Log In</h2>
                <p className='mb-3'>Please enter your username and password</p>

                <form onSubmit={handleSubmit} className='w-100'>
                  <Link to="/" style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none', color: '#892CDC' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#FFA500', fontSize: '24px', cursor: 'pointer' }} />
                  </Link>

                  <MDBInput
                    wrapperClass='mb-4 w-100'
                    label='Email'
                    type='email'
                    size="lg"
                    onChange={e => setValues({ ...values, email: e.target.value })}
                  />
                  <MDBInput
                    wrapperClass='mb-4 w-100'
                    label='Password'
                    type='password'
                    size="lg"
                    onChange={e => setValues({ ...values, password: e.target.value })}
                  />
                  <MDBBtn type='submit' rounded className='login mb-4' size='lg' style={{ backgroundColor: '#892CDC', }}>
                    LOG IN
                  </MDBBtn>
                </form>

                {/* <MDBBtn rounded className='login mb-4' size='lg' style={{ backgroundColor: '#892CDC' }}>LOG IN</MDBBtn> */}



                <p className='text-center mt-3'>I don’t have an account ?
                  <Link to="/Registers" style={{ color: '#892CDC', }}>Register here</Link>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

// /LoginHome

export default Login;

