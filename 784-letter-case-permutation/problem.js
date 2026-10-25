window.PROBLEM = {
 "id": "784",
 "title": "Letter Case Permutation",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Every letter of a string may be changed to lower or upper case; digits stay. Return all possible strings (any order). Example: 'a1b2' → ['a1b2','a1B2','A1b2','A1B2'].",
 "why": "'a1b2': each letter can be lower or upper case, digits stay → 2 × 2 = 4 strings.",
 "idea": "Build the strings character by character. A digit is appended to every string; a letter doubles the list: one copy with the lower-case letter, one with the upper-case letter.",
 "input": "s = \"a1b2\"",
 "output": "[\"a1b2\",\"a1B2\",\"A1b2\",\"A1B2\"]",
 "notes": [],
 "best": "Build the strings character by character. A digit is appended to every string; a letter doubles the list: one copy with the lower-case letter, one with the upper-case letter.",
 "variants": [
  {
   "name": "Branch on every letter",
   "code": "class Solution:\n    def letterCasePermutation(self, s):\n        res = [\"\"]\n        for ch in s:\n            if ch.isalpha():\n                res = [p + c for p in res for c in (ch.lower(), ch.upper())]\n            else:\n                res = [p + ch for p in res]\n        return res",
   "time": "O(n · 2ⁿ)",
   "space": "O(n · 2ⁿ)",
   "explain": "Build the strings character by character. A digit is appended to every string; a letter doubles the list: one copy with the lower-case letter, one with the upper-case letter.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Backtracking",
   "tag": "Alternative",
   "code": "class Solution:\n    def letterCasePermutation(self, s):\n        res = []\n        def go(i, cur):\n            if i == len(s):\n                res.append(\"\".join(cur))\n                return\n            if s[i].isalpha():\n                for c in (s[i].lower(), s[i].upper()):\n                    cur.append(c)\n                    go(i + 1, cur)\n                    cur.pop()\n            else:\n                cur.append(s[i])\n                go(i + 1, cur)\n                cur.pop()\n        go(0, [])\n        return res",
   "time": "O(n · 2ⁿ)",
   "space": "O(n)",
   "explain": "Go through the string; at a letter try both cases.",
   "frames": [],
   "alt": true
  }
 ]
};
