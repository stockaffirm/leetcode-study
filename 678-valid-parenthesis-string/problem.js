window.PROBLEM = {
 "id": "678",
 "title": "Valid Parenthesis String",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "A string of '(', ')' and '*' where each '*' may be '(', ')' or nothing. Can it be a balanced bracket string?",
 "idea": "Track the smallest and largest possible number of unclosed '(' (lo and hi). '(' raises both, ')' lowers both, '*' lowers lo and raises hi. If hi ever goes below 0 it fails; lo never goes below 0; at the end lo must be 0.",
 "input": "'(*))'",
 "output": "True",
 "notes": [],
 "best": "Track the smallest and largest possible number of unclosed '(' (lo and hi). '(' raises both, ')' lowers both, '*' lowers lo and raises hi. If hi ever goes below 0 it fails; lo never goes below 0; at the end lo must be 0.",
 "variants": [
  {
   "name": "Range of possible open brackets",
   "code": "class Solution:\n    def checkValidString(self, s):\n        lo = hi = 0\n        for ch in s:\n            lo += 1 if ch == '(' else -1\n            hi += 1 if ch != ')' else -1\n            if hi < 0: return False\n            lo = max(lo, 0)\n        return lo == 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track the smallest and largest possible number of unclosed '(' (lo and hi). '(' raises both, ')' lowers both, '*' lowers lo and raises hi. If hi ever goes below 0 it fails; lo never goes below 0; at the end lo must be 0.",
   "frames": []
  }
 ]
};
