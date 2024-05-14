const palindromes = function (str) {
  let string = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
  let palinStr = string.split("").reverse().join("");

  if (palinStr == string) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
