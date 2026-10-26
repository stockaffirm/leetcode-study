window.PROBLEM = {
 "id": "2210",
 "title": "Count Hills and Valleys in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A hill is an element whose closest different neighbours on both sides are smaller; a valley has bigger different neighbours. Equal neighbouring numbers count as one position. Return the number of hills plus valleys. Example: [2,4,1,1,6,5] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remove equal neighbours first",
   "tag": "Alternative",
   "code": "class Solution:\n    def countHillValley(self, nums):\n        a = [x for i, x in enumerate(nums) if i == 0 or x != nums[i - 1]]\n        res = 0\n        for i in range(1, len(a) - 1):\n            if (a[i] > a[i - 1] and a[i] > a[i + 1]) or (a[i] < a[i - 1] and a[i] < a[i + 1]):\n                res += 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Squash runs of equal numbers into one, then every inner element is a hill or a valley or neither.",
   "frames": [],
   "alt": true
  }
 ]
};
