window.PROBLEM = {
 "id": "340",
 "title": "Longest Substring with At Most K Distinct Characters",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "Longest stretch of the text that uses at most k different letters. 'eceba', k=2 → 'ece' → 3.",
 "idea": "Grow the window to the right adding letters to a count map; when it has more than k different letters, shrink from the left until it is back to k.",
 "input": "s=\"eceba\", k=2",
 "output": "3",
 "notes": [],
 "best": "Grow the window to the right adding letters to a count map; when it has more than k different letters, shrink from the left until it is back to k.",
 "variants": [
  {
   "name": "Sliding window with a count map",
   "code": "class Solution:\n    def lengthOfLongestSubstringKDistinct(self, s, k):\n        cnt, left, best = {}, 0, 0\n        for right, ch in enumerate(s):\n            cnt[ch] = cnt.get(ch, 0) + 1\n            while len(cnt) > k:\n                cnt[s[left]] -= 1\n                if cnt[s[left]] == 0: del cnt[s[left]]\n                left += 1\n            best = max(best, right - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Grow the window to the right adding letters to a count map; when it has more than k different letters, shrink from the left until it is back to k.",
   "frames": []
  }
 ]
};
