window.PROBLEM = {
 "id": "565",
 "title": "Array Nesting",
 "level": "Medium",
 "topic": "Array / String",
 "question": "nums is a permutation of 0…n−1. For a start index i build the set: nums[i], nums[nums[i]], nums[nums[nums[i]]], … stopping just before a value would repeat. Return the largest size of such a set over all start indexes. Example: [5,4,0,3,1,6,2] → 4.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Follow from every start with a set",
   "tag": "Brute force",
   "code": "class Solution:\n    def arrayNesting(self, nums):\n        best = 0\n        for s in range(len(nums)):\n            seen = set()\n            i = s\n            while i not in seen:\n                seen.add(i)\n                i = nums[i]\n            best = max(best, len(seen))\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each start index follow the jumps until a repeat, using a fresh set.",
   "frames": [],
   "alt": true
  }
 ]
};
