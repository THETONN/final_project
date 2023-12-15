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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { Password } from 'primereact/password';
// import { Divider } from 'primereact/divider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

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

  const handleRegister = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/register",
        userData
      );

      // ตรวจสอบว่า response มี data หรือไม่
      if (response.data) {
        // ตั้งค่า userId ใน localStorage
        localStorage.setItem("userId", response.data.userId);

        // ตรวจสอบว่ามี groupId ใน response หรือไม่
        if (response.data.groupId) {
          localStorage.setItem("groupId", response.data.groupId);
        } else {
          // ถ้าไม่มี groupId อาจจะเป็นเพราะเป็นผู้ใช้ใหม่ที่ยังไม่ได้ทำการจัดกลุ่ม
          console.log(
            "New user registered without groupId. They may need to complete a questionnaire."
          );
        }

        // นำทางไปยังหน้าแรกหรือหน้าที่เหมาะสม
        navigate("/homepage");
      } else {
        // จัดการกรณีที่ไม่ได้รับ response data อย่างเหมาะสม
        throw new Error("Registration did not return expected data.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      // จัดการกับข้อผิดพลาดที่นี่
    }
  };

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

  const [passwordErrors, setPasswordErrors] = useState([]);

  // ฟังก์ชันตรวจสอบความแข็งแรงของรหัสผ่าน
  const validatePassword = (password) => {
    let errors = [];
    if (password.length < 8) {
      errors.push("ต้องมีอย่างน้อย 8 ตัวอักษร!");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("ต้องมีตัวอักษรตัวใหญ่อย่างน้อย 1 ตัว!");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("ต้องมีตัวอักษรตัวเล็กอย่างน้อย 1 ตัว!");
    }
    if (!/\d/.test(password)) {
      errors.push("ต้องมีตัวเลขอย่างน้อย 1 ตัว!");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      errors.push("ต้องมีตัวอักษรพิเศษอย่างน้อย 1 ตัว!");
    }

    setPasswordErrors(errors);
    return errors.length === 0;
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    // อัปเดตรหัสผ่านในสถานะ values
    setValues({ ...values, password: password });
    // ตรวจสอบความแข็งแรงของรหัสผ่าน
    validatePassword(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validatePassword(values.password)) {
      // ไม่ต้องแสดง Swal เพราะเราจะแสดงข้อผิดพลาดใต้ช่องรหัสผ่าน
      return;
    }

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
                    onChange={handlePasswordChange}
                    value={values.password}
                    // invalid={passwordErrors.length > 0}
                    invalid={passwordErrors.length > 0 ? 'true' : undefined}
                  />
                  {passwordErrors.map((error, index) => (
                    <div key={index} className="text-danger mb-2 mt-0">
                      <FontAwesomeIcon icon={faTimesCircle} /> {error}
                    </div>
                  ))}

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
