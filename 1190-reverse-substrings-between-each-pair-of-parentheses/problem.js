window.PROBLEM = {
 "id": "1190",
 "title": "Reverse Substrings Between Each Pair of Parentheses",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
