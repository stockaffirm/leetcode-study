window.PROBLEM = {
 "id": "1750",
 "title": "Minimum Length of String After Deleting Similar Ends",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
