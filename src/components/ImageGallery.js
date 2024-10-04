// import React from 'react';

// function ImageDisplay({ images }) {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
//       {images.length > 0 ? (
//         images.map((image, index) => (
//           <div key={index} style={{ margin: '10px' }}>
//             <img src={image.url} alt={image.description} width="200" height="150" />
//             <p>{image.description}</p>
//           </div>
//         ))
//       ) : (
//         <p>No images found.</p>
//       )}
//     </div>
//   );
// }

// export default ImageDisplay;
import React from 'react';

/**
 * ImageGallery component displays a gallery of images.
 * @param {Array} images - Array of image objects to display.
 * @param {number} resolution - Selected resolution for images.
 * @param {number} brightness - Selected brightness for images.
 */
const ImageGallery = ({ images, resolution, brightness, saved, setSaved }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {images.map((image) => (
        <div key={image.id} style={{ position: 'relative' }}>
          <img
            src={image.src.medium}
            alt={image.alt}
            style={{
              width: `${resolution}px`, // Apply resolution
              height: 'auto',
              filter: `brightness(${brightness}%)`, // Apply brightness
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

