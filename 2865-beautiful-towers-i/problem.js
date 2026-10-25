window.PROBLEM = {
 "id": "2865",
 "title": "Beautiful Towers I",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "maxHeights[i] is the maximum height of tower i. Choose heights with 1 ≤ height[i] ≤ maxHeights[i] so that the heights form a mountain (non-decreasing up to a peak, then non-increasing). Return the maximum possible sum of heights (array up to 1000 long). Example: [5,3,4,1,1] → 13.",
 "why": "[5,3,4,1,1]: peak at index 0 → heights [5,3,3,1,1] → sum 13.",
 "idea": "Pick a peak i; going outwards each tower is the smaller of its own cap and the tower before it. Sum both sides and keep the best peak. With n up to 1000 the O(n²) scan is fine (the monotonic-stack version of part II makes it O(n)).",
 "input": "maxHeights = [5,3,4,1,1]",
 "output": "13",
 "notes": [],
 "best": "Pick a peak i; going outwards each tower is the smaller of its own cap and the tower before it. Sum both sides and keep the best peak. With n up to 1000 the O(n²) scan is fine (the monotonic-stack version of part II makes it O(n)).",
 "variants": [
  {
   "name": "Try every peak, shrink outwards",
   "code": "class Solution:\n    def maximumSumOfHeights(self, maxHeights):\n        h = maxHeights\n        n = len(h)\n        best = 0\n        for i in range(n):\n            total = cur = h[i]\n            for j in range(i - 1, -1, -1):\n                cur = min(cur, h[j])\n                total += cur\n            cur = h[i]\n            for j in range(i + 1, n):\n                cur = min(cur, h[j])\n                total += cur\n            best = max(best, total)\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Pick a peak i; going outwards each tower is the smaller of its own cap and the tower before it. Sum both sides and keep the best peak. With n up to 1000 the O(n²) scan is fine (the monotonic-stack version of part II makes it O(n)).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Monotonic stack in O(n)",
   "tag": "Optimal",
   "code": "class Solution:\n    def maximumSumOfHeights(self, maxHeights):\n        h = maxHeights\n        n = len(h)\n        left = [0] * n\n        st = []\n        for i in range(n):\n            while st and h[st[-1]] > h[i]:\n                st.pop()\n            left[i] = h[i] * (i + 1) if not st else left[st[-1]] + h[i] * (i - st[-1])\n            st.append(i)\n        right = [0] * n\n        st = []\n        for i in range(n - 1, -1, -1):\n            while st and h[st[-1]] > h[i]:\n                st.pop()\n            right[i] = h[i] * (n - i) if not st else right[st[-1]] + h[i] * (st[-1] - i)\n            st.append(i)\n        return max(left[i] + right[i] - h[i] for i in range(n))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Reuse the answer of the previous smaller tower to get the best left and right sums in one pass each.",
   "frames": [],
   "alt": true
  }
 ]
};
