import React, { useState } from 'react';
export default function Contact() {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
  return (
    <>
        <div className="contact mt-5 mb-4">
 
 <div className="text-center pt-4">
   <h2 className="text-uppercase text-dark-emphasis mb-3 fs-1 fw-bolder">contact section</h2>
   <div className="d-flex align-items-center justify-content-center mb-3">
     <div className="line me-3 bg-dark"></div>
     <i className="fa-solid fa-star"></i>
     <div className="line ms-3 bg-dark"></div>
   </div>
   
 </div>

<div className='container pt-3'>

<form>
     
      {userName !== '' && (
        <label htmlFor="userName" className="position-relative top-0">
          Username:
        </label>
      )}
      <input
        id="userName"
        type="text"
        placeholder="Enter Username"
        name="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="form-control mb-3 border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"
      />

      
      {userAge !== '' && (
        <label htmlFor="userAge" className="position-relative top-0">
          User Age:
        </label>
      )}
      <input
        id="userAge"
        type="number"
        placeholder="Enter Age"
        name="userAge"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
        className="form-control mb-3 border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"
      />

      {userEmail !== '' && (
        <label htmlFor="userEmail" className="position-relative top-0">
          Email:
        </label>
      )}
      <input
        id="userEmail"
        type="email"
        placeholder="Enter Email"
        name="userEmail"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        className="form-control mb-3 border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"
      />

      {userPassword !== '' && (
        <label htmlFor="userPassword" className="position-relative top-0">
          Password:
        </label>
      )}
      <input
        id="userPassword"
        type="password"
        placeholder="Enter Password"
        name="userPassword"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        className="form-control mb-3 border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"
      />
       
       <button type='button' className="btn color text-white mt-4">send message</button>
    </form>

</div>
 </div>
    </>
  )
}



