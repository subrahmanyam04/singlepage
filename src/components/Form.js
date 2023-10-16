
import React from 'react';

const Corosel = () => {

// Example starter JavaScript for disabling form submissions if there are invalid fields


  return (
    <div>
         <div className='container mb-5'>
            <div className='with-shadow p-4  bg-light'>
         <p className='text-dark fs-5'>Want more About us, Our Services, and Laptops?</p>
         <p>Subscribe to get updated when new Laptop related products arrive!</p>
         <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">     
      <input type="text" class="form-control border border-2 mt-2 p-2" id="autoSizingInputGroup" placeholder="Email address...." required/>
      <div class="input-group-text border border-2 text-dark bg-danger mt-2 p-2" disabled>Subscribe</div>
    </div>
  </div>

         <p className='fs-7 mt-4 mark'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
         </div>
    </div>
  );
};

export default Corosel;
