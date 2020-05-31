/*
Question 5
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

Note: Your runtime complexity should be O(n).
*/

function question5(text) {
  let mycharacter = "";
  let maxlength = 0;
  for (let i = 0; i < text.length; i++) {
    let isDublicate = false;
    for (let j = 0; j < mycharacter.length; j++) {
      if (text[i] === mycharacter[j]) {
        isDublicate = true;
      }
    }

    console.log("isDublicate", isDublicate);

    if (isDublicate) {
      if (mycharacter.length > maxlength) {
        maxlength = mycharacter.length;
        mycharacter = "";
      }
    } else {
      mycharacter += text[i];
      maxlength ++
    }
  }
  return maxlength;
}

const testcase1 = question5("abcabcbb");
console.log("testcase1", testcase1);

const testcase2 = question5("bbbbb");
console.log("testcase1", testcase2);

const testcase3 = question5("pwwkew");
console.log("testcase1", testcase2);
