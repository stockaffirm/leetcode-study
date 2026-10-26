window.PROBLEM = {
 "id": "736",
 "title": "Parse Lisp Expression",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "Evaluate a small Lisp-style expression. A number or a variable is an expression; (add a b) and (mult a b) add or multiply two expressions; (let v1 e1 v2 e2 … expr) assigns each variable in turn and returns the value of the last expression. A variable defined in an inner let hides outer ones with the same name, and disappears when that let ends. Example: '(let x 2 (mult x (let x 3 y 4 (add x y))))' → 14.",
 "why": "Evaluate a Lisp-like expression with (add a b), (mult a b) and (let v1 e1 v2 e2 … expr), where let creates variables visible only inside it (inner definitions shadow outer ones).",
 "idea": "Tokenise, then evaluate recursively. Keep a stack of scopes: let pushes a new scope that is popped when the let ends; variable lookup searches from the innermost scope outwards.",
 "input": "'(let x 2 (mult x (let x 3 y 4 (add x y))))'",
 "output": "14",
 "notes": [],
 "best": "Tokenise, then evaluate recursively. Keep a stack of scopes: let pushes a new scope that is popped when the let ends; variable lookup searches from the innermost scope outwards.",
 "variants": [
  {
   "name": "Recursive evaluation with scopes",
   "code": "class Solution:\n    def evaluate(self, expression):\n        tokens = expression.replace('(', ' ( ').replace(')', ' ) ').split()\n        scopes = [{}]\n        pos = 0\n        def ev():\n            nonlocal pos\n            t = tokens[pos]\n            if t != '(':\n                pos += 1\n                if t.lstrip('-').isdigit(): return int(t)\n                for sc in reversed(scopes):\n                    if t in sc: return sc[t]\n            pos += 1\n            op = tokens[pos]\n            pos += 1\n            if op == 'add' or op == 'mult':\n                a = ev()\n                b = ev()\n                pos += 1\n                return a + b if op == 'add' else a * b\n            scopes.append({})\n            while True:\n                if tokens[pos] == '(' or tokens[pos + 1] == ')':\n                    v = ev()\n                    pos += 1\n                    scopes.pop()\n                    return v\n                name = tokens[pos]\n                pos += 1\n                scopes[-1][name] = ev()\n        return ev()",
   "time": "O(n·depth)",
   "space": "O(n)",
   "explain": "Tokenise, then evaluate recursively. Keep a stack of scopes: let pushes a new scope that is popped when the let ends; variable lookup searches from the innermost scope outwards.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Split the text into parts",
   "tag": "Alternative",
   "code": "class Solution:\n    def evaluate(self, expression):\n        def split(s):\n            parts, depth, cur = [], 0, ''\n            for ch in s:\n                if ch == ' ' and depth == 0:\n                    parts.append(cur)\n                    cur = ''\n                    continue\n                if ch == '(': depth += 1\n                if ch == ')': depth -= 1\n                cur += ch\n            parts.append(cur)\n            return parts\n        def ev(s, env):\n            if s[0] != '(':\n                return int(s) if s.lstrip('-').isdigit() else env[s]\n            parts = split(s[1:-1])\n            if parts[0] == 'add': return ev(parts[1], env) + ev(parts[2], env)\n            if parts[0] == 'mult': return ev(parts[1], env) * ev(parts[2], env)\n            env = dict(env)\n            for i in range(1, len(parts) - 1, 2): env[parts[i]] = ev(parts[i + 1], env)\n            return ev(parts[-1], env)\n        return ev(expression, {})",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Evaluate a string recursively with a copy of the variable dictionary: split the inside of the parentheses into top-level parts.",
   "frames": [],
   "alt": true
  }
 ]
};
