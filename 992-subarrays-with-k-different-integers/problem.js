window.PROBLEM = {
 "id": "992",
 "title": "Subarrays with K Different Integers",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "",
 "why": "Count the runs of the list that contain exactly k different numbers.",
 "idea": "'Exactly k' is hard for a sliding window, but 'at most k' is easy. Exactly k = (runs with at most k different) − (runs with at most k−1 different).",
 "input": "[1, 2, 1, 2, 3], k=2",
 "output": "7",
 "notes": [],
 "best": "'Exactly k' is hard for a sliding window, but 'at most k' is easy. Exactly k = (runs with at most k different) − (runs with at most k−1 different).",
 "variants": [
  {
   "name": "atMost(k) − atMost(k−1)",
   "code": "class Solution:\n    def subarraysWithKDistinct(self, nums, k):\n        def at_most(g):\n            cnt, left, res = {}, 0, 0\n            for right, x in enumerate(nums):\n                cnt[x] = cnt.get(x, 0) + 1\n                while len(cnt) > g:\n                    cnt[nums[left]] -= 1\n                    if cnt[nums[left]] == 0: del cnt[nums[left]]\n                    left += 1\n                res += right - left + 1\n            return res\n        return at_most(k) - at_most(k - 1)",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "'Exactly k' is hard for a sliding window, but 'at most k' is easy. Exactly k = (runs with at most k different) − (runs with at most k−1 different).",
   "frames": []
  }
 ]
};
