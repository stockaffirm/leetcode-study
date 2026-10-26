window.PROBLEM = {
 "id": "2697",
 "title": "Lexicographically Smallest Palindrome",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "'egcfe': pair (e,e) ok, pair (g,f) → both f → 'efcfe'.",
 "idea": "Changing letters is the only operation and we want the fewest changes and then the smallest string. For every mirrored pair keep the smaller letter on both sides.",
 "input": "s = \"egcfe\"",
 "output": "\"efcfe\"",
 "notes": [],
 "best": "Changing letters is the only operation and we want the fewest changes and then the smallest string. For every mirrored pair keep the smaller letter on both sides.",
 "variants": [
  {
   "name": "Mirror pairs take the smaller letter",
   "code": "class Solution:\n    def makeSmallestPalindrome(self, s):\n        a = list(s)\n        i, j = 0, len(a) - 1\n        while i < j:\n            a[i] = a[j] = min(a[i], a[j])\n            i += 1\n            j -= 1\n        return ''.join(a)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Changing letters is the only operation and we want the fewest changes and then the smallest string. For every mirrored pair keep the smaller letter on both sides.",
   "frames": []
  }
 ]
};
