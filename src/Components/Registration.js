// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Registration.css';

// // Function to generate a unique username
// const generateUserId = (firstName, lastName) => {
//   const lowerFirstName = firstName.toLowerCase();
//   const lowerLastName = lastName.toLowerCase();
//   const uniqueSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
//   return `${lowerFirstName}.${lowerLastName}${uniqueSuffix}`;
// };

// // Function to generate a 6-digit OTP
// const generateOtp = () => {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// };

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '+91',
//     dob: '',
//     gender: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [otpMethod, setOtpMethod] = useState('phone');
//   const [otp, setOtp] = useState('');
//   const [generatedOtp, setGeneratedOtp] = useState('');
//   const [userId, setUserId] = useState('');
//   const [showOtp, setShowOtp] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSendOtp = (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors

//     // Validate form inputs
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     if (formData.password.length < 8) {
//       setError('Password is too weak');
//       return;
//     }

//     // Generate user ID and OTP
//     const generatedUserId = generateUserId(formData.firstName, formData.lastName);
//     const otp = generateOtp();

//     setUserId(generatedUserId);
//     setGeneratedOtp(otp);
//     setOtp('');
//     setShowOtp(true);

//     // Store the user details (using local storage for demo purposes)
//     localStorage.setItem('userId', generatedUserId);
//     localStorage.setItem('password', formData.password);

//     alert(`OTP sent to ${otpMethod === 'phone' ? formData.phone : formData.email}: ${otp}`);
//   };

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors

//     // Verify OTP
//     if (otp === generatedOtp) {
//       alert('Registration successful!');
//       navigate('/login', {
//         state: { userId, password: formData.password }
//       });
//     } else {
//       setError('Invalid OTP');
//     }
//   };

//   return (
//     <div className="registration-container">
//       <form onSubmit={showOtp ? handleVerifyOtp : handleSendOtp} className="registration-form">
//         <h2>Register</h2>
//         {!showOtp ? (
//           <>
//             <div className="form-group">
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//                 style={{ textTransform: 'uppercase' }}
//               />
//             </div>
//             <div className="form-group">
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Phone Number:</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 pattern="^\+91\d{10}$"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Date of Birth:</label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Gender:</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Create Password:</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Confirm Password:</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Send OTP to:</label>
//               <select value={otpMethod} onChange={(e) => setOtpMethod(e.target.value)}>
//                 <option value="phone">Phone</option>
//                 <option value="email">Email</option>
//               </select>
//             </div>
//             {error && <span className="error">{error}</span>}
//             <button type="submit" className="send-otp-button">Send OTP</button>
//           </>
//         ) : (
//           <>
//             <div className="form-group">
//               <label>Enter OTP:</label>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 required
//               />
//               {error && <span className="error">{error}</span>}
//             </div>
//             <button type="submit" className="verify-button">Verify OTP</button>
//           </>
//         )}
//         {userId && !showOtp && (
//           <div className="username-info">Your Username: {userId}</div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Registration;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

// Function to generate a unique username
const generateUserId = (firstName, lastName) => {
  const lowerFirstName = firstName.toLowerCase();
  const lowerLastName = lastName.toLowerCase();
  const uniqueSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${lowerFirstName}.${lowerLastName}${uniqueSuffix}`;
};

// Function to generate a 6-digit OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+91',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });
  const [otpMethod, setOtpMethod] = useState('phone');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Validate form inputs
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      setError('Password is too weak');
      return;
    }

    // Generate OTP
    const otp = generateOtp();
    setGeneratedOtp(otp);
    setOtp('');
    setShowOtp(true);

    // Store the user details temporarily
    localStorage.setItem('tempUser', JSON.stringify(formData));

    alert(`OTP sent to ${otpMethod === 'phone' ? formData.phone : formData.email}: ${otp}`);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Verify OTP
    if (otp === generatedOtp) {
      // Generate user ID
      const generatedUserId = generateUserId(formData.firstName, formData.lastName);

      // Store the user details permanently
      localStorage.setItem('userId', generatedUserId);
      localStorage.setItem('password', formData.password);

      alert('Registration successful!');

      // Redirect to login page
      navigate('/login', {
        state: { userId: generatedUserId, password: formData.password }
      });
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <div className="registration-container">
      <form onSubmit={showOtp ? handleVerifyOtp : handleSendOtp} className="registration-form">
        <h2>Register</h2>
        {!showOtp ? (
          <>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ textTransform: 'uppercase' }}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="^\+91\d{10}$"
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Create Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Send OTP to:</label>
              <select value={otpMethod} onChange={(e) => setOtpMethod(e.target.value)}>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>
            {error && <span className="error">{error}</span>}
            <button type="submit" className="send-otp-button">Send OTP</button>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Enter OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              {error && <span className="error">{error}</span>}
            </div>
            <button type="submit" className="verify-button">Verify OTP</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Registration;
