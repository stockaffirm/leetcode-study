window.PROBLEM = {
 "id": "736",
 "title": "Parse Lisp Expression",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
