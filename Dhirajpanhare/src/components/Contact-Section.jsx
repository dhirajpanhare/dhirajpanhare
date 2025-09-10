function Contact_Section()
{
    return(
        <>
        
 
 <h1 class="Heading" id="contact">Contact</h1>
 <div class="contact">
   
    <div class="form">
        <label>Full Name</label>
        <input type="text" name="" id="" placeholder="Dhiraj Panhare"/>

        <label>Email Addres</label>
        <input type="email" name="" id="" placeholder="example@gmail.com"/>

        <label>Message</label>
        <textarea name="" id="" placeholder="Message"></textarea>
<br/>   
        <button class="mbtn">Send Message</button>
    </div>

    <div class="detail">
        <a href="telto:9303019119">Call : 9303019119</a>
        <a href="mailto:dhirajpanhare08@gmail.com">Mail : dhirajpanhare08@gmail.com</a>
    </div>
 </div>


        </>
    )
}
export default Contact_Section;