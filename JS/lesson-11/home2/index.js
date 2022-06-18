const countOccurrences = (text = '', subtext) => {
  if (subtext.length === 0) {
    return null;
  }
  const startLength = text.length;
  const endLength = text.split(subtext).join('').length;
  return (startLength - endLength) / subtext.length;
};
console.log(countOccurrences( ,''));
