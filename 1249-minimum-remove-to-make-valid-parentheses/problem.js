window.PROBLEM = {
 "id": "1249",
 "title": "Minimum Remove to Make Valid Parentheses",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
