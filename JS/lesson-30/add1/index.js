export const addImageV2 = (url) => {
  const promise = new Promise(function (resolve, reject) {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'my photo');
    imgElem.src = url;
    document.querySelector('.page').append(imgElem);
    resolve(imgElem);
    reject(new Error('Image load is failed'));
  });
  return promise;
};

// examples

// addImageV2(
//   'https://p.b igstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
// )
//   .then((data) => {
//     const { width, height } = data;
//     console.log({ width, height });
//   })
//   .catch((error) => console.log(error)); // ==> 'Image load failed'
