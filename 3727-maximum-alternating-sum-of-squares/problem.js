window.PROBLEM = {
 "id": "3727",
 "title": "Maximum Alternating Sum of Squares",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[1,2,3] → squares 9, 4, 1: 2 plus slots, 1 minus → 9 + 4 − 1 = 12.",
 "idea": "Only the squares matter. In the alternating sum, ceil(n/2) values are added and floor(n/2) subtracted. Put the largest squares on the plus positions: sort the squares in descending order and add the first ceil(n/2), subtract the rest.",
 "input": "nums = [1,2,3]",
 "output": "12",
 "notes": [],
 "best": "Only the squares matter. In the alternating sum, ceil(n/2) values are added and floor(n/2) subtracted. Put the largest squares on the plus positions: sort the squares in descending order and add the first ceil(n/2), subtract the rest.",
 "variants": [
  {
   "name": "Largest squares on the plus positions",
   "code": "class Solution:\n    def maxAlternatingSum(self, nums):\n        sq = sorted((x * x for x in nums), reverse=True)\n        plus = (len(sq) + 1) // 2\n        return sum(sq[:plus]) - sum(sq[plus:])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Only the squares matter. In the alternating sum, ceil(n/2) values are added and floor(n/2) subtracted. Put the largest squares on the plus positions: sort the squares in descending order and add the first ceil(n/2), subtract the rest.",
   "frames": []
  }
 ]
};
