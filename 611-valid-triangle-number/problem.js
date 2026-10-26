window.PROBLEM = {
 "id": "611",
 "title": "Valid Triangle Number",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "Count the triples of numbers (taken from different positions) of the list that could be the side lengths of a triangle, i.e. each side is shorter than the sum of the other two. Example: [2,2,3,4] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every triple",
   "tag": "Brute force",
   "code": "class Solution:\n    def triangleNumber(self, nums):\n        count = 0\n        for a, b, c in combinations(sorted(nums), 3):\n            if a + b > c: count += 1\n        return count",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Test the triangle inequality for every triple.",
   "frames": [],
   "alt": true
  }
 ]
};
