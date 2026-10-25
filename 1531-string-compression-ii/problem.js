window.PROBLEM = {
 "id": "1531",
 "title": "String Compression II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Run-length encoding replaces runs of the same character by the character followed by the run length when it is more than 1 ('aabccc' → 'a2bc3'). You may delete at most k characters from the string before encoding. Return the smallest possible length of the encoded string. Example: 'aaabcccd', k=2 → delete the b and the d → 'aaaccc' → 'a3c3' → length 4.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every set of deletions",
   "tag": "Brute force",
   "code": "class Solution:\n    def getLengthOfOptimalCompression(self, s, k):\n        def rle(t):\n            out, i = 0, 0\n            while i < len(t):\n                j = i\n                while j < len(t) and t[j] == t[i]: j += 1\n                out += 1 + (len(str(j - i)) if j - i > 1 else 0)\n                i = j\n            return out\n        best = rle(s)\n        for r in range(1, k + 1):\n            for drop in combinations(range(len(s)), r):\n                keep = ''.join(s[i] for i in range(len(s)) if i not in drop)\n                best = min(best, rle(keep))\n        return best",
   "time": "exponential",
   "space": "O(n)",
   "explain": "Delete every possible set of up to k characters and compute the encoded length of each (tiny inputs only).",
   "frames": [],
   "alt": true
  }
 ]
};
