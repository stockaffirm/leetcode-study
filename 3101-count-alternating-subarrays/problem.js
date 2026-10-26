window.PROBLEM = {
 "id": "3101",
 "title": "Count Alternating Subarrays",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
