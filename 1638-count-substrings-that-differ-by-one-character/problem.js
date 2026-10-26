window.PROBLEM = {
 "id": "1638",
 "title": "Count Substrings That Differ by One Character",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "s 'aba', t 'baba' → 6.",
 "idea": "For every pair of starting positions (i in s, j in t) walk forward while counting mismatches; each step with exactly one mismatch so far is one valid pair of substrings. Stop at the second mismatch.",
 "input": "s = \"aba\", t = \"baba\"",
 "output": "6",
 "notes": [],
 "best": "For every pair of starting positions (i in s, j in t) walk forward while counting mismatches; each step with exactly one mismatch so far is one valid pair of substrings. Stop at the second mismatch.",
 "variants": [
  {
   "name": "Extend matching pairs and count those with exactly one mismatch",
   "code": "class Solution:\n    def countSubstrings(self, s, t):\n        count = 0\n        for i in range(len(s)):\n            for j in range(len(t)):\n                diff = 0\n                k = 0\n                while i + k < len(s) and j + k < len(t):\n                    if s[i + k] != t[j + k]:\n                        diff += 1\n                    if diff > 1:\n                        break\n                    if diff == 1:\n                        count += 1\n                    k += 1\n        return count",
   "time": "O(n·m·min(n,m))",
   "space": "O(1)",
   "explain": "For every pair of starting positions (i in s, j in t) walk forward while counting mismatches; each step with exactly one mismatch so far is one valid pair of substrings. Stop at the second mismatch.",
   "frames": []
  }
 ]
};
