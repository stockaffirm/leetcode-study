window.PROBLEM = {
 "id": "1190",
 "title": "Reverse Substrings Between Each Pair of Parentheses",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "A string has lowercase letters and balanced brackets. Reverse the text inside every pair of brackets, starting from the innermost, and remove the brackets. Example: '(u(love)i)' → 'iloveu'.",
 "why": "'(u(love)i)': inner 'love' → 'evol', then 'uevoli' reversed → 'iloveu'.",
 "idea": "Keep a stack of lists. '(' starts a new list; letters go on the current list; ')' pops the list, reverses it and appends it to the list below.",
 "input": "s = \"(u(love)i)\"",
 "output": "\"iloveu\"",
 "notes": [],
 "best": "Keep a stack of lists. '(' starts a new list; letters go on the current list; ')' pops the list, reverses it and appends it to the list below.",
 "variants": [
  {
   "name": "Stack of partial strings",
   "code": "class Solution:\n    def reverseParentheses(self, s):\n        st = [[]]\n        for c in s:\n            if c == '(':\n                st.append([])\n            elif c == ')':\n                t = st.pop()\n                st[-1].extend(reversed(t))\n            else:\n                st[-1].append(c)\n        return ''.join(st[0])",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Keep a stack of lists. '(' starts a new list; letters go on the current list; ')' pops the list, reverses it and appends it to the list below.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Teleport through matching brackets",
   "tag": "Optimal",
   "code": "class Solution:\n    def reverseParentheses(self, s):\n        n = len(s)\n        pair = [0] * n\n        st = []\n        for i, c in enumerate(s):\n            if c == '(':\n                st.append(i)\n            elif c == ')':\n                j = st.pop()\n                pair[i], pair[j] = j, i\n        res = []\n        i, d = 0, 1\n        while i < n:\n            if s[i] in '()':\n                i = pair[i]\n                d = -d\n            else:\n                res.append(s[i])\n            i += d\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Match the brackets first. Walking the string, hitting a bracket jumps to its partner and flips direction, so each letter is visited once.",
   "frames": [],
   "alt": true
  }
 ]
};
