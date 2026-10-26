window.PROBLEM = {
 "id": "18",
 "title": "4Sum",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "Find every set of four numbers that add up to the target, without listing the same set twice.",
 "idea": "Sort first. Fix the first two numbers with two loops (skipping repeats), then close in on the last two with a left and a right pointer.",
 "input": "[1, 0, -1, 0, -2, 2], target=0",
 "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]",
 "notes": [],
 "best": "Sort first. Fix the first two numbers with two loops (skipping repeats), then close in on the last two with a left and a right pointer.",
 "variants": [
  {
   "name": "Sort + two nested loops + two pointers",
   "code": "class Solution:\n    def fourSum(self, nums, target):\n        nums.sort()\n        n, ans = len(nums), []\n        for i in range(n - 3):\n            if i and nums[i] == nums[i - 1]: continue\n            for j in range(i + 1, n - 2):\n                if j > i + 1 and nums[j] == nums[j - 1]: continue\n                lo, hi = j + 1, n - 1\n                while lo < hi:\n                    s = nums[i] + nums[j] + nums[lo] + nums[hi]\n                    if s == target:\n                        ans.append([nums[i], nums[j], nums[lo], nums[hi]])\n                        lo += 1\n                        hi -= 1\n                        while lo < hi and nums[lo] == nums[lo - 1]: lo += 1\n                    elif s < target: lo += 1\n                    else: hi -= 1\n        return ans",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Sort first. Fix the first two numbers with two loops (skipping repeats), then close in on the last two with a left and a right pointer.",
   "frames": []
  }
 ]
};
