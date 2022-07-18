export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'my photo');
  imgElem.src = imgSrc;
  document.querySelector('.page').append(imgElem);
 
  const onImageLoaded = () => {
    callback(null,imgElem);
  }
  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'))
  
};

// callback function
const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
const imgEl = 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
addImage(imgEl,onImageLoaded);
