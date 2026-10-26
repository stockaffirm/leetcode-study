window.PROBLEM = {
 "id": "301",
 "title": "Remove Invalid Parentheses",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "'()())()': removing one ')' gives '(())()' or '()()()' — both valid with the minimum of 1 removal.",
 "idea": "Try removing 0 characters, then 1, then 2 … level by level. The first level that contains a valid string is the minimum, and every valid string on that level is an answer (a set removes duplicates).",
 "input": "s = \"()())()\"",
 "output": "[\"(())()\",\"()()()\"]",
 "notes": [],
 "best": "Try removing 0 characters, then 1, then 2 … level by level. The first level that contains a valid string is the minimum, and every valid string on that level is an answer (a set removes duplicates).",
 "variants": [
  {
   "name": "BFS by number of removals",
   "code": "class Solution:\n    def removeInvalidParentheses(self, s):\n        def valid(t):\n            bal = 0\n            for ch in t:\n                if ch == \"(\":\n                    bal += 1\n                elif ch == \")\":\n                    bal -= 1\n                    if bal < 0:\n                        return False\n            return bal == 0\n        level = {s}\n        while True:\n            good = [t for t in level if valid(t)]\n            if good:\n                return good\n            level = {t[:i] + t[i + 1:] for t in level for i in range(len(t)) if t[i] in \"()\"}",
   "time": "O(2ⁿ · n)",
   "space": "O(2ⁿ)",
   "explain": "Try removing 0 characters, then 1, then 2 … level by level. The first level that contains a valid string is the minimum, and every valid string on that level is an answer (a set removes duplicates).",
   "frames": []
  }
 ]
};
