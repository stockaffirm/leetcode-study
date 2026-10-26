window.PROBLEM = {
 "id": "1653",
 "title": "Minimum Deletions to Make String Balanced",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
