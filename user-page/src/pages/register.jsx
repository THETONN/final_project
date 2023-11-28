import React, { useState,useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function Registers() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const MySwal = withReactContent(Swal);

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      navigate('/LoginHome'); // ถ้ามี session, นำทางไปยังหน้า LoginHome
    }

  }, [navigate]);


  const showAlert = async () => {
    await MySwal.fire({
      title: "success!",
      text: "Account created successfully!",
      icon: "success"
    });
    navigate("/Login");
  };
  const showAlert2 = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password and Confirm Password do not match!",
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      if (values.password !== values.confirm_password) {
        showAlert2();
        return;
      }
      
      const response = await axios.post('http://localhost:8081/register', values);
      showAlert();
      // ตรวจสอบว่าการแจ้งเตือนแสดงขึ้นจริงๆ ก่อนที่จะนำทางผู้ใช้
      // navigate("/Login");
    } catch (error) {
      setError(error?.response?.data?.message);
      // อย่าลืมจัดการแสดงข้อความข้อผิดพลาดใน UI
    }
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100 '>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto ' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column' style={{ borderRadius: '1rem' }}>
                <h2 className="fw-bold mb-4 mt-2 text-warning">Sign up</h2>
                <form onSubmit={handleSubmit} className='w-100'>
                  <Link to="/" style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none', color: '#892CDC' }}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#FFA500', fontSize: '24px', cursor: 'pointer' }} />
                  </Link>
                  {error && <div className="error-message">{error}</div>}
                  <MDBInput
                    wrapperClass='mb-4 w-100'
                    label='Name'
                    type='text'
                    size="lg"
                    onChange={e => setValues({ ...values, name: e.target.value })}
                  />
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
                  <MDBInput
                    wrapperClass='mb-4 w-100'
                    label='Confirm Password'
                    type='password'
                    size="lg"
                    onChange={e => setValues({ ...values, confirm_password: e.target.value })}
                  />
                  <MDBBtn type='submit' className='btn btn-primary btn-lg w-100 rounded-9 mb-4' style={{ backgroundColor: '#FFA500' }}>Register</MDBBtn>
                </form>
                <Link to="/Login" className='text-center' style={{ color: '#FFA500' }}>Go to Login</Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Registers;
