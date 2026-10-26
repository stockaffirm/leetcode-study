window.PROBLEM = {
 "id": "1106",
 "title": "Parsing A Boolean Expression",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "Evaluate a boolean expression made of 't', 'f', '!(expr)', '&(expr,expr,…)' and '|(expr,expr,…)'. Example: '|(f,f,f,t)' → true.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursive descent",
   "tag": "Alternative",
   "code": "class Solution:\n    def parseBoolExpr(self, expression):\n        pos = 0\n        def parse():\n            nonlocal pos\n            c = expression[pos]\n            pos += 1\n            if c == 't':\n                return True\n            if c == 'f':\n                return False\n            pos += 1\n            vals = [parse()]\n            while expression[pos] == ',':\n                pos += 1\n                vals.append(parse())\n            pos += 1\n            if c == '!':\n                return not vals[0]\n            return all(vals) if c == '&' else any(vals)\n        return parse()",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Parse the expression with a recursive function that reads an operator, its arguments and the closing bracket.",
   "frames": [],
   "alt": true
  }
 ]
};
