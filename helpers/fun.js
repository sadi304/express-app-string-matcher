module.exports = function(strA, strB) {
  let newStrA = '';

  for(let character of strB) {
    if(strA.includes(character)) {
      newStrA += character;
    }
  }

  if(newStrA === strB) return true;
  return false;
}