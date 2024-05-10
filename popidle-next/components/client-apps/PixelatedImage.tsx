"use client"

import React, { useEffect, useRef } from 'react';

type PixelatedImageProps = {
  imageUrl: string;
  pixelSize: number
};

const PixelatedImage = ({ imageUrl, pixelSize }: PixelatedImageProps) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = imageRef.current || new Image();

    img.onload = () => {
      const canvasWidth = img.width;
      const canvasHeight = img.height;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      ctx?.drawImage(img!, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
      const pixelArr = ctx!.getImageData(0, 0, canvasWidth, canvasHeight).data;
      
      for (let y = 0; y < canvasHeight; y += pixelSize) {
          for (let x = 0; x < canvasWidth; x += pixelSize) {
          let p = (x + (y * canvasWidth)) * 4;
          ctx!.fillStyle = "rgba(" + pixelArr![p] + "," + pixelArr![p + 1] + "," + pixelArr![p + 2] + "," + pixelArr![p + 3] + ")";
          ctx!.fillRect(x, y, pixelSize, pixelSize);
          }
      }
    
      let img2 = document.createElement('img');
      img2.src = canvas.toDataURL("image/jpeg");
      const dimension = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
      img2.width = dimension;
      img2.height = dimension;
      img2.id = "puzzle-image"; 

      ctx!.imageSmoothingEnabled = false;
      ctx?.drawImage(canvas, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);

      img.src = canvas.toDataURL();
    };

    img.src = imageUrl;
  }, [imageUrl, pixelSize]);

  return (
    <div id='canvasWrapper'>
      {/* <canvas ref={canvasRef} /> */}
      <img ref={imageRef} src={imageUrl} alt="" crossOrigin="anonymous" />
    </div>
  );
};

export default PixelatedImage;