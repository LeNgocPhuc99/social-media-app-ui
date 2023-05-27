import { useContext } from "react";
import { ThemeContext } from "./context/theme/themeContext";

// React Router Import
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";


import "./App.css";
import "./style.scss";

// Pages Import
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

// Components Import
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import { AuthContext } from "./context/auth/authContext";


function App() {
  const {user} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext)
  console.log('APP User', user)
  const Layout = () => {
    return (
      <div className={`theme-${theme}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
