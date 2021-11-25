
import React from 'react';
import "./Form.css"
import img from "../../logos/Group 1329.png"
const Form = () => {
  const 
    return (
      <>
           <img src={img} alt="" className="img-size" />
       <div className="row form">
    
         <div className="col-lg-8 col-md-10 col-sm-12 col-12 register-form">
         
           <div className="row">
           <h4>Register as a volunteer</h4>
             <div className="col-lg-12">
             <input type="text" name="" id="" className="input-form" placeholder="Full Name"/><br />
             <input type="email" name="" id="" className="input-form" placeholder="Username Or Email"/><br />
             <input type="text" name="" id="" className="input-form" placeholder="Date"/><br />
             <input type="text" name="" id="" className="input-form" placeholder="Description"/><br />
             <input type="text" name="" id="" className="input-form" placeholder="Organize books at the library"/><br />
             <input type="submit" className="inputform" value="Regsitration" />
             </div>
           </div>
         </div>
       </div>
       </>
    );
};

export default Form;