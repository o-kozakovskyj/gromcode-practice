const splitString = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const splitted = [];
  let start = 0;
  while (true) {
    const cut = text.slice(start, start + len);
    if (cut.length === 0) {
      break;
    }
    splitted.push(cut);
    start += len;
  }
  splitted[splitted.length - 1] =
    splitted[splitted.length - 1] +
    '.'.repeat(len - splitted[splitted.length - 1].length);
  return splitted;
};
console.log(splitString(4, 6));
