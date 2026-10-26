window.PROBLEM = {
 "id": "132",
 "title": "Palindrome Partitioning II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'aab' → 'aa' | 'b': one cut.",
 "idea": "cut[i] is the minimum number of cuts for the first i letters (initially i − 1). Every palindrome found by expanding around a centre s[l..r] lets the prefix ending at r be cut at l: cut[r+1] = min(cut[r+1], cut[l] + 1).",
 "input": "s = \"aab\"",
 "output": "1",
 "notes": [],
 "best": "cut[i] is the minimum number of cuts for the first i letters (initially i − 1). Every palindrome found by expanding around a centre s[l..r] lets the prefix ending at r be cut at l: cut[r+1] = min(cut[r+1], cut[l] + 1).",
 "variants": [
  {
   "name": "Expand around centres",
   "code": "class Solution:\n    def minCut(self, s):\n        n = len(s)\n        cut = list(range(-1, n))\n        for c in range(n):\n            for l, r in ((c, c), (c, c + 1)):\n                while l >= 0 and r < n and s[l] == s[r]:\n                    cut[r + 1] = min(cut[r + 1], cut[l] + 1)\n                    l -= 1\n                    r += 1\n        return cut[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "cut[i] is the minimum number of cuts for the first i letters (initially i − 1). Every palindrome found by expanding around a centre s[l..r] lets the prefix ending at r be cut at l: cut[r+1] = min(cut[r+1], cut[l] + 1).",
   "frames": []
  }
 ]
};
