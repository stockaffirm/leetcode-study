window.PROBLEM = {
 "id": "611",
 "title": "Valid Triangle Number",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "Count the triples of numbers in the list that can be the three sides of a triangle.",
 "idea": "Sort. Fix the longest side nums[k]; with pointers i < j below it, if nums[i] + nums[j] > nums[k] then every i' between i and j works too, so add j − i and move j down; otherwise move i up.",
 "input": "[2,2,3,4]",
 "output": "3",
 "notes": [],
 "best": "Sort. Fix the longest side nums[k]; with pointers i < j below it, if nums[i] + nums[j] > nums[k] then every i' between i and j works too, so add j − i and move j down; otherwise move i up.",
 "variants": [
  {
   "name": "Sort + two pointers",
   "code": "class Solution:\n    def triangleNumber(self, nums):\n        nums = sorted(nums)\n        count = 0\n        for k in range(len(nums) - 1, 1, -1):\n            i, j = 0, k - 1\n            while i < j:\n                if nums[i] + nums[j] > nums[k]:\n                    count += j - i\n                    j -= 1\n                else: i += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Sort. Fix the longest side nums[k]; with pointers i < j below it, if nums[i] + nums[j] > nums[k] then every i' between i and j works too, so add j − i and move j down; otherwise move i up.",
   "frames": []
  }
 ]
};
