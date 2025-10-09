import React, { useRef, useState } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(""); // ✅ New state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_idxfkxe', // your service ID
        'template_z0z2ynw', // your template ID
        form.current,
        'tTCnYuSrPOjSTZFx3' // your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("✅ Email sent successfully!");
          form.current.reset(); // Clear form after sending
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("❌ Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US ?</span>
        </div>
      </div>
      <div className="right-j"></div>

      <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input
          type="email"
          name="user_email"
          placeholder="Enter your Email address"
          required
        />
        <button className="btn btn-j">Join Now</button>
      </form>

      {/* ✅ Show success or error message */}
      {statusMessage && (
        <p style={{ color: statusMessage.includes("successfully") ? "green" : "red", marginTop: "10px" }}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default Join;
