window.PROBLEM = {
 "id": "3356",
 "title": "Zero Array Transformation II",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "For each query [l, r, v], every index from l to r may be decreased by any amount from 0 to v (chosen separately per index). Return the smallest number of queries, taken from the start of the list in order, that can make the whole array zero (−1 if even all of them cannot). Example: nums [2,0,2], queries [[0,2,1],[0,2,1],[1,1,3]] → 2.",
 "why": "nums [2,0,2]: after the first 2 queries every cell can lose up to 2, which covers the two 2s. So 2 queries are enough.",
 "idea": "Checking whether the first k queries are enough is easy with a difference array: each query adds capacity v on [l, r] and every cell needs capacity ≥ its value. More queries never hurt, so binary search the smallest k.",
 "input": "nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]",
 "output": "2",
 "notes": [],
 "best": "Checking whether the first k queries are enough is easy with a difference array: each query adds capacity v on [l, r] and every cell needs capacity ≥ its value. More queries never hurt, so binary search the smallest k.",
 "variants": [
  {
   "name": "Binary search on k + difference array",
   "code": "class Solution:\n    def minZeroArray(self, nums, queries):\n        n = len(nums)\n        def ok(k):\n            diff = [0] * (n + 1)\n            for l, r, v in queries[:k]:\n                diff[l] += v\n                diff[r + 1] -= v\n            cur = 0\n            for i in range(n):\n                cur += diff[i]\n                if cur < nums[i]:\n                    return False\n            return True\n        if not ok(len(queries)):\n            return -1\n        lo, hi = 0, len(queries)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O((n+q) log q)",
   "space": "O(n)",
   "explain": "Checking whether the first k queries are enough is easy with a difference array: each query adds capacity v on [l, r] and every cell needs capacity ≥ its value. More queries never hurt, so binary search the smallest k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sweep with a running capacity",
   "tag": "Alternative",
   "code": "class Solution:\n    def minZeroArray(self, nums, queries):\n        n = len(nums)\n        diff = [0] * (n + 1)\n        total = k = 0\n        for i in range(n):\n            total += diff[i]\n            while total < nums[i]:\n                if k == len(queries):\n                    return -1\n                l, r, v = queries[k]\n                k += 1\n                if r < i:\n                    continue\n                if l <= i:\n                    total += v\n                else:\n                    diff[l] += v\n                diff[r + 1] -= v\n        return k",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "Go left to right; whenever the capacity at a cell is too small, apply the next query to it.",
   "frames": [],
   "alt": true
  }
 ]
};
