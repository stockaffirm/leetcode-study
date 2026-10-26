window.PROBLEM = {
 "id": "16",
 "title": "3Sum Closest",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "[-1,2,1,-4], target 1: the triple −1 + 2 + 1 = 2 is the closest sum to 1.",
 "idea": "Sort the numbers. Fix one number and move two pointers inward from both ends: if the sum is too small move the left one up, if too big move the right one down. Remember the sum closest to the target.",
 "input": "nums = [-1,2,1,-4], target = 1",
 "output": "2",
 "notes": [],
 "best": "Sort the numbers. Fix one number and move two pointers inward from both ends: if the sum is too small move the left one up, if too big move the right one down. Remember the sum closest to the target.",
 "variants": [
  {
   "name": "Sort + two pointers",
   "code": "class Solution:\n    def threeSumClosest(self, nums, target):\n        nums.sort()\n        best = nums[0] + nums[1] + nums[2]\n        for i in range(len(nums) - 2):\n            l, r = i + 1, len(nums) - 1\n            while l < r:\n                s = nums[i] + nums[l] + nums[r]\n                if abs(s - target) < abs(best - target):\n                    best = s\n                if s < target:\n                    l += 1\n                elif s > target:\n                    r -= 1\n                else:\n                    return s\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Sort the numbers. Fix one number and move two pointers inward from both ends: if the sum is too small move the left one up, if too big move the right one down. Remember the sum closest to the target.",
   "frames": []
  }
 ]
};
