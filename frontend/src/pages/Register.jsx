import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("User registered successfully!");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} className="p-2 border" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-2 border" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-2 border" required />
        <button className="p-2 bg-blue-500 text-white">Register</button>
      </form>
    </div>
  );
}
