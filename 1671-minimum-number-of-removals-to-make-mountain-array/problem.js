window.PROBLEM = {
 "id": "1671",
 "title": "Minimum Number of Removals to Make Mountain Array",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[2,1,1,5,6,2,3,1]: the longest mountain keeps 1,5,6,2,1 or similar (5 elements) → remove 3.",
 "idea": "Compute for every index the length of the longest increasing subsequence ending there (left[i]) and the longest decreasing subsequence starting there (right[i]) using LIS (Longest Increasing Subsequence) DP (Dynamic Programming). A mountain peaking at i keeps left[i] + right[i] − 1 elements (only if both sides have at least 2). Remove the rest.",
 "input": "nums = [2,1,1,5,6,2,3,1]",
 "output": "3",
 "notes": [],
 "best": "Compute for every index the length of the longest increasing subsequence ending there (left[i]) and the longest decreasing subsequence starting there (right[i]) using LIS (Longest Increasing Subsequence) DP (Dynamic Programming). A mountain peaking at i keeps left[i] + right[i] − 1 elements (only if both sides have at least 2). Remove the rest.",
 "variants": [
  {
   "name": "Longest increasing from the left plus decreasing from the right",
   "code": "class Solution:\n    def minimumMountainRemovals(self, nums):\n        n = len(nums)\n        left = [1] * n\n        right = [1] * n\n        for i in range(n):\n            for j in range(i):\n                if nums[j] < nums[i]:\n                    left[i] = max(left[i], left[j] + 1)\n        for i in range(n - 1, -1, -1):\n            for j in range(i + 1, n):\n                if nums[j] < nums[i]:\n                    right[i] = max(right[i], right[j] + 1)\n        keep = max(left[i] + right[i] - 1 for i in range(n) if left[i] > 1 and right[i] > 1)\n        return n - keep",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Compute for every index the length of the longest increasing subsequence ending there (left[i]) and the longest decreasing subsequence starting there (right[i]) using LIS (Longest Increasing Subsequence) DP (Dynamic Programming). A mountain peaking at i keeps left[i] + right[i] − 1 elements (only if both sides have at least 2). Remove the rest.",
   "frames": []
  }
 ]
};
