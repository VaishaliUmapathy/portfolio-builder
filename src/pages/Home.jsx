import React, { Children } from 'react'
import '../SCSS/app.scss'
import '../SCSS/abstracts/button.scss'
import Footer from '../portfolio-ibm/Footer'
function Home() {
  return (
    <>
      <div className='home-div'>
     

      <div className="hero-content">
        <div className='sub-hero'>
          <h1>Create Your Stunning Portfolio in Minutes</h1>
          <p>
            Showcase your skills and work with beautiful, customizable templates. 
            Build your portfolio effortlessly — no coding required!
          </p>
          <Button>Create My Portfolio</Button>
        </div>
      

        <img src="/home.jpeg" alt="Portfolio Builder Dashboard Preview" />
      </div>

      

        <div className='steps'>
          <div className='step'>
            <h3>1. Sign Up</h3>
            <p>Create an account to get started.</p>
          </div>
          <div className='step'>
            <h3>2. Choose a Template</h3>
            <p>Pick a template that fits your brand and style.</p>
          </div>
          <div className='step'>
            <h3>3. Customize</h3>
            <p>Add your content, tweak the design, and make it your own.</p>
          </div>
          <div className='step'>
            <h3>4. Publish</h3>
            <p>Once you're satisfied, hit publish and share your new portfolio with the world.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    
  )
}
function Button({children}){
  return(
    <div>
      <button>{children}</button>
    </div>
  )
}

export default Home