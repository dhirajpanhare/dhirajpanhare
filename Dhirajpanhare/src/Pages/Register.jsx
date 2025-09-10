import { useState } from "react";
import Navbar from "../components/Navbar"; // Fixed typo from Navabr to Navbar
import axios from "axios";
import { __userapiurl } from '../API_URL.jsx';
import '../components/Style.css'
function Register() {

  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Mobile, setMobile] = useState("");
  const [role, setrole] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const userDetails = { FullName, Email, Password, Mobile };
    console.log("Submitting user details:", userDetails);

    axios.post(__userapiurl + "save", userDetails)
      .then(() => {
        setFullName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setOutput("User registered successfully");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setOutput("User registration failed");
      });
  };
 
  return (
    <>
      <Navbar />
      <div className="teachers">
        <form className="myform" >
          <h1 className="heading">Register Here!</h1>

          <input
            type="text"
            placeholder="Enter Full Name"
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input"
          />
<br />

          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="input"
          />
<br />
          <input
            type="email"
            placeholder="Enter Email Address"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <br />  
<input
            type="text"
            placeholder="Enter Your Role"
            value={role}
            onChange={(e) => setrole(e.target.value)}
            className="input"
          />
<br />
          <input
            type="password"
            placeholder="Enter Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />

          <button className="btnn" type="button" onClick={handleSubmit}>
            Register
          </button>

          {/* Output message display */}
          <p>{output}</p>

          <p>Already have an account?</p>
          <a href="./teacher_login.html">Log In</a>
        </form>
      </div>
    </>
  );
}

export default Register;
