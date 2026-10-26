window.PROBLEM = {
 "id": "3356",
 "title": "Zero Array Transformation II",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
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
   "frames": []
  }
 ]
};
