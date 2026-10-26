window.PROBLEM = {
 "id": "378",
 "title": "Kth Smallest Element in a Sorted Matrix",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "An n×n matrix has every row and every column sorted ascending. Return the k-th smallest number in the whole matrix (counting duplicates; k starts at 1). Example: [[1,5,9],[10,11,13],[12,13,15]], k=8 → 13.",
 "why": "Every row and every column of an n×n matrix is sorted ascending. Find the k-th smallest number.",
 "idea": "Guess a value v and count the numbers ≤ v by walking from the bottom-left corner (move up when too big, right otherwise). Binary search the smallest v whose count is at least k.",
 "input": "[[1,5,9],[10,11,13],[12,13,15]], k=8",
 "output": "13",
 "notes": [],
 "best": "Guess a value v and count the numbers ≤ v by walking from the bottom-left corner (move up when too big, right otherwise). Binary search the smallest v whose count is at least k.",
 "variants": [
  {
   "name": "Binary search on the value",
   "code": "class Solution:\n    def kthSmallest(self, matrix, k):\n        n = len(matrix)\n        def count(v):\n            r, c, total = n - 1, 0, 0\n            while r >= 0 and c < n:\n                if matrix[r][c] <= v:\n                    total += r + 1\n                    c += 1\n                else: r -= 1\n            return total\n        lo, hi = matrix[0][0], matrix[-1][-1]\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if count(mid) >= k: hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(n log(max−min))",
   "space": "O(1)",
   "explain": "Guess a value v and count the numbers ≤ v by walking from the bottom-left corner (move up when too big, right otherwise). Binary search the smallest v whose count is at least k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Min-heap over the rows",
   "tag": "Alternative",
   "code": "class Solution:\n    def kthSmallest(self, matrix, k):\n        n = len(matrix)\n        heap = [(matrix[i][0], i, 0) for i in range(n)]\n        heapify(heap)\n        for _ in range(k - 1):\n            v, i, j = heappop(heap)\n            if j + 1 < n: heappush(heap, (matrix[i][j + 1], i, j + 1))\n        return heap[0][0]",
   "time": "O(k log n)",
   "space": "O(n)",
   "explain": "Pop the smallest k times, each pop pushing the next element of its row.",
   "frames": [],
   "alt": true
  }
 ]
};
