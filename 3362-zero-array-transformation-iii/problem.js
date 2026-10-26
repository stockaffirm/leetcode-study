window.PROBLEM = {
 "id": "3362",
 "title": "Zero Array Transformation III",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "nums [2,0,2], queries [[0,2],[0,2],[1,1]]: two queries are enough, so one can be removed → 1.",
 "idea": "Sweep i from left to right. Queries starting at i go into a max-heap keyed by end. If the number of active (applied) queries covering i is less than nums[i], apply more queries from the heap choosing those that reach farthest (largest end ≥ i); if the heap runs dry return −1. Unused queries can be removed: answer = total − used.",
 "input": "nums = [2,0,2], queries = [[0,2],[0,2],[1,1]]",
 "output": "1",
 "notes": [],
 "best": "Sweep i from left to right. Queries starting at i go into a max-heap keyed by end. If the number of active (applied) queries covering i is less than nums[i], apply more queries from the heap choosing those that reach farthest (largest end ≥ i); if the heap runs dry return −1. Unused queries can be removed: answer = total − used.",
 "variants": [
  {
   "name": "Sweep with a heap of query end points",
   "code": "class Solution:\n    def maxRemoval(self, nums, queries):\n        queries.sort()\n        heap = []\n        ends = []\n        j = used = 0\n        for i, need in enumerate(nums):\n            while j < len(queries) and queries[j][0] <= i:\n                heappush(heap, -queries[j][1])\n                j += 1\n            while ends and ends[0] < i:\n                heappop(ends)\n            while len(ends) < need:\n                if not heap or -heap[0] < i:\n                    return -1\n                heappush(ends, -heappop(heap))\n                used += 1\n        return len(queries) - used",
   "time": "O((n + q) log q)",
   "space": "O(q)",
   "explain": "Sweep i from left to right. Queries starting at i go into a max-heap keyed by end. If the number of active (applied) queries covering i is less than nums[i], apply more queries from the heap choosing those that reach farthest (largest end ≥ i); if the heap runs dry return −1. Unused queries can be removed: answer = total − used.",
   "frames": []
  }
 ]
};
