window.PROBLEM = {
 "id": "1087",
 "title": "Brace Expansion",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "A pattern string s like '{a,b}c{d,e}f' stands for words in which each {x,y,…} means 'choose ONE of these letters' and plain letters are kept. Return all the words it can make, sorted alphabetically. Example: '{a,b}c{d,e}f' → ['acdf','acef','bcdf','bcef'].",
 "why": "'{a,b}c{d,e}f' stands for all words choosing one letter from each {…}: acdf, acef, bcdf, bcef. List them alphabetically.",
 "idea": "Split the pattern into groups (a plain letter is a group of one). Sort each group and take every combination of one choice per group (cartesian product).",
 "input": "\"{a,b}c{d,e}f\"",
 "output": "[\"acdf\",\"acef\",\"bcdf\",\"bcef\"]",
 "notes": [],
 "best": "Split the pattern into groups (a plain letter is a group of one). Sort each group and take every combination of one choice per group (cartesian product).",
 "variants": [
  {
   "name": "Product of the option groups",
   "code": "class Solution:\n    def expand(self, s):\n        groups, i = [], 0\n        while i < len(s):\n            if s[i] == '{':\n                j = s.index('}', i)\n                groups.append(sorted(s[i + 1:j].split(',')))\n                i = j + 1\n            else:\n                groups.append([s[i]])\n                i += 1\n        return [''.join(p) for p in product(*groups)]",
   "time": "O(product of group sizes)",
   "space": "O(output)",
   "explain": "Split the pattern into groups (a plain letter is a group of one). Sort each group and take every combination of one choice per group (cartesian product).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def expand(self, s):\n        res = []\n        def go(i, cur):\n            if i == len(s):\n                res.append(cur)\n                return\n            if s[i] == '{':\n                j = s.index('}', i)\n                for ch in sorted(s[i + 1:j].split(',')): go(j + 1, cur + ch)\n            else:\n                go(i + 1, cur + s[i])\n        go(0, '')\n        return res",
   "time": "O(output)",
   "space": "O(n)",
   "explain": "Pick a letter from each group in turn.",
   "frames": [],
   "alt": true
  }
 ]
};
