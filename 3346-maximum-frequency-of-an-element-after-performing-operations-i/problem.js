window.PROBLEM = {
 "id": "3346",
 "title": "Maximum Frequency of an Element After Performing Operations I",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "[1,4,5], k=1, 2 operations: 5 becomes 4 → two 4s (1 is too far to join) → 2.",
 "idea": "Pick a target t. Elements already equal to t are free; each other element within k of t can be moved onto it, but only numOperations elements may be changed. So frequency = same(t) + min(numOperations, near(t) − same(t)). Candidate targets are the element values and value ± k; count with binary search on the sorted array.",
 "input": "nums = [1,4,5], k = 1, numOperations = 2",
 "output": "2",
 "notes": [],
 "best": "Pick a target t. Elements already equal to t are free; each other element within k of t can be moved onto it, but only numOperations elements may be changed. So frequency = same(t) + min(numOperations, near(t) − same(t)). Candidate targets are the element values and value ± k; count with binary search on the sorted array.",
 "variants": [
  {
   "name": "Candidate targets with binary search counts",
   "code": "class Solution:\n    def maxFrequency(self, nums, k, numOperations):\n        nums.sort()\n        cnt = Counter(nums)\n        cand = set()\n        for x in nums:\n            cand |= {x, x - k, x + k}\n        best = 0\n        for t in cand:\n            near = bisect_right(nums, t + k) - bisect_left(nums, t - k)\n            same = cnt.get(t, 0)\n            best = max(best, same + min(numOperations, near - same))\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Pick a target t. Elements already equal to t are free; each other element within k of t can be moved onto it, but only numOperations elements may be changed. So frequency = same(t) + min(numOperations, near(t) − same(t)). Candidate targets are the element values and value ± k; count with binary search on the sorted array.",
   "frames": []
  }
 ]
};
