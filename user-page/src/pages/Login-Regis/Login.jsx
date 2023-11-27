import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(null);
  const onSumbit = async (e) => {
    try {
      e.preventDefault();
      const email = e.target.user_email.value;
      const password = e.target.user_pass.value;
      const { data: res } = await axios.post("http://localhost:3000/login", { email, password });
      console.log(res);
      if (res.role === "ADMIN") {
        localStorage.setItem("userId", res.userId);
        window.location.href = "/admin";
      } else {
        localStorage.setItem("userId", res.userId);
        window.location.href = "/";
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <div className="container vh-100  p-5 d-flex flex-column align-items-center justify-content-center">
      <div className="w-50 bg-light border rounded p-5">
        <h2 className="text-center mb-5">Login</h2>
        <form onSubmit={onSumbit} method="POST">
          <div className="form-group">
            <label htmlFor="_email">Email</label>
            <input type="text" name="user_email" id="_email" className="form-control" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="_pass">Password</label>
            <input type="password" name="user_pass" id="_pass" className="form-control" placeholder="Password" required />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <p className="text-end">
            Don&rsquo;t have an account yet ? &nbsp;
            <a href="/register" className="text-end bg-light rounded-0 text-decoration-none">
              Create Account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
