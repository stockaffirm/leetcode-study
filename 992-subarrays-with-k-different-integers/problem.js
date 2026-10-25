window.PROBLEM = {
 "id": "992",
 "title": "Subarrays with K Different Integers",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "Given a list nums of positive numbers and a number k, return the number of 'good' runs: runs of numbers sitting next to each other (subarrays) that contain EXACTLY k different values. Example: [1,2,1,2,3], k=2 → [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2] → 7.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every start",
   "tag": "Brute force",
   "code": "class Solution:\n    def subarraysWithKDistinct(self, nums, k):\n        count = 0\n        for i in range(len(nums)):\n            seen = set()\n            for j in range(i, len(nums)):\n                seen.add(nums[j])\n                if len(seen) == k: count += 1\n                elif len(seen) > k: break\n        return count",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each start extend the run and count the times the number of different values equals k.",
   "frames": [],
   "alt": true
  }
 ]
};
