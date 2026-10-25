window.PROBLEM = {
 "id": "259",
 "title": "3Sum Smaller",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "Count the index triples i < j < k with nums[i] + nums[j] + nums[k] < target. Example: [-2,0,1,3], target 2 → 2.",
 "why": "[-2,0,1,3], target 2: triples (-2,0,1) and (-2,0,3) are below 2 → 2.",
 "idea": "Sort the array. Fix the first number, then use two pointers: if nums[i] + nums[l] + nums[r] < target, then every index between l and r also works with l, so add r − l and move l; otherwise move r.",
 "input": "nums = [-2,0,1,3], target = 2",
 "output": "2",
 "notes": [],
 "best": "Sort the array. Fix the first number, then use two pointers: if nums[i] + nums[l] + nums[r] < target, then every index between l and r also works with l, so add r − l and move l; otherwise move r.",
 "variants": [
  {
   "name": "Sort and count with two pointers",
   "code": "class Solution:\n    def threeSumSmaller(self, nums, target):\n        nums.sort()\n        res = 0\n        for i in range(len(nums) - 2):\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                if nums[i] + nums[l] + nums[r] < target:\n                    res += r - l\n                    l += 1\n                else:\n                    r -= 1\n        return res",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Sort the array. Fix the first number, then use two pointers: if nums[i] + nums[l] + nums[r] < target, then every index between l and r also works with l, so add r − l and move l; otherwise move r.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every triple",
   "tag": "Brute force",
   "code": "class Solution:\n    def threeSumSmaller(self, nums, target):\n        n = len(nums)\n        return sum(nums[i] + nums[j] + nums[k] < target for i in range(n) for j in range(i + 1, n) for k in range(j + 1, n))",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Try all index triples i < j < k.",
   "frames": [],
   "alt": true
  }
 ]
};
