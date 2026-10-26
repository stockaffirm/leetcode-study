window.PROBLEM = {
 "id": "2439",
 "title": "Minimize Maximum of Array",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[3,7,1,6]: prefix averages 3, 5, 3.67→4, 4.25→5 → answer 5.",
 "idea": "An operation moves one unit from nums[i] to the element on its left, so the values can only be pushed toward the front. The best possible maximum is therefore the largest ceiling of any prefix average.",
 "input": "nums = [3,7,1,6]",
 "output": "5",
 "notes": [],
 "best": "An operation moves one unit from nums[i] to the element on its left, so the values can only be pushed toward the front. The best possible maximum is therefore the largest ceiling of any prefix average.",
 "variants": [
  {
   "name": "Maximum of the rounded-up prefix averages",
   "code": "class Solution:\n    def minimizeArrayValue(self, nums):\n        res = total = 0\n        for i, x in enumerate(nums):\n            total += x\n            res = max(res, (total + i) // (i + 1))\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "An operation moves one unit from nums[i] to the element on its left, so the values can only be pushed toward the front. The best possible maximum is therefore the largest ceiling of any prefix average.",
   "frames": []
  }
 ]
};
