// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Navbar = ({ setSearch }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   return (
//     <>
//       <div className="nav mt-3">
//         <div
//           className="button btn btn-outline-warning mx-3"
//           onClick={() => {
//             setSearch("nature");
//             navigate("/");
//           }}
//         >
//           Nature
//         </div>
//         <div
//           className="button btn btn-outline-primary mx-3"
//           onClick={() => {
//             setSearch("travel");
//             navigate("/");
//           }}
//         >
//           Travel
//         </div>
//         <div
//           className="button btn btn-outline-info mx-3"
//           onClick={() => {
//             setSearch("city");
//             navigate("/");
//           }}
//         >
//           City
//         </div>
//         <div
//           className="button btn btn-outline-secondary mx-3"
//           onClick={() => {
//             setSearch("car");
//             navigate("/");
//           }}
//         >
//           Car
//         </div>
//         <div
//           className="button btn btn-outline-warning mx-3"
//           onClick={() => {
//             setSearch("fashion");
//             navigate("/");
//           }}
//         >
//           Fashion
//         </div>
//         <div
//           className="button btn btn-outline-light mx-3"
//           onClick={() => {
//             setSearch("animals");
//             navigate("/");
//           }}
//         >
//           Animals
//         </div>
//         <div
//           className="button btn btn-outline-dark text-light mx-3"
//           onClick={() => {
//             setSearch("technology");
//             navigate("/");
//           }}
//         >
//           Technology
//         </div>
//         <div
//           className="button btn btn-outline-warning mx-3"
//           onClick={() => {
//             setSearch("finance");
//             navigate("/");
//           }}
//         >
//           Business & Finance
//         </div>
//         <div
//           className="button btn btn-outline-primary mx-3"
//           onClick={() => {
//             setSearch("tokyo");
//             navigate("/");
//           }}
//         >
//           Tokyo
//         </div>
//         <div
//           className="button btn btn-outline-info mx-3"
//           onClick={() => {
//             setSearch("dubai");
//             navigate("/");
//           }}
//         >
//           Dubai
//         </div>

//         {location.pathname === "/saved" ? (
//           <div
//             className="button btn btn-warning mx-3"
//             onClick={() => navigate("/")}
//           >
//             Home
//           </div>
//         ) : (
//           <div
//             className="button btn btn-warning mx-3"
//             onClick={() => navigate("/saved")}
//           >
//             Saved
//           </div>
//         )}
//       </div>

//       <div
//         className="container my-4"
//         style={{
//           width: "780px",
//         }}
//       >
//         {location.pathname === "/" && (
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control bg-dark text-light"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech recognition not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setError('');
    };

    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const spokenQuery = event.results[0][0].transcript;
      setSearch(spokenQuery); // Set the spoken query
      setIsListening(false);
      navigate("/"); // Navigate to the home page after searching
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <>
      <div className="nav mt-3">
        <div className="button btn btn-outline-warning mx-3" onClick={() => { setSearch("nature"); navigate("/"); }}>Nature</div>
        <div className="button btn btn-outline-primary mx-3" onClick={() => { setSearch("travel"); navigate("/"); }}>Travel</div>
        <div className="button btn btn-outline-info mx-3" onClick={() => { setSearch("city"); navigate("/"); }}>City</div>
        <div className="button btn btn-outline-secondary mx-3" onClick={() => { setSearch("car"); navigate("/"); }}>Car</div>
        <div className="button btn btn-outline-warning mx-3" onClick={() => { setSearch("fashion"); navigate("/"); }}>Fashion</div>
        <div className="button btn btn-outline-light mx-3" onClick={() => { setSearch("animals"); navigate("/"); }}>Animals</div>
        <div className="button btn btn-outline-dark text-light mx-3" onClick={() => { setSearch("technology"); navigate("/"); }}>Technology</div>
        <div className="button btn btn-outline-warning mx-3" onClick={() => { setSearch("finance"); navigate("/"); }}>Business & Finance</div>
        <div className="button btn btn-outline-primary mx-3" onClick={() => { setSearch("tokyo"); navigate("/"); }}>Tokyo</div>
        <div className="button btn btn-outline-info mx-3" onClick={() => { setSearch("dubai"); navigate("/"); }}>Dubai</div>

        {location.pathname === "/saved" ? (
          <div className="button btn btn-warning mx-3" onClick={() => navigate("/")}>Home</div>
        ) : (
          <div className="button btn btn-warning mx-3" onClick={() => navigate("/saved")}>Saved</div>
        )}
      </div>

      <div className="container my-4" style={{ width: "780px" }}>
        {location.pathname === "/" && (
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-dark text-light"
              placeholder="Type your search query"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success mt-2" onClick={handleVoiceSearch} disabled={isListening}>
              {isListening ? 'Listening...' : 'Speak Search'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

