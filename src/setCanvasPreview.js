const setCanvasPreview = (image, canvas, crop) => {
  if (!crop || !canvas || !image) {
    return;
  }

  const ctx = canvas.getContext('2d');

  // Set the canvas size to the crop size
  canvas.width = crop.width;
  canvas.height = crop.height;

  // Draw the cropped image onto the canvas
  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );
};

export default setCanvasPreview;
