window.PROBLEM = {
 "id": "3125",
 "title": "Maximum Number That Makes Result of Bitwise AND Zero",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=7 (111): AND of 7,6,5,4 is still 4, but adding 3 (011) clears the top bit → largest x is 3.",
 "idea": "The AND of n, n−1, …, x only becomes 0 once the highest set bit of n has been cleared, i.e. when the sequence reaches the number just below that power of two. So the answer is 2^(bit_length−1) − 1.",
 "input": "n = 7",
 "output": "3",
 "notes": [],
 "best": "The AND of n, n−1, …, x only becomes 0 once the highest set bit of n has been cleared, i.e. when the sequence reaches the number just below that power of two. So the answer is 2^(bit_length−1) − 1.",
 "variants": [
  {
   "name": "Just below the highest power of two",
   "code": "class Solution:\n    def maxNumber(self, n):\n        return (1 << (n.bit_length() - 1)) - 1",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "The AND of n, n−1, …, x only becomes 0 once the highest set bit of n has been cleared, i.e. when the sequence reaches the number just below that power of two. So the answer is 2^(bit_length−1) − 1.",
   "frames": []
  }
 ]
};
