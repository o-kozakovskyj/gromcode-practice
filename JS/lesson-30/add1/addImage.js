export const addImage = (url, callback1, callback2) => {
  const img = document.createElement('img');
  img.setAttribute('alt', 'User avatar');
  img.src = url;

  const pageElem = document.querySelector('.page');
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    callback1({ width, height });
  };

  const onImageLoadError = () => callback2(new Error('Image load failed'));

  img.addEventListener('load', onImageLoaded);

  img.addEventListener('error', onImageLoadError);
};
