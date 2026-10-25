window.PROBLEM = {
 "id": "1876",
 "title": "Substrings of Size Three with Distinct Characters",
 "level": "Easy",
 "topic": "Sliding Window",
 "question": "Return the number of substrings of length three that have no repeated character. Example: 'xyzzaz' → 1.",
 "why": "'xyzzaz': 'xyz' is good, 'yzz' no, 'zza' no, 'zaz' no → 1.",
 "idea": "Look at every window of three consecutive letters and count those with three different letters.",
 "input": "s = \"xyzzaz\"",
 "output": "1",
 "notes": [],
 "best": "Look at every window of three consecutive letters and count those with three different letters.",
 "variants": [
  {
   "name": "Window of three",
   "code": "class Solution:\n    def countGoodSubstrings(self, s):\n        return sum(len(set(s[i:i + 3])) == 3 for i in range(len(s) - 2))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Look at every window of three consecutive letters and count those with three different letters.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count with a loop",
   "tag": "Alternative",
   "code": "class Solution:\n    def countGoodSubstrings(self, s):\n        res = 0\n        for i in range(len(s) - 2):\n            a, b, c = s[i], s[i + 1], s[i + 2]\n            if a != b and b != c and a != c:\n                res += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Compare the three letters directly.",
   "frames": [],
   "alt": true
  }
 ]
};
