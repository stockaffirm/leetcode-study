window.PROBLEM = {
 "id": "2824",
 "title": "Count Pairs Whose Sum is Less than Target",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "[-1,1,2,3,1], target 2: the pairs (−1,1), (−1,2) and (−1,1) → 3.",
 "idea": "Sort. If nums[l] + nums[r] < target then all of nums[l+1…r] also pair with nums[l]: add r − l and move l. Otherwise move r down.",
 "input": "nums = [-1,1,2,3,1], target = 2",
 "output": "3",
 "notes": [],
 "best": "Sort. If nums[l] + nums[r] < target then all of nums[l+1…r] also pair with nums[l]: add r − l and move l. Otherwise move r down.",
 "variants": [
  {
   "name": "Sort + two pointers",
   "code": "class Solution:\n    def countPairs(self, nums, target):\n        nums.sort()\n        l, r = 0, len(nums) - 1\n        res = 0\n        while l < r:\n            if nums[l] + nums[r] < target:\n                res += r - l\n                l += 1\n            else:\n                r -= 1\n        return res",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort. If nums[l] + nums[r] < target then all of nums[l+1…r] also pair with nums[l]: add r − l and move l. Otherwise move r down.",
   "frames": []
  }
 ]
};
