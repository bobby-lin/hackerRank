/*
Alice is taking a cryptography class and finding anagrams to be very useful.
We consider two strings to be anagrams of each other if the first string's letters
can be rearranged to form the second string.
In other words, both strings must contain the same exact letters
in the same exact frequency.
For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption
is dependent on the minimum number of character deletions required to make the
two strings anagrams. Can you help her find this number?

Given two strings,  and , that may or may not be of the same length,
determine the minimum number of character deletions required to make  and  anagrams.
Any characters can be deleted from either of the strings.

*/

function main(str1, str2) {
    var a = sortAlphabet(str1);
    var b = sortAlphabet(str2);

    var head = 0;
    var tail = b.length;
    var cur = head;
    var anagram = "";

    for (var i = 0; i < a.length; i++) {
        cur = head;

        while (cur < tail) {
            if (a.charAt(i) === b.charAt(cur)) {
                anagram += a.charAt(i);
                head = cur + 1;
                break;
            }

            cur++;
        }
    }

    var ans = (a.length - anagram.length) + (b.length - anagram.length);
    console.log(ans)
}

var sortAlphabet = (str) => str.split('').sort().join('');

module.exports = {main};
