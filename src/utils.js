// utils.js
export const getCroppedImg = (imageSrc, croppedAreaPixels) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      
      image.onload = () => {
        const { x, y, width, height } = croppedAreaPixels;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(
          image,
          x,
          y,
          width,
          height,
          0,
          0,
          width,
          height
        );
  
        // Make image circular
        const radius = Math.min(width, height) / 2;
        const cx = width / 2;
        const cy = height / 2;
        ctx.globalCompositeOperation = 'destination-in';
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
  
        canvas.toBlob(blob => {
          if (blob) {
            resolve(URL.createObjectURL(blob));
          } else {
            reject(new Error('Failed to create cropped image blob'));
          }
        }, 'image/jpeg');
      };
  
      image.onerror = () => {
        reject(new Error('Failed to load image'));
      };
    });
  };
  