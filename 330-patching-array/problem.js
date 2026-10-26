window.PROBLEM = {
 "id": "330",
 "title": "Patching Array",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "Add the fewest numbers to a sorted list so that every value from 1 to n can be made as a sum of some of its numbers.",
 "idea": "Keep 'reach' = every value up to it is already buildable. If the next list number is ≤ reach+1 it extends reach for free; otherwise patch in reach+1, which doubles the range.",
 "input": "nums [1, 3], n=6",
 "output": "1",
 "notes": [],
 "best": "Keep 'reach' = every value up to it is already buildable. If the next list number is ≤ reach+1 it extends reach for free; otherwise patch in reach+1, which doubles the range.",
 "variants": [
  {
   "name": "Greedy: extend the reachable range",
   "code": "class Solution:\n    def minPatches(self, nums, n):\n        patches, reach, i = 0, 0, 0\n        while reach < n:\n            if i < len(nums) and nums[i] <= reach + 1:\n                reach += nums[i]\n                i += 1\n            else:\n                reach += reach + 1\n                patches += 1\n        return patches",
   "time": "O(len + log n)",
   "space": "O(1)",
   "explain": "Keep 'reach' = every value up to it is already buildable. If the next list number is ≤ reach+1 it extends reach for free; otherwise patch in reach+1, which doubles the range.",
   "frames": []
  }
 ]
};
