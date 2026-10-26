window.PROBLEM = {
 "id": "1653",
 "title": "Minimum Deletions to Make String Balanced",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Delete the fewest characters from a string of a's and b's so that no 'b' comes before an 'a'. Return that count. Example: 'aababbab' → 2.",
 "why": "'aababbab' → delete two characters to get 'aaabbb'-style order → 2.",
 "idea": "A string is balanced when no 'b' comes before an 'a'. Scan left to right keeping the number of 'b's seen and the best deletion count: at an 'a' either delete it (cost+1) or delete all earlier 'b's (cost = count of b); keep the smaller.",
 "input": "s = \"aababbab\"",
 "output": "2",
 "notes": [],
 "best": "A string is balanced when no 'b' comes before an 'a'. Scan left to right keeping the number of 'b's seen and the best deletion count: at an 'a' either delete it (cost+1) or delete all earlier 'b's (cost = count of b); keep the smaller.",
 "variants": [
  {
   "name": "One pass: delete an 'a' or a 'b' at each 'a'",
   "code": "class Solution:\n    def minimumDeletions(self, s):\n        res = bees = 0\n        for c in s:\n            if c == 'b':\n                bees += 1\n            else:\n                res = min(res + 1, bees)\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A string is balanced when no 'b' comes before an 'a'. Scan left to right keeping the number of 'b's seen and the best deletion count: at an 'a' either delete it (cost+1) or delete all earlier 'b's (cost = count of b); keep the smaller.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix b's and suffix a's",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumDeletions(self, s):\n        a_right = s.count('a')\n        b_left = 0\n        best = a_right\n        for c in s:\n            if c == 'a':\n                a_right -= 1\n            else:\n                b_left += 1\n            best = min(best, b_left + a_right)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each split delete the b's on the left and the a's on the right.",
   "frames": [],
   "alt": true
  }
 ]
};
