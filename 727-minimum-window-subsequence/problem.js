window.PROBLEM = {
 "id": "727",
 "title": "Minimum Window Subsequence",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
