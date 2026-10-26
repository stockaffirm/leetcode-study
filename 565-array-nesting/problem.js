window.PROBLEM = {
 "id": "565",
 "title": "Array Nesting",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "nums is a permutation of 0..n−1. Starting at index i, repeatedly jump to nums[i]; the set of visited numbers stops when a value repeats. Find the longest such set.",
 "idea": "A permutation splits into disjoint cycles. Walk each cycle once, marking visited numbers, and keep the largest length.",
 "input": "[5,4,0,3,1,6,2]",
 "output": "4",
 "notes": [],
 "best": "A permutation splits into disjoint cycles. Walk each cycle once, marking visited numbers, and keep the largest length.",
 "variants": [
  {
   "name": "Follow cycles of the permutation",
   "code": "class Solution:\n    def arrayNesting(self, nums):\n        seen = [False] * len(nums)\n        best = 0\n        for i in range(len(nums)):\n            length = 0\n            while not seen[i]:\n                seen[i] = True\n                i = nums[i]\n                length += 1\n            best = max(best, length)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A permutation splits into disjoint cycles. Walk each cycle once, marking visited numbers, and keep the largest length.",
   "frames": []
  }
 ]
};
