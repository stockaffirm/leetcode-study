window.PROBLEM = {
 "id": "1608",
 "title": "Special Array With X Elements Greater Than or Equal X",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "[3,5]: exactly 2 numbers are ≥ 2 → x = 2.",
 "idea": "Sort descending. If the i-th number (0-based) is ≥ i+1 and the next one is < i+1, then exactly i+1 numbers are ≥ i+1. Check each candidate x directly: count the numbers ≥ x for x = 1…n.",
 "input": "nums = [3,5]",
 "output": "2",
 "notes": [],
 "best": "Sort descending. If the i-th number (0-based) is ≥ i+1 and the next one is < i+1, then exactly i+1 numbers are ≥ i+1. Check each candidate x directly: count the numbers ≥ x for x = 1…n.",
 "variants": [
  {
   "name": "Sort descending and find x",
   "code": "class Solution:\n    def specialArray(self, nums):\n        nums = sorted(nums, reverse=True)\n        for x in range(1, len(nums) + 1):\n            if nums[x - 1] >= x and (x == len(nums) or nums[x] < x):\n                return x\n        return -1",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort descending. If the i-th number (0-based) is ≥ i+1 and the next one is < i+1, then exactly i+1 numbers are ≥ i+1. Check each candidate x directly: count the numbers ≥ x for x = 1…n.",
   "frames": []
  }
 ]
};
