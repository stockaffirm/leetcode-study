window.PROBLEM = {
 "id": "719",
 "title": "Find K-th Smallest Pair Distance",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "The distance of a pair of numbers is the absolute difference. Among all pairs (i < j) of the array, return the k-th smallest distance. Example: [1,3,1], k=1 → 0 (the pair 1,1).",
 "why": "[1,3,1], k=1: the pair distances are 2, 0, 2. Sorted: 0, 2, 2, so the 1st smallest is 0.",
 "idea": "Sort the numbers. For a guessed distance d, count the pairs with distance ≤ d using two pointers. The answer is the smallest d whose count reaches k, found by binary search on d.",
 "input": "nums = [1,3,1], k = 1",
 "output": "0",
 "notes": [],
 "best": "Sort the numbers. For a guessed distance d, count the pairs with distance ≤ d using two pointers. The answer is the smallest d whose count reaches k, found by binary search on d.",
 "variants": [
  {
   "name": "Binary search the distance + two pointers",
   "code": "class Solution:\n    def smallestDistancePair(self, nums, k):\n        nums.sort()\n        lo, hi = 0, nums[-1] - nums[0]\n        while lo < hi:\n            mid = (lo + hi) // 2\n            cnt = j = 0\n            for i in range(len(nums)):\n                while nums[i] - nums[j] > mid:\n                    j += 1\n                cnt += i - j\n            if cnt >= k:\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log n + n log D)",
   "space": "O(1)",
   "explain": "Sort the numbers. For a guessed distance d, count the pairs with distance ≤ d using two pointers. The answer is the smallest d whose count reaches k, found by binary search on d.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "List every pair distance",
   "tag": "Brute force",
   "code": "class Solution:\n    def smallestDistancePair(self, nums, k):\n        d = sorted(abs(a - b) for a, b in combinations(nums, 2))\n        return d[k - 1]",
   "time": "O(n² log n)",
   "space": "O(n²)",
   "explain": "Build all pair distances, sort them and pick the k-th.",
   "frames": [],
   "alt": true
  }
 ]
};
