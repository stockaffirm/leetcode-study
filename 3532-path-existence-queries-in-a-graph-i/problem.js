window.PROBLEM = {
 "id": "3532",
 "title": "Path Existence Queries in a Graph I",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "nums [2,5,6,8], maxDiff 2: components {0}, {1,2,3} → query (1,3) true.",
 "idea": "Nodes i and j are adjacent if |nums[i] − nums[j]| ≤ maxDiff and nums is sorted, so connected components are contiguous index ranges: start a new component whenever two consecutive values differ by more than maxDiff. A query is true when both nodes share a component id.",
 "input": "n = 4, nums = [2,5,6,8], maxDiff = 2, queries = [[0,1],[0,2],[1,3],[2,3]]",
 "output": "[False, False, True, True]",
 "notes": [],
 "best": "Nodes i and j are adjacent if |nums[i] − nums[j]| ≤ maxDiff and nums is sorted, so connected components are contiguous index ranges: start a new component whenever two consecutive values differ by more than maxDiff. A query is true when both nodes share a component id.",
 "variants": [
  {
   "name": "Sorted values form contiguous components",
   "code": "class Solution:\n    def pathExistenceQueries(self, n, nums, maxDiff, queries):\n        comp = [0] * n\n        for i in range(1, n):\n            comp[i] = comp[i - 1] + (nums[i] - nums[i - 1] > maxDiff)\n        return [comp[u] == comp[v] for u, v in queries]",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "Nodes i and j are adjacent if |nums[i] − nums[j]| ≤ maxDiff and nums is sorted, so connected components are contiguous index ranges: start a new component whenever two consecutive values differ by more than maxDiff. A query is true when both nodes share a component id.",
   "frames": []
  }
 ]
};
