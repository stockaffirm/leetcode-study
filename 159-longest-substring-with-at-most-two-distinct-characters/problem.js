window.PROBLEM = {
 "id": "159",
 "title": "Longest Substring with At Most Two Distinct Characters",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Return the length of the longest substring that contains at most two different characters. Example: 'eceba' → 3 ('ece').",
 "why": "'eceba': the longest piece with at most 2 different letters is 'ece' (length 3).",
 "idea": "Grow the window to the right and count its letters. If it holds more than 2 different letters, move the left edge forward until it is back to 2. Track the longest window.",
 "input": "s = \"eceba\"",
 "output": "3",
 "notes": [],
 "best": "Grow the window to the right and count its letters. If it holds more than 2 different letters, move the left edge forward until it is back to 2. Track the longest window.",
 "variants": [
  {
   "name": "Sliding window with a count dictionary",
   "code": "class Solution:\n    def lengthOfLongestSubstringTwoDistinct(self, s):\n        cnt = {}\n        left = best = 0\n        for right, ch in enumerate(s):\n            cnt[ch] = cnt.get(ch, 0) + 1\n            while len(cnt) > 2:\n                cnt[s[left]] -= 1\n                if cnt[s[left]] == 0:\n                    del cnt[s[left]]\n                left += 1\n            best = max(best, right - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Grow the window to the right and count its letters. If it holds more than 2 different letters, move the left edge forward until it is back to 2. Track the longest window.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remember the last position of each letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def lengthOfLongestSubstringTwoDistinct(self, s):\n        last = {}\n        left = best = 0\n        for i, ch in enumerate(s):\n            last[ch] = i\n            if len(last) > 2:\n                drop = min(last, key=last.get)\n                left = last.pop(drop) + 1\n            best = max(best, i - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep the last index of the two letters in the window; when a third appears drop the one whose last index is smaller.",
   "frames": [],
   "alt": true
  }
 ]
};
