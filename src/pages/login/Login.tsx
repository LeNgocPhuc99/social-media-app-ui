// Router DOM Import
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate("/");
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social App</h1>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
