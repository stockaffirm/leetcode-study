window.PROBLEM = {
 "id": "424",
 "title": "Longest Repeating Character Replacement",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
