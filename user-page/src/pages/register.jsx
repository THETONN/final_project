import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

function Registers() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const MySwal = withReactContent(Swal);

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      navigate("/LoginHome"); // ถ้ามี session, นำทางไปยังหน้า LoginHome
    }
  }, [navigate]);

  const showAlert = async () => {
    await MySwal.fire({
      title: "success!",
      text: "Account created successfully!",
      icon: "success",
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

  const header = <div className="font-bold mb-3">Pick a password</div>;

  const footer = (
    <>
        <Divider />
        <p className="mt-2">Suggestions</p>
        <ul className="pl-2 ml-2 mt-0 line-height-3">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </>
);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (values.password !== values.confirm_password) {
        showAlert2();
        return;
      }


      const response = await axios.post(
        "http://localhost:8081/register",
        values
      );
      showAlert();
      // ตรวจสอบว่าการแจ้งเตือนแสดงขึ้นจริงๆ ก่อนที่จะนำทางผู้ใช้
      // navigate("/Login");
    } catch (error) {
      setError(error?.response?.data?.message);
      // อย่าลืมจัดการแสดงข้อความข้อผิดพลาดใน UI
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDBContainer fluid className="p-4 background-radial-gradient2">
        <MDBRow className="d-flex justify-content-center align-items-center h-100 ">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Start your adventure <br />
              <span style={{ color: "hsl(25, 80%, 75%)" }}>
                with Rocket Trips
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(25, 80%, 85%)" }}>
              Create an account to embark on a seamless travel experience. Our
              AI will guide you through a world of personalized options, from
              hidden gems to popular hotspots. Sign up and take the first step
              towards unforgettable journeys tailored just for you.
            </p>
          </MDBCol>
          <MDBCol col="6" className="position-relative">
            <div
              id="radius-shape-11"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-22"
              className="position-absolute shadow-5-strong"
            ></div>
            <MDBCard
              className="bg-white my-5 mx-auto "
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody
                className="p-5 w-100 d-flex flex-column"
                style={{ borderRadius: "1rem" }}
              >
                <h2 className="fw-bold mb-4 mt-2 text-warning">Sign up</h2>
                <form onSubmit={handleSubmit} className="w-100">
                  <Link
                    to="/"
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      textDecoration: "none",
                      color: "#892CDC",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{
                        color: "#FFA500",
                        fontSize: "24px",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                  {error && <div className="error-message">{error}</div>}
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Name"
                    type="text"
                    size="lg"
                    required
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Email"
                    type="email"
                    size="lg"
                    required
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    type="password"
                    size="lg"
                    required
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />

                  {/* <Password onChange={(e) => setValues({...values, password: e.target.value})} header={header} footer={footer} toggleMask /> */}
                  
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Confirm Password"
                    type="password"
                    size="lg"
                    required
                    onChange={(e) =>
                      setValues({ ...values, confirm_password: e.target.value })
                    }
                  />
                  <MDBBtn
                    type="submit"
                    className="btn btn-primary btn-lg w-100 rounded-9 mb-4"
                    style={{ backgroundColor: "#FFA500" }}
                  >
                    Register
                  </MDBBtn>
                </form>
                <Link
                  to="/Login"
                  className="text-center"
                  style={{ color: "#FFA500" }}
                >
                  Go to Login
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Registers;
