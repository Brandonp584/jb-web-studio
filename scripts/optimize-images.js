import imagemin from "imagemin";
import webp from "imagemin-webp";
import avif from "imagemin-avif";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";

(async () => {
  await imagemin(["assets/images/*.{jpg,jpeg,png}"], {
    destination: "dist/assets/images",
    plugins: [
      webp({ quality: 80 }),
      avif({ quality: 50 }),
      mozjpeg({ quality: 75 }),
      pngquant({ quality: [0.6, 0.8] })
    ]
  });
  console.log("Images optimized.");
})();
