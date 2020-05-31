/*
Question 4

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/

const encoded = "[";
const decoded = "]";

function question4(s) {
  const stack = [];
  let replaceString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === encoded) {
      stack.push({ index: i, x: s[i - 1] });
    } else if (s[i] === decoded) {
      const { index, x } = stack.pop();
      console.log("stack", stack)
      console.log("x", x)
      console.log("index", index)

      for (let j = 0; j < x; j++) {
          console.log('test============')
        if (index + 1 === i - 1) {
          console.log("s[i - 1]", s[i - 1])
          replaceString += s[i - 1];
          console.log("replaceString", replaceString)
        } else {
          replaceString += s.slice(index + 1, i);
          console.log("s.slice(index + 1, i - 1)", s.slice(index + 1, i))
        }
      }
    } else {
        if (stack.length < 1 && isNaN(s[i]) === true ) {
            replaceString += s[i]
        }
    }
  }
  return replaceString;
}


// Pass
// const testcase1 = question4("3[a]2[bc]");
// console.log("testcase1", testcase1);

// Nested encode?
const testcase2 = question4("3[a2[c]]")
console.log("testcase1", testcase2)
// Pass
// const testcase3 = question4("2[abc]3[cd]ef")
// console.log("testcase1", testcase3)
