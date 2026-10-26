window.PROBLEM = {
 "id": "3347",
 "title": "Maximum Frequency of an Element After Performing Operations II",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "[5,11,20,20], k=5, 1 operation: the two 20s are already equal → frequency 2.",
 "idea": "Choose a target value t. Elements already equal to t cost nothing; each other element within distance k of t can be moved onto it, but only numOperations of them may be. So the frequency is same(t) + min(numOperations, near(t) − same(t)). The best target is an element value, or a value x±k (where a window starts or ends), so test those candidates, counting with binary search on the sorted array.",
 "input": "nums = [5,11,20,20], k = 5, numOperations = 1",
 "output": "2",
 "notes": [],
 "best": "Choose a target value t. Elements already equal to t cost nothing; each other element within distance k of t can be moved onto it, but only numOperations of them may be. So the frequency is same(t) + min(numOperations, near(t) − same(t)). The best target is an element value, or a value x±k (where a window starts or ends), so test those candidates, counting with binary search on the sorted array.",
 "variants": [
  {
   "name": "Candidate targets with binary search counts",
   "code": "class Solution:\n    def maxFrequency(self, nums, k, numOperations):\n        nums.sort()\n        cnt = Counter(nums)\n        cand = set()\n        for x in nums:\n            cand |= {x, x - k, x + k}\n        best = 0\n        for t in cand:\n            near = bisect_right(nums, t + k) - bisect_left(nums, t - k)\n            same = cnt.get(t, 0)\n            best = max(best, same + min(numOperations, near - same))\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Choose a target value t. Elements already equal to t cost nothing; each other element within distance k of t can be moved onto it, but only numOperations of them may be. So the frequency is same(t) + min(numOperations, near(t) − same(t)). The best target is an element value, or a value x±k (where a window starts or ends), so test those candidates, counting with binary search on the sorted array.",
   "frames": []
  }
 ]
};
