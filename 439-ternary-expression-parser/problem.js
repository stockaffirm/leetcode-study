window.PROBLEM = {
 "id": "439",
 "title": "Ternary Expression Parser",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'F?1:T?4:5' → F picks the right part 'T?4:5' → T picks 4 → '4'.",
 "idea": "A ternary expression is right-associative, so scan from the right and push characters on a stack. When the character on top of the stack is '?', the current character is a condition: pop '?', the 'true' value, ':' and the 'false' value, and push whichever the condition selects. The stack ends with the answer.",
 "input": "expression = \"F?1:T?4:5\"",
 "output": "\"4\"",
 "notes": [],
 "best": "A ternary expression is right-associative, so scan from the right and push characters on a stack. When the character on top of the stack is '?', the current character is a condition: pop '?', the 'true' value, ':' and the 'false' value, and push whichever the condition selects. The stack ends with the answer.",
 "variants": [
  {
   "name": "Scan from the right with a stack",
   "code": "class Solution:\n    def parseTernary(self, expression):\n        st = []\n        for ch in reversed(expression):\n            if st and st[-1] == '?':\n                st.pop()\n                a = st.pop()\n                st.pop()\n                b = st.pop()\n                st.append(a if ch == 'T' else b)\n            else:\n                st.append(ch)\n        return st[0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A ternary expression is right-associative, so scan from the right and push characters on a stack. When the character on top of the stack is '?', the current character is a condition: pop '?', the 'true' value, ':' and the 'false' value, and push whichever the condition selects. The stack ends with the answer.",
   "frames": []
  }
 ]
};
