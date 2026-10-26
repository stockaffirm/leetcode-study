window.PROBLEM = {
 "id": "770",
 "title": "Basic Calculator IV",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'e + 8 - a + 5' with e = 1 simplifies to '-1*a' and '14'.",
 "idea": "Treat every expression as a polynomial: a dictionary from a sorted tuple of variable names (a monomial) to its integer coefficient. Parse with recursive descent (expression → term → factor), substituting the known variables. Addition and subtraction merge dictionaries; multiplication multiplies every pair of monomials. Finally output the terms ordered by degree (high first) then alphabetically.",
 "input": "expression = \"e + 8 - a + 5\", evalvars = [\"e\"], evalints = [1]",
 "output": "['-1*a', '14']",
 "notes": [],
 "best": "Treat every expression as a polynomial: a dictionary from a sorted tuple of variable names (a monomial) to its integer coefficient. Parse with recursive descent (expression → term → factor), substituting the known variables. Addition and subtraction merge dictionaries; multiplication multiplies every pair of monomials. Finally output the terms ordered by degree (high first) then alphabetically.",
 "variants": [
  {
   "name": "Parse into polynomials (dict of monomials)",
   "code": "class Solution:\n    def basicCalculatorIV(self, expression, evalvars, evalints):\n        env = dict(zip(evalvars, evalints))\n        tokens = []\n        i = 0\n        s = expression\n        while i < len(s):\n            c = s[i]\n            if c == ' ':\n                i += 1\n            elif c in '()+-*':\n                tokens.append(c)\n                i += 1\n            else:\n                j = i\n                while j < len(s) and s[j] not in ' ()+-*':\n                    j += 1\n                tokens.append(s[i:j])\n                i = j\n        pos = 0\n        def clean(p):\n            return Counter({k: v for k, v in p.items() if v})\n        def add(a, b, sign):\n            r = Counter(a)\n            for k, v in b.items():\n                r[k] += sign * v\n            return clean(r)\n        def mul(a, b):\n            r = Counter()\n            for k1, v1 in a.items():\n                for k2, v2 in b.items():\n                    r[tuple(sorted(k1 + k2))] += v1 * v2\n            return clean(r)\n        def factor():\n            nonlocal pos\n            t = tokens[pos]\n            pos += 1\n            if t == '(':\n                p = expr()\n                pos += 1\n                return p\n            if t.lstrip('-').isdigit():\n                return clean(Counter({(): int(t)}))\n            if t in env:\n                return clean(Counter({(): env[t]}))\n            return Counter({(t,): 1})\n        def term():\n            nonlocal pos\n            p = factor()\n            while pos < len(tokens) and tokens[pos] == '*':\n                pos += 1\n                p = mul(p, factor())\n            return p\n        def expr():\n            nonlocal pos\n            p = term()\n            while pos < len(tokens) and tokens[pos] in '+-':\n                op = tokens[pos]\n                pos += 1\n                p = add(p, term(), 1 if op == '+' else -1)\n            return p\n        poly = expr()\n        out = []\n        for mono in sorted(poly, key=lambda m: (-len(m), m)):\n            out.append('*'.join([str(poly[mono])] + list(mono)))\n        return out",
   "time": "O(size of polynomials)",
   "space": "O(size of polynomials)",
   "explain": "Treat every expression as a polynomial: a dictionary from a sorted tuple of variable names (a monomial) to its integer coefficient. Parse with recursive descent (expression → term → factor), substituting the known variables. Addition and subtraction merge dictionaries; multiplication multiplies every pair of monomials. Finally output the terms ordered by degree (high first) then alphabetically.",
   "frames": []
  }
 ]
};
