import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Import external CSS

export default function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/user", { withCredentials: true });
        setUsername(res.data.username);
      } catch (error) {
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    navigate("/login");
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <h2 className="logo">MERN Auth</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

      <div className="content">
        <h1>Welcome, {username}!</h1>
        <p>You are successfully logged in.</p>
      </div>
    </div>
  );
}
