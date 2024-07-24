import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OtpVerification.css';

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const OtpVerification = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { username, email, phoneNumber } = location.state || {};

  useEffect(() => {
    let timer;
    if (otpSent) {
      timer = setTimeout(() => {
        setOtpSent(false);
        setGeneratedOtp('');
        alert('OTP has expired. Please resend OTP.');
      }, 60000); // 1 minute timer
    }
    return () => clearTimeout(timer);
  }, [otpSent]);

  const handleSendOtp = (sendTo) => {
    const otp = generateOtp();
    setGeneratedOtp(otp);
    setOtpSent(true);
    alert(`OTP sent to ${sendTo}: ${otp}`); // In real scenario, you won't show OTP in alert
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      alert('Successfully registered!');
      navigate('/');  // Redirect to home or login page
    } else {
      setOtpError('Invalid OTP');
    }
  };

  return (
    <div className="otp-verification-container">
      <form onSubmit={handleSubmit} className="otp-verification-form">
        <h2>OTP Verification</h2>
        <p>Username: {username}</p>
        {!otpSent && (
          <div className="form-group">
            <label>Send OTP to:</label>
            <select name="otpSendTo" onChange={(e) => handleSendOtp(e.target.value)} required>
              <option value="">Select</option>
              <option value={email}>Email ({email})</option>
              <option value={phoneNumber}>Phone ({phoneNumber})</option>
            </select>
            <button type="button" onClick={() => handleSendOtp(email)} className="send-otp-button">
              Send OTP
            </button>
          </div>
        )}
        {otpSent && (
          <>
            <div className="form-group">
              <label>Enter OTP:</label>
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={handleChange}
                required
              />
              {otpError && <span className="error">{otpError}</span>}
            </div>
            <button type="submit" className="verify-button">Verify OTP</button>
          </>
        )}
      </form>
    </div>
  );
};

export default OtpVerification;
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './OtpVerification.css';

// const OtpVerification = () => {
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [enteredOtp, setEnteredOtp] = useState('');
//   const [otpError, setOtpError] = useState('');
//   const [generatedOtp, setGeneratedOtp] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { username, otp: sentOtp } = location.state || {};

//   useEffect(() => {
//     if (!sentOtp) {
//       navigate('/'); // Redirect if OTP is not provided
//     } else {
//       setGeneratedOtp(sentOtp);
//       setOtpSent(true);
//     }
//   }, [sentOtp, navigate]);

//   const handleChange = (e) => {
//     setEnteredOtp(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (enteredOtp === generatedOtp) {
//       alert('Successfully logged in!');
//       navigate('/');  // Redirect to home or dashboard page
//     } else {
//       setOtpError('Invalid OTP');
//     }
//   };

//   return (
//     <div className="otp-verification-container">
//       <form onSubmit={handleSubmit} className="otp-verification-form">
//         <h2>OTP Verification</h2>
//         <p>Username: {username}</p>
//         {otpSent && (
//           <>
//             <div className="form-group">
//               <label>Enter OTP:</label>
//               <input
//                 type="text"
//                 name="otp"
//                 value={enteredOtp}
//                 onChange={handleChange}
//                 required
//               />
//               {otpError && <span className="error">{otpError}</span>}
//             </div>
//             <button type="submit" className="verify-button">Verify OTP</button>
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default OtpVerification;
