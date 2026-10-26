window.PROBLEM = {
 "id": "2210",
 "title": "Count Hills and Valleys in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[2,4,1,1,6,5]: 4 is a hill, the run 1,1 is a valley, 6 is a hill → 3.",
 "idea": "Equal neighbours count as one position. For each element compare with the previous different value and the next different value: both smaller = hill, both bigger = valley. Skip an element equal to the next, and only update 'previous' after a real move.",
 "input": "nums = [2,4,1,1,6,5]",
 "output": "3",
 "notes": [],
 "best": "Equal neighbours count as one position. For each element compare with the previous different value and the next different value: both smaller = hill, both bigger = valley. Skip an element equal to the next, and only update 'previous' after a real move.",
 "variants": [
  {
   "name": "Compare with the last different neighbour",
   "code": "class Solution:\n    def countHillValley(self, nums):\n        res = 0\n        prev = nums[0]\n        for i in range(1, len(nums) - 1):\n            if nums[i] == nums[i + 1]:\n                continue\n            if (nums[i] > prev and nums[i] > nums[i + 1]) or (nums[i] < prev and nums[i] < nums[i + 1]):\n                res += 1\n            prev = nums[i]\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Equal neighbours count as one position. For each element compare with the previous different value and the next different value: both smaller = hill, both bigger = valley. Skip an element equal to the next, and only update 'previous' after a real move.",
   "frames": []
  }
 ]
};
