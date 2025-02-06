import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", formData, { withCredentials: true });
      alert("Login successful!");
    } catch (error) {
      alert("Error logging in");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-2 border" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-2 border" required />
        <button className="p-2 bg-green-500 text-white">Login</button>
      </form>
    </div>
  );
}
