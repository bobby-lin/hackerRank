var makingAnagrams = require('./makingAnagrams');
var makingAnagramsV2 = require('./makingAnagramsV2');

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

makingAnagrams.main("zcdez", "abzc"); // anagram = "cz", ans = 5 - 2 + 4 -2 = 5
makingAnagramsV2.main("zcdez", "abzc"); // anagram = "cz", ans = 5 - 2 + 4 -2 = 5

var test1 = randomString(1000000);
var test2 = randomString(1000000);

var start_time = Date.now('milli');
makingAnagrams.main(test1, test2);
var end_time = Date.now('milli');
console.log("Call to makingAnagrams.main() took " + (end_time - start_time) + " milliseconds.");

var start_time = Date.now('milli');
makingAnagramsV2.main(test1, test2);
var end_time = Date.now('milli');
console.log("Call to makingAnagramsV2.main() took " + (end_time - start_time) + " milliseconds.");

// When N = 1 million, then the runtime magnitude difference is about 18 times.
// >> Call to makingAnagrams.main() took 4598 millisecond
// >> Call to makingAnagramsV2.main() took 263 millisecon
