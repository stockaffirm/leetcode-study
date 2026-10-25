window.PROBLEM = {
 "id": "1163",
 "title": "Last Substring in Lexicographical Order",
 "level": "Hard",
 "topic": "Two Pointers",
 "question": "Return the lexicographically largest substring of s. Example: 'abab' → 'bab'.",
 "why": "'abab': the largest suffix starting with the biggest letter is 'bab'.",
 "idea": "The answer is always a suffix. Keep two candidate starts i < j and compare s[i+k] with s[j+k] as k grows. When one candidate loses at k, skip every start that lies inside the matched part (jump past k positions). The survivor i is the answer start.",
 "input": "s = \"abab\"",
 "output": "\"bab\"",
 "notes": [],
 "best": "The answer is always a suffix. Keep two candidate starts i < j and compare s[i+k] with s[j+k] as k grows. When one candidate loses at k, skip every start that lies inside the matched part (jump past k positions). The survivor i is the answer start.",
 "variants": [
  {
   "name": "Two candidate starts with a match length",
   "code": "class Solution:\n    def lastSubstring(self, s):\n        n = len(s)\n        i, j, k = 0, 1, 0\n        while j + k < n:\n            if s[i + k] == s[j + k]:\n                k += 1\n            elif s[i + k] < s[j + k]:\n                i = max(i + k + 1, j)\n                j = i + 1\n                k = 0\n            else:\n                j += k + 1\n                k = 0\n        return s[i:]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The answer is always a suffix. Keep two candidate starts i < j and compare s[i+k] with s[j+k] as k grows. When one candidate loses at k, skip every start that lies inside the matched part (jump past k positions). The survivor i is the answer start.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare every suffix",
   "tag": "Brute force",
   "code": "class Solution:\n    def lastSubstring(self, s):\n        return max(s[i:] for i in range(len(s)))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Take the maximum over all suffixes.",
   "frames": [],
   "alt": true
  }
 ]
};
