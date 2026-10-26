window.PROBLEM = {
 "id": "1614",
 "title": "Maximum Nesting Depth of the Parentheses",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "Return the maximum nesting depth of the brackets in a valid bracket string (other characters are ignored). Example: '(1+(2*3)+((8)/4))+1' → 3.",
 "why": "In '(1+(2*3)+((8)/4))+1' the deepest place is the 8, inside three open brackets → 3.",
 "idea": "Walk the string and keep the number of currently open brackets; the answer is the largest value it reaches.",
 "input": "s = \"(1+(2*3)+((8)/4))+1\"",
 "output": "3",
 "notes": [],
 "best": "Walk the string and keep the number of currently open brackets; the answer is the largest value it reaches.",
 "variants": [
  {
   "name": "Depth counter",
   "code": "class Solution:\n    def maxDepth(self, s):\n        depth = best = 0\n        for ch in s:\n            if ch == \"(\":\n                depth += 1\n                best = max(best, depth)\n            elif ch == \")\":\n                depth -= 1\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk the string and keep the number of currently open brackets; the answer is the largest value it reaches.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Stack of open brackets",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxDepth(self, s):\n        st = []\n        best = 0\n        for ch in s:\n            if ch == \"(\":\n                st.append(ch)\n                best = max(best, len(st))\n            elif ch == \")\":\n                st.pop()\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push '(' and pop on ')'. The deepest the stack gets is the answer.",
   "frames": [],
   "alt": true
  }
 ]
};
