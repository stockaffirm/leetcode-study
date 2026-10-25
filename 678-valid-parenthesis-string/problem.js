window.PROBLEM = {
 "id": "678",
 "title": "Valid Parenthesis String",
 "level": "Medium",
 "topic": "Greedy",
 "question": "A string contains '(', ')' and '*'. Each '*' may be treated as '(' or ')' or as an empty string. Return True if some choice makes the string correctly balanced. Example: '(*))' → True; ')*(' → False.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two stacks of positions",
   "tag": "Alternative",
   "code": "class Solution:\n    def checkValidString(self, s):\n        op, star = [], []\n        for i, ch in enumerate(s):\n            if ch == '(': op.append(i)\n            elif ch == '*': star.append(i)\n            else:\n                if op: op.pop()\n                elif star: star.pop()\n                else: return False\n        while op and star:\n            if op.pop() > star.pop(): return False\n        return not op",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Match each ')' with a '(' first, else a '*'; leftover '(' must be matched by a later '*'.",
   "frames": [],
   "alt": true
  }
 ]
};
