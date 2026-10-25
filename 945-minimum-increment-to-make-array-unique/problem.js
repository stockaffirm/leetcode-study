window.PROBLEM = {
 "id": "945",
 "title": "Minimum Increment to Make Array Unique",
 "level": "Medium",
 "topic": "Greedy",
 "question": "In one move you may add 1 to any element. Return the minimum moves to make all elements distinct. Example: [3,2,1,2,1,7] → 6.",
 "why": "[3,2,1,2,1,7]: sorted 1,1,2,2,3,7 become 1,2,3,4,5,7 → 6 increments.",
 "idea": "Sort the numbers. Walk left to right; each number must be at least previous + 1. If it is smaller, raise it to that value and count the increments.",
 "input": "nums = [3,2,1,2,1,7]",
 "output": "6",
 "notes": [],
 "best": "Sort the numbers. Walk left to right; each number must be at least previous + 1. If it is smaller, raise it to that value and count the increments.",
 "variants": [
  {
   "name": "Sort and push each value above the previous",
   "code": "class Solution:\n    def minIncrementForUnique(self, nums):\n        nums.sort()\n        moves = 0\n        for i in range(1, len(nums)):\n            if nums[i] <= nums[i - 1]:\n                need = nums[i - 1] + 1\n                moves += need - nums[i]\n                nums[i] = need\n        return moves",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort the numbers. Walk left to right; each number must be at least previous + 1. If it is smaller, raise it to that value and count the increments.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count array of values",
   "tag": "Alternative",
   "code": "class Solution:\n    def minIncrementForUnique(self, nums):\n        cnt = Counter(nums)\n        moves = carry = 0\n        for v in range(min(nums), max(nums) + len(nums) + 1):\n            carry += cnt.get(v, 0)\n            if carry:\n                moves += carry - 1\n                carry -= 1\n        return moves",
   "time": "O(n + max)",
   "space": "O(max)",
   "explain": "Count each value, carry duplicates forward to the next value.",
   "frames": [],
   "alt": true
  }
 ]
};
