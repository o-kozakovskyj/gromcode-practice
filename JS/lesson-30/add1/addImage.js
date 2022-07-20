export const addImage = (url, callback1) => {
  const img = document.createElement('img');
  img.setAttribute('alt', 'User avatar');
  img.src = url;

  const pageElem = document.querySelector('.page');
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    callback1(null, { width, height });
  };

  const onImageLoadError = () => callback1(new Error('Image load failed'));

  img.addEventListener('load', onImageLoaded);

  img.addEventListener('error', onImageLoadError);
};
