window.PROBLEM = {
 "id": "32",
 "title": "Longest Valid Parentheses",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "Given a string of '(' and ')', return the length of the longest stretch (consecutive characters) that is a correctly balanced bracket string. Example: ')()())' → 4.",
 "why": "Find the length of the longest stretch of a bracket string that is correctly balanced.",
 "idea": "Keep a stack of indices, starting with −1 as a base. On '(' push its index; on ')' pop — if the stack becomes empty push the current index as the new base, otherwise the stretch from the new top to here is balanced.",
 "input": "')()())'",
 "output": "4",
 "notes": [],
 "best": "Keep a stack of indices, starting with −1 as a base. On '(' push its index; on ')' pop — if the stack becomes empty push the current index as the new base, otherwise the stretch from the new top to here is balanced.",
 "variants": [
  {
   "name": "Stack of indices",
   "code": "class Solution:\n    def longestValidParentheses(self, s):\n        st = [-1]\n        best = 0\n        for i, ch in enumerate(s):\n            if ch == '(':\n                st.append(i)\n            else:\n                st.pop()\n                if not st: st.append(i)\n                else: best = max(best, i - st[-1])\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack of indices, starting with −1 as a base. On '(' push its index; on ')' pop — if the stack becomes empty push the current index as the new base, otherwise the stretch from the new top to here is balanced.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two scans with counters",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestValidParentheses(self, s):\n        best = 0\n        for seq, bad in ((s, ')'), (s[::-1], '(')):\n            op = cl = 0\n            for ch in seq:\n                if ch == bad: cl += 1\n                else: op += 1\n                if op == cl: best = max(best, 2 * op)\n                elif cl > op: op = cl = 0\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan left→right and right→left counting '(' and ')'; whenever they are equal the stretch is valid, and reset when one side overtakes.",
   "frames": [],
   "alt": true
  }
 ]
};
