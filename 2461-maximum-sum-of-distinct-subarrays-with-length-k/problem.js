window.PROBLEM = {
 "id": "2461",
 "title": "Maximum Sum of Distinct Subarrays With Length K",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Return the maximum sum of a subarray of length k whose elements are all distinct, or 0 if there is none. Example: [1,5,4,2,9,9,9], k=3 → 15.",
 "why": "[1,5,4,2,9,9,9], k=3: [5,4,2], [4,2,9] and [1,5,4] are distinct; best sum 15.",
 "idea": "Slide a window of size k, keeping a frequency map and the window sum. The window counts when it holds k distinct values (map size equals k).",
 "input": "nums = [1,5,4,2,9,9,9], k = 3",
 "output": "15",
 "notes": [],
 "best": "Slide a window of size k, keeping a frequency map and the window sum. The window counts when it holds k distinct values (map size equals k).",
 "variants": [
  {
   "name": "Sliding window with a counter of duplicates",
   "code": "class Solution:\n    def maximumSubarraySum(self, nums, k):\n        cnt = Counter()\n        total = best = 0\n        for i, x in enumerate(nums):\n            cnt[x] += 1\n            total += x\n            if i >= k:\n                old = nums[i - k]\n                cnt[old] -= 1\n                if cnt[old] == 0:\n                    del cnt[old]\n                total -= old\n            if i >= k - 1 and len(cnt) == k:\n                best = max(best, total)\n        return best",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Slide a window of size k, keeping a frequency map and the window sum. The window counts when it holds k distinct values (map size equals k).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every window",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumSubarraySum(self, nums, k):\n        best = 0\n        for i in range(len(nums) - k + 1):\n            w = nums[i:i + k]\n            if len(set(w)) == k:\n                best = max(best, sum(w))\n        return best",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "For each window test distinctness with a set.",
   "frames": [],
   "alt": true
  }
 ]
};
