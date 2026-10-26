window.PROBLEM = {
 "id": "424",
 "title": "Longest Repeating Character Replacement",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "You are given a string s of capital letters and a number k. You may change at most k letters in s to any other capital letter. Return the length of the longest stretch of identical letters (letters sitting next to each other) you can make. Example: s='AABABBA', k=1 → change one B in 'AABA' to A to get 'AAAA' → 4.",
 "why": "You may change at most k letters. How long a stretch of identical letters can you make? 'AABABBA', k=1 → 4.",
 "idea": "A window is fixable if (window length − count of its most common letter) ≤ k. Slide a window, keep the largest letter count seen, and shrink by one when the window needs too many changes.",
 "input": "s=\"AABABBA\", k=1",
 "output": "4",
 "notes": [],
 "best": "A window is fixable if (window length − count of its most common letter) ≤ k. Slide a window, keep the largest letter count seen, and shrink by one when the window needs too many changes.",
 "variants": [
  {
   "name": "Window with the most common letter",
   "code": "class Solution:\n    def characterReplacement(self, s, k):\n        cnt, left, best, mx = {}, 0, 0, 0\n        for right, ch in enumerate(s):\n            cnt[ch] = cnt.get(ch, 0) + 1\n            mx = max(mx, cnt[ch])\n            if right - left + 1 - mx > k:\n                cnt[s[left]] -= 1\n                left += 1\n            best = max(best, right - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "A window is fixable if (window length − count of its most common letter) ≤ k. Slide a window, keep the largest letter count seen, and shrink by one when the window needs too many changes.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One window per letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def characterReplacement(self, s, k):\n        best = 0\n        for target in set(s):\n            left = flips = 0\n            for right, ch in enumerate(s):\n                if ch != target: flips += 1\n                while flips > k:\n                    if s[left] != target: flips -= 1\n                    left += 1\n                best = max(best, right - left + 1)\n        return best",
   "time": "O(26·n)",
   "space": "O(1)",
   "explain": "For each possible target letter, find the longest window that needs ≤ k changes to become that letter.",
   "frames": [],
   "alt": true
  }
 ]
};
