window.PROBLEM = {
 "id": "1531",
 "title": "String Compression II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Run-length encode a string ('aaabcc' → 'a3bc2'). You may delete at most k characters first. Shortest possible encoded length?",
 "idea": "At each start position decide: delete this character, or keep it and merge all later copies of the same letter (deleting the different letters in between, within the budget). Memoise by (position, deletions left).",
 "input": "s=\"aaabcccd\", k=2",
 "output": "4",
 "notes": [],
 "best": "At each start position decide: delete this character, or keep it and merge all later copies of the same letter (deleting the different letters in between, within the budget). Memoise by (position, deletions left).",
 "variants": [
  {
   "name": "DP: merge a run, delete the rest",
   "code": "class Solution:\n    def getLengthOfOptimalCompression(self, s, k):\n        n = len(s)\n        @lru_cache(None)\n        def go(i, left):\n            if left < 0: return float('inf')\n            if i >= n - left: return 0\n            best = go(i + 1, left - 1)\n            same = diff = 0\n            for j in range(i, n):\n                if s[j] == s[i]: same += 1\n                else: diff += 1\n                if diff > left: break\n                length = 1 if same == 1 else 1 + len(str(same))\n                best = min(best, length + go(j + 1, left - diff))\n            return best\n        return go(0, k)",
   "time": "O(n²·k)",
   "space": "O(n·k)",
   "explain": "At each start position decide: delete this character, or keep it and merge all later copies of the same letter (deleting the different letters in between, within the budget). Memoise by (position, deletions left).",
   "frames": []
  }
 ]
};
