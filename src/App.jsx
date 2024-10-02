
// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import axios from "axios";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Saved from "./components/Saved";
// import ImageSearchByVoice from './components/ImageSearchByVoice';

// const App = () => {
//   const [images, setImages] = useState([]);
//   const [search, setSearch] = useState("nature");
//   const [loader, setLoader] = useState(true);
//   const [saved, setSaved] = useState([]);

//   const API_KEY = "32RbjC9489RT7tkziFOgH7wbZStsOVRHrO5zPRQJIDuhrndl03Opu1DE";

//   useEffect(() => {
//     const fetchImage = async () => {
//       setLoader(true); // Show loader before fetching
//       try {
//         const res = await axios.get(
//           `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
//           {
//             headers: {
//               Authorization: API_KEY,
//             },
//           }
//         );
//         setImages(res.data.photos);
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       } finally {
//         setLoader(false); // Hide loader after fetching
//       }
//     };

//     const data = JSON.parse(localStorage.getItem("Images"));
//     if (data) {
//       setSaved(data);
//     }

//     fetchImage();
//   }, [search]);

//   useEffect(() => {
//     if (saved.length !== 0) {
//       const json = JSON.stringify(saved);
//       localStorage.setItem("Images", json);
//     }
//   }, [saved]);

//   return (
//     <>
//       <Router>
//         <Navbar setSearch={setSearch} />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 images={images}
//                 loader={loader}
//                 saved={saved}
//                 setSaved={setSaved}
//               />
//             }
//           />
//           <Route
//             path="/saved"
//             element={<Saved saved={saved} loader={loader} />}
//           />
//         </Routes>
//       </Router>
//       <ImageSearchByVoice setSearch={setSearch} />
//     </>
//   );
// };

// export default App; 
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import ImageSearchByVoice from './components/ImageSearchByVoice';

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);
  const [resolution, setResolution] = useState(200); // Default resolution
  const [brightness, setBrightness] = useState(100); // Default brightness
  const [borderColor, setBorderColor] = useState("#000000"); // Default border color
  const [borderWidth, setBorderWidth] = useState(2); // Default border width

  const API_KEY = "32RbjC9489RT7tkziFOgH7wbZStsOVRHrO5zPRQJIDuhrndl03Opu1DE";

  useEffect(() => {
    const fetchImage = async () => {
      setLoader(true); // Show loader before fetching
      try {
        const res = await axios.get(
          `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        setImages(res.data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoader(false); // Hide loader after fetching
      }
    };

    const data = JSON.parse(localStorage.getItem("Images"));
    if (data) {
      setSaved(data);
    }

    fetchImage();
  }, [search]);

  useEffect(() => {
    if (saved.length !== 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("Images", json);
    }
  }, [saved]);

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                loader={loader}
                saved={saved}
                setSaved={setSaved}
                resolution={resolution} // Pass resolution prop
                brightness={brightness} // Pass brightness prop
                setResolution={setResolution} // Pass setResolution function
                setBrightness={setBrightness} // Pass setBrightness function
                borderColor={borderColor} // Pass border color
                setBorderColor={setBorderColor} // Pass setBorderColor function
                borderWidth={borderWidth} // Pass border width
                setBorderWidth={setBorderWidth} // Pass setBorderWidth function
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved saved={saved} loader={loader} />}
          />
        </Routes>
      </Router>
      <ImageSearchByVoice setSearch={setSearch} />
    </>
  );
};

export default App;

            



