window.PROBLEM = {
 "id": "1096",
 "title": "Brace Expansion II",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'{a,b}{c,{d,e}}' → {ac, ad, ae, bc, bd, be}.",
 "idea": "Grammar: an expression is a union (comma separated) of terms; a term is a concatenation (product) of factors; a factor is a letter or a braced expression. Parse with recursive descent: a union collects sets, a product combines sets by concatenating every pair of strings, and the result is returned sorted.",
 "input": "expression = \"{a,b}{c,{d,e}}\"",
 "output": "['ac', 'ad', 'ae', 'bc', 'bd', 'be']",
 "notes": [],
 "best": "Grammar: an expression is a union (comma separated) of terms; a term is a concatenation (product) of factors; a factor is a letter or a braced expression. Parse with recursive descent: a union collects sets, a product combines sets by concatenating every pair of strings, and the result is returned sorted.",
 "variants": [
  {
   "name": "Recursive descent over unions and products of sets",
   "code": "class Solution:\n    def braceExpansionII(self, expression):\n        s = expression\n        pos = 0\n        def union():\n            nonlocal pos\n            res = set(product_terms())\n            while pos < len(s) and s[pos] == ',':\n                pos += 1\n                res |= set(product_terms())\n            return res\n        def product_terms():\n            nonlocal pos\n            cur = {\"\"}\n            while pos < len(s) and s[pos] not in ',}':\n                if s[pos] == '{':\n                    pos += 1\n                    inner = union()\n                    pos += 1\n                else:\n                    inner = {s[pos]}\n                    pos += 1\n                cur = {a + b for a in cur for b in inner}\n            return cur\n        return sorted(union())",
   "time": "O(output size)",
   "space": "O(output size)",
   "explain": "Grammar: an expression is a union (comma separated) of terms; a term is a concatenation (product) of factors; a factor is a letter or a braced expression. Parse with recursive descent: a union collects sets, a product combines sets by concatenating every pair of strings, and the result is returned sorted.",
   "frames": []
  }
 ]
};
