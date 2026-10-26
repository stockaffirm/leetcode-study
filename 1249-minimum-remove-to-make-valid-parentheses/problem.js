window.PROBLEM = {
 "id": "1249",
 "title": "Minimum Remove to Make Valid Parentheses",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "A string contains lowercase letters and the brackets '(' and ')'. Remove the smallest number of brackets so that the brackets become correctly matched, and return the result. Several answers can exist; this solution removes unmatched ')' and unmatched '(' that are found by a stack. Example: 'lee(t(c)o)de)' → 'lee(t(c)o)de'.",
 "why": "Remove the fewest brackets from a string so that its brackets are balanced; return the result.",
 "idea": "Scan with a stack of '(' positions. A ')' with an empty stack is unmatched (remove it); at the end the '(' still on the stack are unmatched (remove them).",
 "input": "'lee(t(c)o)de)'",
 "output": "'lee(t(c)o)de'",
 "notes": [],
 "best": "Scan with a stack of '(' positions. A ')' with an empty stack is unmatched (remove it); at the end the '(' still on the stack are unmatched (remove them).",
 "variants": [
  {
   "name": "Stack of open-bracket positions",
   "code": "class Solution:\n    def minRemoveToMakeValid(self, s):\n        remove, st = set(), []\n        for i, c in enumerate(s):\n            if c == '(': st.append(i)\n            elif c == ')':\n                if st: st.pop()\n                else: remove.add(i)\n        remove |= set(st)\n        return ''.join(c for i, c in enumerate(s) if i not in remove)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Scan with a stack of '(' positions. A ')' with an empty stack is unmatched (remove it); at the end the '(' still on the stack are unmatched (remove them).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two passes",
   "tag": "Alternative",
   "code": "class Solution:\n    def minRemoveToMakeValid(self, s):\n        out, open_ = [], 0\n        for c in s:\n            if c == '(': open_ += 1\n            elif c == ')':\n                if open_ == 0: continue\n                open_ -= 1\n            out.append(c)\n        res, close = [], 0\n        for c in reversed(out):\n            if c == ')': close += 1\n            elif c == '(':\n                if close == 0: continue\n                close -= 1\n            res.append(c)\n        return ''.join(reversed(res))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Left to right drop unmatched ')' ; right to left drop unmatched '('.",
   "frames": [],
   "alt": true
  }
 ]
};
