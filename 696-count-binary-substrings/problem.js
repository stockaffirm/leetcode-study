window.PROBLEM = {
 "id": "696",
 "title": "Count Binary Substrings",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Count the non-empty substrings of a binary string that have the same number of 0s and 1s with all the 0s together and all the 1s together (so '0011' and '01' count, '0101' does not). The same substring in different places counts every time. Example: '00110011' → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Expand around every boundary",
   "tag": "Brute force",
   "code": "class Solution:\n    def countBinarySubstrings(self, s):\n        res = 0\n        for i in range(len(s) - 1):\n            if s[i] != s[i + 1]:\n                l, r = i, i + 1\n                while l >= 0 and r < len(s) and s[l] == s[i] and s[r] == s[i + 1]:\n                    res += 1\n                    l -= 1\n                    r += 1\n        return res",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "At every place where the character changes, grow outwards while both sides keep their character.",
   "frames": [],
   "alt": true
  }
 ]
};
