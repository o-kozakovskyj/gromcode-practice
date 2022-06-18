const splitText = (text, symbolsNumber = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const cutted = [];
  let startPosition = 0;
  while (true) {
    const cut = text.slice(startPosition, symbolsNumber + startPosition);
    if (cut.length === 0) {
      break;
    }
    cutted.push(cut[0].toUpperCase() + cut.slice(1));
    startPosition += symbolsNumber;
  }
  return cutted.join('\n');
};
console.log(splitText('rtrtryurriiejkdsjndkdldlds', 5));
