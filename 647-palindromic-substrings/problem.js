window.PROBLEM = {
 "id": "647",
 "title": "Palindromic Substrings",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Count the pieces of a string that read the same backwards (each position counts separately). 'aaa' has 6.",
 "idea": "Every palindrome has a centre (a letter, or the gap between two). From each of the 2n−1 centres expand outwards while the letters match, counting each step.",
 "input": "\"abc\"",
 "output": "3",
 "notes": [],
 "best": "Every palindrome has a centre (a letter, or the gap between two). From each of the 2n−1 centres expand outwards while the letters match, counting each step.",
 "variants": [
  {
   "name": "Expand around every centre",
   "code": "class Solution:\n    def countSubstrings(self, s):\n        count = 0\n        for center in range(2 * len(s) - 1):\n            l, r = center // 2, center // 2 + center % 2\n            while l >= 0 and r < len(s) and s[l] == s[r]:\n                count += 1\n                l -= 1\n                r += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Every palindrome has a centre (a letter, or the gap between two). From each of the 2n−1 centres expand outwards while the letters match, counting each step.",
   "frames": []
  }
 ]
};
