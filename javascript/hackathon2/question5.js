/*
Question 5
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

function question5(s, p) {
  let caseAnagrams = {};
  const arrString = [];
  for (let i = 0; i < p.length; i++) {
    if (caseAnagrams[p[i]]) {
      caseAnagrams[p[i]] = caseAnagrams[p[i]] + 1;
    } else {
      caseAnagrams[p[i]] = 1;
    }
  }
  console.log("caseAnagrams", caseAnagrams);
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    let characterChecked = {};
    for (let j = i; j < i + p.length; j++) {
      console.log("caseAnagrams[s[j]]", caseAnagrams[s[j]]);
      console.log("characterChecked[s[j]", characterChecked[s[j]]);
      if (caseAnagrams[s[j]] && characterChecked[s[j]] !== caseAnagrams[s[j]]) {
        // Save character checked
        if (characterChecked[s[i]]) {
          characterChecked[s[i]] = characterChecked[s[i]] + 1;
        } else {
          characterChecked[s[i]] = s[i];
        }
        count++;
      }
    }
    if (count === p.length) {
      arrString.push(i);
    }
  }
  // console.log("caseAnagrams", arrString)
  return arrString;
}
// Pass
const testcase1 = question5("cbaebabacd", "abc");
console.log("testcase1", testcase1);
// Pass
const testcase2 = question5("abab", "ab");
console.log("testcase2", testcase2);

// Not pass
const testcase3 = question5("baa", "aa");
console.log("testcase3", testcase3);
