import React from 'react';

function SingUp() {
    return ( 
      <div className="container mt-5 ">
     <div className="row">
       <div className="col-6 ml-5"  >
        <img src= "media/images/signup.png" />
       </div>
       <div className="col-6 p-5 mt-5 ml-5" style={{ textAlign:"center" }}>
          <div >
            <h1>Signup now</h1>
            <p className='text-muted'>Or track your existing application.</p>
           <form  >
            <label for="mobile number">mobile number:</label><br></br>
            <input type="number" placeholder=''></input> <br></br>
            <p className='text-muted mt-3'>You will receive an OTP on your number</p>
            <button type="submit" style={{color:"#fff" , backgroundColor:"#387ed1"}}>Continue</button>
           </form>
          </div>
          <div className="mt-3">
            <a href="" style={{textDecoration:"none"}}>Want to open an NRI account?</a>
          </div>
        </div>
      </div>
      <div className='mt-5'> 
        <p className=" text-muted" style={{fontSize:".90rem", textAlign:"center"}}>I authorise Zerodha to contact me even if my number is registered on DND.I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p>
        <p className='text-muted'style={{fontSize:".90rem", textAlign:"center"}} >Please visit <a href='' style={{textDecoration:"none"}}>this article </a> to know more.</p>
        <p className='text-muted'style={{fontSize:".90rem", textAlign:"center"}} >If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href='' style={{textDecoration:"none"}}>offline forms. </a> For help, <a href=""  style={{textDecoration:"none"}}>click here.</a></p>
      </div>
    </div>
     );
}

export default SingUp;