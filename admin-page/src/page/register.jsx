import React, { useState } from 'react';
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import './css/register.css';   
import Logo from '../imgs/logo.png'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
import './css/register.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



function Registers() {

    const [values,setValues] = useState({
        username:'',
        password:'',
        email:'',
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/login')
            }else {
              alert("Registration failed. Please check your inputs and try again.");
            }

        })
         .catch(err => {
            console.error("Error during registration:", err);
            alert("An unexpected error occurred. Please try again later.");
        });
    }

  return (


    <MDBContainer fluid className='bg'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100 '>
        <MDBCol  col='12'>


          <MDBCard className='bg-white my-5 mx-auto ' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
            <div className="hover-zoom">
              <img src={Logo}
                style={{width: '100px',height:'100px'}} alt="logo"/>
              
            </div>
              <h2 className="fw-bold mb-4 mt-2 text-warning">Sign up</h2>
              
            <form onSubmit={handleSubmit}>
                <MDBInput wrapperClass='mb-4 w-100' label='username'  type='name' size="lg"
                        onChange={e => setValues({...values,username:e.target.value})}/>
                <MDBInput wrapperClass='mb-4 w-100' label='password'  type='password' size="lg"
                        onChange={e => setValues({...values,password:e.target.value})}/>
                <MDBInput wrapperClass='mb-4 w-100' label='email'  type='email' size="lg"
                        onChange={e => setValues({...values,email:e.target.value})}/>
                
                
                <button type='submit' className='btn btn-success btn-lg w-100 rounded-9 mb-4' 
                  style={{backgroundColor: '#FFA500'}} > Log in </button> 
               
                        
            </form>
            <Link  to="/login" className='text-center' >Go to Login</Link>
            </MDBCardBody>
            

          </MDBCard>
            
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Registers;