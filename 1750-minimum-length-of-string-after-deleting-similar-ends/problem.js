window.PROBLEM = {
 "id": "1750",
 "title": "Minimum Length of String After Deleting Similar Ends",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "While the string's first and last characters are equal and it has at least two characters, you may delete a non-empty prefix of that one repeated letter and a non-empty suffix of the same letter (they must not overlap). Return the minimum length you can reach. Example: 'aabccabba' → 3.",
 "why": "'aabccabba': strip the a's from both ends, then the b's, leaving 'cca' → 3.",
 "idea": "While the first and last characters are equal (and the pointers have not met), remove the whole run of that character from both ends. Stop when the ends differ; the answer is what is left.",
 "input": "s = \"aabccabba\"",
 "output": "3",
 "notes": [],
 "best": "While the first and last characters are equal (and the pointers have not met), remove the whole run of that character from both ends. Stop when the ends differ; the answer is what is left.",
 "variants": [
  {
   "name": "Strip equal runs from both ends",
   "code": "class Solution:\n    def minimumLength(self, s):\n        l, r = 0, len(s) - 1\n        while l < r and s[l] == s[r]:\n            c = s[l]\n            while l <= r and s[l] == c:\n                l += 1\n            while r >= l and s[r] == c:\n                r -= 1\n        return r - l + 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "While the first and last characters are equal (and the pointers have not met), remove the whole run of that character from both ends. Stop when the ends differ; the answer is what is left.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Strip the end letter from both sides",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumLength(self, s):\n        while len(s) > 1 and s[0] == s[-1]:\n            s = s.strip(s[0])\n        return len(s)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "While the ends match, strip every copy of that letter from both ends of the string.",
   "frames": [],
   "alt": true
  }
 ]
};
