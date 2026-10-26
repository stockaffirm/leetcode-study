window.PROBLEM = {
 "id": "3362",
 "title": "Zero Array Transformation III",
 "level": "Medium",
 "topic": "Heap",
 "question": "Each query [l, r] may decrement each element in its range by at most 1. Remove as many queries as possible while nums can still become all zeros using the rest; return the number removed, or −1 if even all queries are not enough. Example: nums [2,0,2], queries [[0,2],[0,2],[1,1]] → 1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try removing every subset of queries",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxRemoval(self, nums, queries):\n        q = len(queries)\n        best = -1\n        for mask in range(1 << q):\n            cover = [0] * len(nums)\n            kept = 0\n            for t in range(q):\n                if mask >> t & 1:\n                    kept += 1\n                    for i in range(queries[t][0], queries[t][1] + 1):\n                        cover[i] += 1\n            if all(c >= x for c, x in zip(cover, nums)):\n                best = max(best, q - kept)\n        return best",
   "time": "O(2^q·(n+q))",
   "space": "O(n)",
   "explain": "Only for tiny inputs: test each subset of kept queries.",
   "frames": [],
   "alt": true
  }
 ]
};
