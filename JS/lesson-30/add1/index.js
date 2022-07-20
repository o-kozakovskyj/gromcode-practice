import { addImage } from './addImage.js';

export const addImageV2 = (url) => {
  const p = new Promise(function (resolve, reject) {
    function callback(error, data) {
      if (error) {
        reject(error);
      }
      resolve(data);
    }
    addImage(url, callback);
  });
  return p;
};

addImageV2(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
)
  .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
  .catch((error) => console.log(error)); // ==> 'Image load failed'
