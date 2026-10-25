window.PROBLEM = {
 "id": "301",
 "title": "Remove Invalid Parentheses",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "A string contains brackets and letters. Remove the smallest number of ')' or '(' so that the string becomes valid, and return all different valid results (any order). Example: '()())()' → ['(())()', '()()()'].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS with the minimum removals known",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeInvalidParentheses(self, s):\n        l = r = 0\n        for ch in s:\n            if ch == \"(\":\n                l += 1\n            elif ch == \")\":\n                if l:\n                    l -= 1\n                else:\n                    r += 1\n        res = set()\n        def dfs(i, l, r, bal, cur):\n            if i == len(s):\n                if l == 0 and r == 0 and bal == 0:\n                    res.add(cur)\n                return\n            ch = s[i]\n            if ch == \"(\":\n                if l > 0:\n                    dfs(i + 1, l - 1, r, bal, cur)\n                dfs(i + 1, l, r, bal + 1, cur + ch)\n            elif ch == \")\":\n                if r > 0:\n                    dfs(i + 1, l, r - 1, bal, cur)\n                if bal > 0:\n                    dfs(i + 1, l, r, bal - 1, cur + ch)\n            else:\n                dfs(i + 1, l, r, bal, cur + ch)\n        dfs(0, l, r, 0, \"\")\n        return list(res)",
   "time": "O(2ⁿ)",
   "space": "O(n)",
   "explain": "First count how many '(' and ')' must go, then try keeping or removing each bracket.",
   "frames": [],
   "alt": true
  }
 ]
};
