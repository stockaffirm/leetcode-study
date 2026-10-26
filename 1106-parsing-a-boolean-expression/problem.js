window.PROBLEM = {
 "id": "1106",
 "title": "Parsing A Boolean Expression",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'|(f,f,f,t)' → OR of false, false, false, true → true.",
 "idea": "Scan left to right. Push every character except commas and ')'. On ')' pop the values back to the operator ('!', '&', '|'), combine them (not / all / any) and push the result as 't' or 'f'.",
 "input": "expression = \"|(f,f,f,t)\"",
 "output": "true",
 "notes": [],
 "best": "Scan left to right. Push every character except commas and ')'. On ')' pop the values back to the operator ('!', '&', '|'), combine them (not / all / any) and push the result as 't' or 'f'.",
 "variants": [
  {
   "name": "Stack of operators and values",
   "code": "class Solution:\n    def parseBoolExpr(self, expression):\n        st = []\n        for c in expression:\n            if c == ',' or c == '(':\n                continue\n            if c == ')':\n                vals = []\n                while st[-1] not in '!&|':\n                    vals.append(st.pop())\n                op = st.pop()\n                if op == '!':\n                    r = vals[0] == 'f'\n                elif op == '&':\n                    r = all(v == 't' for v in vals)\n                else:\n                    r = any(v == 't' for v in vals)\n                st.append('t' if r else 'f')\n            else:\n                st.append(c)\n        return st[0] == 't'",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Scan left to right. Push every character except commas and ')'. On ')' pop the values back to the operator ('!', '&', '|'), combine them (not / all / any) and push the result as 't' or 'f'.",
   "frames": []
  }
 ]
};
