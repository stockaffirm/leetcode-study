window.PROBLEM = {
 "id": "2035",
 "title": "Partition Array Into Two Arrays to Minimize Sum Difference",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "nums has 2n integers. Split it into two arrays of n elements each, minimising the absolute difference between their sums, and return that difference. Example: [3,9,7,3] → 2.",
 "why": "[3,9,7,3] → split into [3,9] and [7,3]? sums 12 and 10 → difference 2.",
 "idea": "2n numbers split into two groups of n. Split the array into halves of n and list every subset of each half with its size and sum. A group of n is k elements from the left half plus n − k from the right. For each k, sort the right sums for size n − k and binary search the one that makes the group sum closest to half the total.",
 "input": "nums = [3,9,7,3]",
 "output": "2",
 "notes": [],
 "best": "2n numbers split into two groups of n. Split the array into halves of n and list every subset of each half with its size and sum. A group of n is k elements from the left half plus n − k from the right. For each k, sort the right sums for size n − k and binary search the one that makes the group sum closest to half the total.",
 "variants": [
  {
   "name": "Meet in the middle by subset size",
   "code": "class Solution:\n    def minimumDifference(self, nums):\n        n = len(nums) // 2\n        total = sum(nums)\n        left = [[] for _ in range(n + 1)]\n        right = [[] for _ in range(n + 1)]\n        for mask in range(1 << n):\n            c = sl = sr = 0\n            for i in range(n):\n                if mask >> i & 1:\n                    c += 1\n                    sl += nums[i]\n                    sr += nums[n + i]\n            left[c].append(sl)\n            right[c].append(sr)\n        best = float('inf')\n        for k in range(n + 1):\n            R = sorted(right[n - k])\n            for s in left[k]:\n                j = bisect_left(R, total / 2 - s)\n                for jj in (j - 1, j):\n                    if 0 <= jj < len(R):\n                        best = min(best, abs(total - 2 * (s + R[jj])))\n        return best",
   "time": "O(2ⁿ · n)",
   "space": "O(2ⁿ)",
   "explain": "2n numbers split into two groups of n. Split the array into halves of n and list every subset of each half with its size and sum. A group of n is k elements from the left half plus n − k from the right. For each k, sort the right sums for size n − k and binary search the one that makes the group sum closest to half the total.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every group of n",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimumDifference(self, nums):\n        n = len(nums) // 2\n        total = sum(nums)\n        return min(abs(total - 2 * sum(c)) for c in combinations(nums, n))",
   "time": "O(C(2n,n))",
   "space": "O(n)",
   "explain": "Enumerate every way to pick n numbers for the first group (only for small n).",
   "frames": [],
   "alt": true
  }
 ]
};
