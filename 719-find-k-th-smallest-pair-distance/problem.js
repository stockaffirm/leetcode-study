window.PROBLEM = {
 "id": "719",
 "title": "Find K-th Smallest Pair Distance",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
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
   "frames": []
  }
 ]
};
