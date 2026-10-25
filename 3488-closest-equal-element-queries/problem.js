window.PROBLEM = {
 "id": "3488",
 "title": "Closest Equal Element Queries",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "nums is a circular array (the last element is next to the first). For each query index, return the smallest circular distance to another index holding the same value, or −1 if there is none. Example: [1,3,1,4,1,3,2], queries [0,3,5] → [2,−1,3].",
 "why": "[1,3,1,4,1,3,2]: query index 0 (value 1): the closest other 1 is at index 2 → 2. Index 3 (value 4) is alone → −1.",
 "idea": "The array is circular. Group the indices of each value in order; the closest equal element to an index is one of its two neighbours in that group (wrapping around). Compute the circular distance to both and keep the smaller.",
 "input": "nums = [1,3,1,4,1,3,2], queries = [0,3,5]",
 "output": "[2, -1, 3]",
 "notes": [],
 "best": "The array is circular. Group the indices of each value in order; the closest equal element to an index is one of its two neighbours in that group (wrapping around). Compute the circular distance to both and keep the smaller.",
 "variants": [
  {
   "name": "Neighbours in each value's index list",
   "code": "class Solution:\n    def solveQueries(self, nums, queries):\n        n = len(nums)\n        pos = defaultdict(list)\n        for i, x in enumerate(nums):\n            pos[x].append(i)\n        best = {}\n        for lst in pos.values():\n            m = len(lst)\n            if m == 1:\n                continue\n            for j, i in enumerate(lst):\n                d = n\n                for o in (lst[j - 1], lst[(j + 1) % m]):\n                    gap = abs(i - o)\n                    d = min(d, gap, n - gap)\n                best[i] = d\n        return [best.get(q, -1) for q in queries]",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "The array is circular. Group the indices of each value in order; the closest equal element to an index is one of its two neighbours in that group (wrapping around). Compute the circular distance to both and keep the smaller.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan for each query",
   "tag": "Brute force",
   "code": "class Solution:\n    def solveQueries(self, nums, queries):\n        n = len(nums)\n        res = []\n        for q in queries:\n            d = n\n            for j in range(n):\n                if j != q and nums[j] == nums[q]:\n                    gap = abs(j - q)\n                    d = min(d, gap, n - gap)\n            res.append(d if d < n else -1)\n        return res",
   "time": "O(q·n)",
   "space": "O(1)",
   "explain": "For every query walk over all other indices with the same value and keep the smallest circular distance.",
   "frames": [],
   "alt": true
  }
 ]
};
