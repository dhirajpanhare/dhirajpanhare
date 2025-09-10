import Navabr from "../components/Navbar";
import { __contactapiurl } from "../API_URL";
import { useState } from "react";
import axios from "axios";

function Contact()
{
     const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    const ContactDetails = { FullName, Email, Message };
    console.log("Submitting contact details:", ContactDetails);

    axios.post(__contactapiurl + "save", ContactDetails)
      .then(() => {
        setFullName("");
        setEmail("");
        setMessage("");
        console.log(output)
        setOutput("User registered successfully");
      })
      .catch((error) => {
        console.error("contact failed:", error);
        setOutput("contact failed");
      });
  };

return (
    <>
    <Navabr/>
    
 <h1 class="Heading" id="contact">Contact</h1>
 <div class="contact">
   
    <div class="form">
        <form>
        <label>Full Name</label>
        <input type="text"  value={FullName}
            onChange={(e) => setFullName(e.target.value)} placeholder="Dhiraj Panhare"/>

        <label>Email Addres</label>
        <input type="email"  value={Email}
            onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"/>

        <label>Message</label>
        <textarea  value={Message}
            onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
<br/>
        <button class="mbtn" type="button" onClick={handleSubmit}>Send Message</button>
        </form>
    </div>

    <div class="detail">
        <a href="telto:9303019119">Call : 9303019119</a>
        <a href="mailto:dhirajpanhare08@gmail.com">Mail : dhirajpanhare08@gmail.com</a>
    </div>
 </div>

    </>
)
}
export default Contact;