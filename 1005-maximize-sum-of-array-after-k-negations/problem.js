window.PROBLEM = {
 "id": "1005",
 "title": "Maximize Sum Of Array After K Negations",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "[4,2,3], k=1: flip the smallest (2 → −2) gives 4 − 2 + 3 = 5.",
 "idea": "Each step, negate the smallest number: if it is negative this gains the most, and if every number is positive it loses the least. A min-heap hands out the smallest each time.",
 "input": "nums = [4,2,3], k = 1",
 "output": "5",
 "notes": [],
 "best": "Each step, negate the smallest number: if it is negative this gains the most, and if every number is positive it loses the least. A min-heap hands out the smallest each time.",
 "variants": [
  {
   "name": "Always flip the smallest (min-heap)",
   "code": "class Solution:\n    def largestSumAfterKNegations(self, nums, k):\n        heapify(nums)\n        for _ in range(k):\n            heappush(nums, -heappop(nums))\n        return sum(nums)",
   "time": "O(n + k log n)",
   "space": "O(1)",
   "explain": "Each step, negate the smallest number: if it is negative this gains the most, and if every number is positive it loses the least. A min-heap hands out the smallest each time.",
   "frames": []
  }
 ]
};
