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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import './Login.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';



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

  const MySwal = withReactContent(Swal);

  const showAlert2 = () => {
    Swal.fire({
      icon: "error",
      title: "Oops",
      text: "Email and password cannot be empty!",
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // if (values.email === '' || values.password === '') {
      //   showAlert2();
      //   return;
      // }
      
      const { data: res } = await axios.post("http://localhost:8081/login", values);
      // alert('Login response:', res);
      localStorage.setItem("userId", res.userId);
      localStorage.setItem("username", res.username); // ตั้งค่า username ใน localStorage
      localStorage.setItem("groupId", res.groupId);
      localStorage.setItem("feedback", res.feedback);
      


  
      if (res.role === "ADMIN") {
        window.location.href = 'http://localhost:5174/Dashboard'; // พอร์ตสำหรับ Admin
      } else {
        window.location.href = '/LoginHome'; // พอร์ตสำหรับ User
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <div className='p-4 background-radial-gradient' style={{   minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Welcome back <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>Continue your journey</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Sign in to access your personalized travel itineraries and latest AI-driven travel insights. Ready for your next adventure? Log in and let the journey begin!
          </p>

        </MDBCol>

          <MDBCol col='6'className='position-relative'>
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

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
                    <FontAwesomeIcon icon={faTimes} style={{ color: '##892CDC', fontSize: '24px', cursor: 'pointer' }} />
                  </Link>

                  <MDBInput
                    wrapperClass='mb-4 w-100'
                    label='Email'
                    type='email'
                    size="lg"
                    onChange={e => setValues({ ...values, email: e.target.value })}
                    required
                    invalid= {MDBInput.invalid}
                    validation= "Please provide your email"
                  />
                  <MDBInput
                    wrapperClass='mb-4 w-100'
                    label='Password'
                    type='password'
                    size="lg"
                    onChange={e => setValues({ ...values, password: e.target.value })}
                    required
                    invalid= {MDBInput.invalid}
                    validation= "Please provide your email"
                  />
                  <MDBBtn type='submit' rounded className='btn-lg w-100 login mb-4'  style={{ backgroundColor: '#892CDC', }}>
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

