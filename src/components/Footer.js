
import React from 'react';

const Footer = () => {
 

  return (
    <div>

  <footer class="footer p-3 bar">
    
    <div class="row text-center">

    <div class="col-md-3">
        <h4>Follow Us</h4>
        <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This content is a little bit longer.</p>

        <div class="social-links  mt-2 mb-2 ">
          
          <a href="#" class="link-primary link-underline link-underline-opacity-0 link-underline-opacity-75-hover"><img src="./assets/images/fb.png" height="30px" alt="" /></a>
          <a href="#" class="link-danger link-underline link-underline-opacity-0 link-underline-opacity-75-hover"><img src="./assets/images/insta.png" height="30px" alt="" /></a>
          <a href="#" class="link-success link-underline link-underline-opacity-0 link-underline-opacity-75-hover"><img src="./assets/images/whatsapp.png" height="30px" alt="" /></a>
          <a href="#" class="link-primary link-underline link-underline-opacity-0 link-underline-opacity-75-hover"><img src="./assets/images/twiter.png" height="30px" alt="" /></a>
        
      </div>
    </div>
    
    {/* <div class="col-md-1">
       <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This content is a little bit longer.</p>
      </div> */}
      <div class="col-md-3">
        <h4>Company</h4>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Selling</p>
        <p>Customer Services</p>
      </div>
      <div class="col-md-3">
        <h4>Services</h4>
        <p>Products</p>
        <p>Selling</p>
        <p>Customer Services</p>
        <p>Privacy&Policies</p>
        
      </div>
      <div class="col-md-3">
    <img src='./assets/images/5-removebg-preview.png' height="80px" />
    <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This content is a little bit longer.</p>

    </div>
    </div>
    <hr/>
    <div class="row ms-1 mt-3">
      <div class="col-md-12 text-center">
        <p className='text-primary'>        &copy; 2023 Your Company. All rights reserved.This content is a little bit longer.</p>
      </div>
    </div> 
      
  </footer>
    </div>
  );
};

export default Footer;
