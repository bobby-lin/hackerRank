/*
A variant of makingAnagrams program.
The old program has a worst case O(N^2).
*/

function main(str1, str2) {
    var a = sortLetters(str1);
    var b = sortLetters(str2);
    var anagramLen = getAnagramLen(a, b);
    console.log(a.length + b.length - (2 * anagramLen));
}

var getAnagramLen = (str1, str2) => {
  var countLettersArr1 = getCountLettersArr(str1);
  var countLettersArr2 = getCountLettersArr(str2);
  var anagramLen = 0;

  for (var i = 0; i < countLettersArr1.length; i++) {
    anagramLen += Math.min(countLettersArr1[i], countLettersArr2[i]);
  }

  return anagramLen;
}

var getCountLettersArr = (str) => {
  var lettersArr = new Array(26).fill(0);

  // Using ascii values, index of a in lettersArr = char ascii value - 97
  var ascii_a_val = 97;
  for (var i = 0; i < str.length; i++) {
    lettersArr[str.charCodeAt(i) - ascii_a_val]++;
  }
  return lettersArr;
}

var sortLetters = (str) => str.split('').sort().join('');

var randomString = function (len, bits)
{
    bits = bits || 36;
    var outStr = "", newStr;
    while (outStr.length < len)
    {
        newStr = Math.random().toString(bits).replace(/[^a-z]+/g, '');
        outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
    }
    return outStr;
};

module.exports = {main};
