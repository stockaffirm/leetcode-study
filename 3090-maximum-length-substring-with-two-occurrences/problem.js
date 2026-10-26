window.PROBLEM = {
 "id": "3090",
 "title": "Maximum Length Substring With Two Occurrences",
 "level": "Easy",
 "topic": "Sliding Window",
 "question": "Return the maximum length of a substring in which every character appears at most twice. Example: 'bcbbbcba' → 4.",
 "why": "'bcbbbcba': the longest piece in which no letter appears more than twice has length 4 (for example 'bcbb').",
 "idea": "Grow the window to the right. If the new letter now appears three times, move the left edge forward until it appears at most twice again. Track the longest window.",
 "input": "s = \"bcbbbcba\"",
 "output": "4",
 "notes": [],
 "best": "Grow the window to the right. If the new letter now appears three times, move the left edge forward until it appears at most twice again. Track the longest window.",
 "variants": [
  {
   "name": "Sliding window, each letter at most twice",
   "code": "class Solution:\n    def maximumLengthSubstring(self, s):\n        cnt = Counter()\n        left = best = 0\n        for right, ch in enumerate(s):\n            cnt[ch] += 1\n            while cnt[ch] > 2:\n                cnt[s[left]] -= 1\n                left += 1\n            best = max(best, right - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Grow the window to the right. If the new letter now appears three times, move the left edge forward until it appears at most twice again. Track the longest window.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every substring",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumLengthSubstring(self, s):\n        best = 0\n        for i in range(len(s)):\n            for j in range(i + 1, len(s) + 1):\n                if max(Counter(s[i:j]).values()) <= 2:\n                    best = max(best, j - i)\n        return best",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Look at all substrings and keep the longest in which every letter appears at most twice.",
   "frames": [],
   "alt": true
  }
 ]
};
