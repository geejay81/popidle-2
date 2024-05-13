"use client"

import React, { useEffect, useRef } from 'react';

type PixelatedImageProps = {
  imageUrl: string;
  pixelSize: number,
  width: number,
  height: number
};

const PixelatedImage = ({ imageUrl, pixelSize, width, height }: PixelatedImageProps) => {
  const canvasRef = useRef(null);

  const pixelateImage = () => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    const context = canvas?.getContext('2d');
    const imgOriginal = new Image();
    imgOriginal.crossOrigin = "anonymous";
    imgOriginal.width = width;
    imgOriginal.height = height;

    imgOriginal.onload = () => {
      canvas!.width = width;
      canvas!.height = height;
      context!.drawImage(imgOriginal, 0, 0);

      let pixelArr = context!.getImageData(0, 0, width, height).data;

      const sample_size = pixelSize;

      for (let y = 0; y < height; y += sample_size) {
        for (let x = 0; x < width; x += sample_size) {
          let p = (x + (y * width)) * 4;
          context!.fillStyle = "rgba(" + pixelArr![p] + "," + pixelArr![p + 1] + "," + pixelArr![p + 2] + "," + pixelArr![p + 3] + ")";
          context!.fillRect(x, y, sample_size, sample_size);
        }
      }

      const imgPixelated = new Image();
      imgPixelated.src = canvas!.toDataURL("image/jpeg");
      const dimension = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
      imgPixelated.width = dimension;
      imgPixelated.height = dimension;

      context!.drawImage(imgPixelated, 0, 0);

      canvas!.style.width = '100%';
      canvas!.style.border = '1px solid black';
    }

    imgOriginal.src = imageUrl;
  }

  useEffect(pixelateImage, [imageUrl, pixelSize, height, width]);

  return (
    <canvas ref={canvasRef} />
  )
}

export default PixelatedImage;