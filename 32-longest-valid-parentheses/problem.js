window.PROBLEM = {
 "id": "32",
 "title": "Longest Valid Parentheses",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
