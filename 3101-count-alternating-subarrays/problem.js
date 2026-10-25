window.PROBLEM = {
 "id": "3101",
 "title": "Count Alternating Subarrays",
 "level": "Medium",
 "topic": "Array / String",
 "question": "You are given a list nums of 0s and 1s. A run of neighbouring numbers is 'alternating' if no two neighbouring numbers in it are equal. Return how many alternating runs there are (a single number counts as one). Example: [0,1,1,1] → each single number (4), and the pairs [0,1] → 5.",
 "why": "A 0/1 list. Count the runs of neighbouring numbers in which no two neighbours are equal.",
 "idea": "For each position, the number of alternating runs ENDING there equals the length of the alternating stretch ending there. Add those lengths up.",
 "input": "[0, 1, 1, 1]",
 "output": "5",
 "notes": [],
 "best": "For each position, the number of alternating runs ENDING there equals the length of the alternating stretch ending there. Add those lengths up.",
 "variants": [
  {
   "name": "Length of the alternating run ending here",
   "code": "class Solution:\n    def countAlternatingSubarrays(self, nums):\n        total = run = 0\n        prev = None\n        for x in nums:\n            run = run + 1 if prev is not None and x != prev else 1\n            total += run\n            prev = x\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For each position, the number of alternating runs ENDING there equals the length of the alternating stretch ending there. Add those lengths up.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every start",
   "tag": "Brute force",
   "code": "class Solution:\n    def countAlternatingSubarrays(self, nums):\n        n, count = len(nums), 0\n        for i in range(n):\n            j = i\n            while j < n and (j == i or nums[j] != nums[j - 1]):\n                count += 1\n                j += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "From each start extend while neighbours differ, counting each length.",
   "frames": [],
   "alt": true
  }
 ]
};
