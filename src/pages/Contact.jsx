import React from 'react'

function Contact() {
  return (
    <section className='contact-page'>
      <div className="right">
        <h1>Contact Us</h1>
        <h5>Have questions, feedback, or need support? We’re here to help!</h5>
        <p>Whether you're curious about our features, plans, or need assistance building your portfolio — our team is just a message away.</p>
        <h5>support@portfoliobuilder.com</h5>
        <h5>+1 (800) 123-4567</h5>
      </div>
      <div className="left">
        <form>
          <div>
          
            <input type="text" id="name" name="name" placeholder='Full Name'  required />
          </div>
          <div>
            
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div>
           
            <input type="phonenumber" id="phno" name="phno" placeholder='Phone Number'required />
          </div>
          <div>
           
           <textarea></textarea>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact