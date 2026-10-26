window.PROBLEM = {
 "id": "856",
 "title": "Score of Parentheses",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
