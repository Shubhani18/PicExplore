// import React from "react";
// import Loader from "./Loader";
//  import { ToastContainer, toast,Bounce } from "react-toastify";
//  import "react-toastify/dist/ReactToastify.css";

// const Home = ({ images, loader, setSaved, saved }) => {
//   const saveImage = (img) => {
//     let flag = true;

//     if (saved !== null && saved.length > 0) {
//       for (let i = 0; i < saved.length; i++) {
//         if (saved[i].id === img.id) {
//           flag = false;
//           //react-toastify
//           // console.log("Image is alredy exist");

//           toast.info("Image alredy saved", {
//             position: "top-right",
//             autoClose: 1500,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//             transition: Bounce,
//           });
//           break;
//         }
//       }
//     }
//     if (flag) {
//       setSaved([...saved, img]);
//       // console.log("Image Saved");
//       toast.success("Image Saved", {
//         position: "top-right",
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         transition: Bounce,
//       });
//     }
//   };
//   return (
//     <>
//     <ToastContainer />
//       <div className="container-fluid text-center" id="top">
//         {loader ? (
//           <Loader />
//         ) : (
//           <>
//             <div className="flex">
//               {images.map((image) => (
//                 <div
//                   key={image.id}
//                   className="items"
//                   onClick={() => saveImage(image)}
//                 >
//                   <img src={image.src.medium} alt={image.photographer} />
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {images.length !==0 && (
//           <a href="#top" className="btn btn-warning my-5">
//             Back To Top
//           </a>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;
import React from "react";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ 
  images, 
  loader, 
  setSaved, 
  saved, 
  resolution, 
  brightness, 
  setResolution, 
  setBrightness, 
  borderColor, 
  setBorderColor, 
  borderWidth, 
  setBorderWidth 
}) => {
  const saveImage = (img) => {
    let flag = true;

    if (saved !== null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false;
          toast.info("Image already saved", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          break;
        }
      }
    }
    
    if (flag) {
      setSaved([...saved, img]);
      toast.success("Image Saved", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid text-center" id="top">
        {/* Controls for Resolution, Brightness, and Border */}
        <div style={{ padding: '20px' }}>
          <div>
            <label>
              Resolution:
              <input
                type="range"
                min="100"
                max="800"
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
              />
            </label>
            <span>{resolution}px</span>
          </div>

          <div>
            <label>
              Brightness:
              <input
                type="range"
                min="0"
                max="200"
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
              />
            </label>
            <span>{brightness}%</span>
          </div>

          <div>
            <label>
              Border Color:
              <input
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Border Width:
              <input
                type="number"
                min="0"
                value={borderWidth}
                onChange={(e) => setBorderWidth(e.target.value)}
              />
              px
            </label>
          </div>
        </div>

        {loader ? (
          <Loader />
        ) : (
          <div className="flex">
            {images.map((image) => (
              <div
                key={image.id}
                className="items"
                onClick={() => saveImage(image)}
              >
                <img
                  src={image.src.medium}
                  alt={image.photographer}
                  style={{
                    width: `${resolution}px`, // Set width based on resolution
                    height: 'auto',
                    filter: `brightness(${brightness}%)`, // Apply brightness filter
                    border: `${borderWidth}px solid ${borderColor}`, // Apply border
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {images.length !== 0 && (
          <a href="#top" className="btn btn-warning my-5">
            Back To Top
          </a>
        )}
      </div>
    </>
  );
};

export default Home;

