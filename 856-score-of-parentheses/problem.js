window.PROBLEM = {
 "id": "856",
 "title": "Score of Parentheses",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "Score a balanced bracket string: '()' scores 1, 'AB' scores A + B, and '(A)' scores 2 × A. Return the score. Example: '(()(()))' → 6.",
 "why": "'(()(()))': () = 1, (()) = 2, (A) = 2·A. The inner part scores 1 + 2 = 3, doubled = 6.",
 "idea": "Keep a stack of partial scores, starting with 0. On '(' push 0. On ')' pop v and add max(2·v, 1) to the new top: an empty pair '()' (v = 0) is worth 1, a wrapped group is doubled.",
 "input": "s = \"(()(()))\"",
 "output": "6",
 "notes": [],
 "best": "Keep a stack of partial scores, starting with 0. On '(' push 0. On ')' pop v and add max(2·v, 1) to the new top: an empty pair '()' (v = 0) is worth 1, a wrapped group is doubled.",
 "variants": [
  {
   "name": "Stack of scores",
   "code": "class Solution:\n    def scoreOfParentheses(self, s):\n        st = [0]\n        for ch in s:\n            if ch == \"(\":\n                st.append(0)\n            else:\n                v = st.pop()\n                st[-1] += max(2 * v, 1)\n        return st[0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack of partial scores, starting with 0. On '(' push 0. On ')' pop v and add max(2·v, 1) to the new top: an empty pair '()' (v = 0) is worth 1, a wrapped group is doubled.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Add 2^depth for every '()'",
   "tag": "Alternative",
   "code": "class Solution:\n    def scoreOfParentheses(self, s):\n        res = depth = 0\n        for i, ch in enumerate(s):\n            if ch == \"(\":\n                depth += 1\n            else:\n                depth -= 1\n                if s[i - 1] == \"(\":\n                    res += 1 << depth\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Every innermost '()' is worth 2 to the power of the number of brackets around it; add them up.",
   "frames": [],
   "alt": true
  }
 ]
};
