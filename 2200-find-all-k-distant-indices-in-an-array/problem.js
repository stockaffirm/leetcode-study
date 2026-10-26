window.PROBLEM = {
 "id": "2200",
 "title": "Find All K-Distant Indices in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "An index i is k-distant if there is an index j with |i − j| ≤ k and nums[j] == key. Return all k-distant indices in increasing order. Example: [3,4,9,1,3,9,5], key 9, k=1 → [1,2,3,4,5,6].",
 "why": "[3,4,9,1,3,9,5], key 9, k=1 → indices 1–6.",
 "idea": "For each position j where nums[j] == key mark all i with |i − j| ≤ k. Collect the marked indices in increasing order.",
 "input": "nums = [3,4,9,1,3,9,5], key = 9, k = 1",
 "output": "[1, 2, 3, 4, 5, 6]",
 "notes": [],
 "best": "For each position j where nums[j] == key mark all i with |i − j| ≤ k. Collect the marked indices in increasing order.",
 "variants": [
  {
   "name": "Mark every index within k of a key",
   "code": "class Solution:\n    def findKDistantIndices(self, nums, key, k):\n        n = len(nums)\n        marked = set()\n        for j, v in enumerate(nums):\n            if v == key:\n                marked.update(range(max(0, j - k), min(n, j + k + 1)))\n        return sorted(marked)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each position j where nums[j] == key mark all i with |i − j| ≤ k. Collect the marked indices in increasing order.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every index against every key",
   "tag": "Brute force",
   "code": "class Solution:\n    def findKDistantIndices(self, nums, key, k):\n        keys = [j for j, v in enumerate(nums) if v == key]\n        return [i for i in range(len(nums)) if any(abs(i - j) <= k for j in keys)]",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Index i is k-distant if some key is within k.",
   "frames": [],
   "alt": true
  }
 ]
};
