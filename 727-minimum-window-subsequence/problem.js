window.PROBLEM = {
 "id": "727",
 "title": "Minimum Window Subsequence",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "Given two strings s1 and s2, return the SHORTEST piece of s1 (letters sitting next to each other) that contains s2 as a subsequence (s2's letters appear in it in order, other letters may sit in between). If several pieces have the same shortest length, return the one that starts furthest left; if there is none, return an empty string. Example: s1='abcdebdde', s2='bde' → 'bcde'.",
 "why": "Find the shortest piece of s1 that contains all of s2 as a subsequence (in order, gaps allowed).",
 "idea": "From a start, move forward matching s2's letters in order to find an end; then walk backwards from that end matching s2 reversed to find the tightest start. Record it and restart just after that start.",
 "input": "s1=\"abcdebdde\", s2=\"bde\"",
 "output": "\"bcde\"",
 "notes": [],
 "best": "From a start, move forward matching s2's letters in order to find an end; then walk backwards from that end matching s2 reversed to find the tightest start. Record it and restart just after that start.",
 "variants": [
  {
   "name": "Scan forward to match, then back to shrink",
   "code": "class Solution:\n    def minWindow(self, s1, s2):\n        best = ''\n        i = 0\n        while i < len(s1):\n            j = 0\n            k = i\n            while k < len(s1) and j < len(s2):\n                if s1[k] == s2[j]: j += 1\n                k += 1\n            if j < len(s2): break\n            end = k\n            j = len(s2) - 1\n            k -= 1\n            while j >= 0:\n                if s1[k] == s2[j]: j -= 1\n                k -= 1\n            start = k + 1\n            if not best or end - start < len(best): best = s1[start:end]\n            i = start + 1\n        return best",
   "time": "O(n·m)",
   "space": "O(1)",
   "explain": "From a start, move forward matching s2's letters in order to find an end; then walk backwards from that end matching s2 reversed to find the tightest start. Record it and restart just after that start.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP of latest start positions",
   "tag": "Alternative",
   "code": "class Solution:\n    def minWindow(self, s1, s2):\n        n, m = len(s1), len(s2)\n        dp = [[-1] * (n + 1) for _ in range(m + 1)]\n        for i in range(n + 1): dp[0][i] = i\n        for j in range(1, m + 1):\n            for i in range(1, n + 1):\n                dp[j][i] = dp[j - 1][i - 1] if s1[i - 1] == s2[j - 1] else dp[j][i - 1]\n        best_len, best_start = n + 1, -1\n        for i in range(1, n + 1):\n            if dp[m][i] != -1 and i - dp[m][i] < best_len:\n                best_len, best_start = i - dp[m][i], dp[m][i]\n        return s1[best_start:best_start + best_len] if best_start != -1 else ''",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "dp[j][i] = start of the latest window ending before i that contains s2's first j letters as a subsequence.",
   "frames": [],
   "alt": true
  }
 ]
};
