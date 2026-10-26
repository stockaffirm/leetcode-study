window.PROBLEM = {
 "id": "696",
 "title": "Count Binary Substrings",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'00110011': the runs are 2,2,2,2. Neighbouring runs of lengths a and b give min(a,b) valid pieces: 2+2+2 = 6.",
 "idea": "Group the string into runs of equal characters. Two touching runs of lengths a and b contain exactly min(a, b) substrings with equal 0s and 1s, so add that for every neighbouring pair.",
 "input": "s = \"00110011\"",
 "output": "6",
 "notes": [],
 "best": "Group the string into runs of equal characters. Two touching runs of lengths a and b contain exactly min(a, b) substrings with equal 0s and 1s, so add that for every neighbouring pair.",
 "variants": [
  {
   "name": "Run lengths of equal characters",
   "code": "class Solution:\n    def countBinarySubstrings(self, s):\n        prev, cur, res = 0, 1, 0\n        for i in range(1, len(s)):\n            if s[i] == s[i - 1]:\n                cur += 1\n            else:\n                res += min(prev, cur)\n                prev, cur = cur, 1\n        return res + min(prev, cur)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Group the string into runs of equal characters. Two touching runs of lengths a and b contain exactly min(a, b) substrings with equal 0s and 1s, so add that for every neighbouring pair.",
   "frames": []
  }
 ]
};
