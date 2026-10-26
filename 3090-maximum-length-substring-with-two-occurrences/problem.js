window.PROBLEM = {
 "id": "3090",
 "title": "Maximum Length Substring With Two Occurrences",
 "level": "Easy",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
