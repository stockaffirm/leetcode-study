window.PROBLEM = {
 "id": "2866",
 "title": "Beautiful Towers II",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "maxHeights[i] is the maximum height of tower i. Choose heights with 1 ≤ height[i] ≤ maxHeights[i] so that the heights form a mountain (non-decreasing up to a peak, then non-increasing). Return the maximum possible sum of heights (array up to 100 000 long). Example: [5,3,4,1,1] → 13.",
 "why": "[5,3,4,1,1]: peak at index 0 → heights [5,3,3,1,1] → sum 13.",
 "idea": "Choose the peak i. To its left heights must not decrease toward i and stay ≤ maxHeights, so each tower is capped by the minimum since it. A monotonic stack gives left[i] = best sum of 0..i when i is the right end of a non-decreasing run: reuse left of the previous smaller tower. Do the same from the right and answer max(left[i] + right[i] − h[i]).",
 "input": "maxHeights = [5,3,4,1,1]",
 "output": "13",
 "notes": [],
 "best": "Choose the peak i. To its left heights must not decrease toward i and stay ≤ maxHeights, so each tower is capped by the minimum since it. A monotonic stack gives left[i] = best sum of 0..i when i is the right end of a non-decreasing run: reuse left of the previous smaller tower. Do the same from the right and answer max(left[i] + right[i] − h[i]).",
 "variants": [
  {
   "name": "Monotonic stack: best left and right sums",
   "code": "class Solution:\n    def maximumSumOfHeights(self, maxHeights):\n        h = maxHeights\n        n = len(h)\n        left = [0] * n\n        st = []\n        for i in range(n):\n            while st and h[st[-1]] > h[i]:\n                st.pop()\n            left[i] = h[i] * (i + 1) if not st else left[st[-1]] + h[i] * (i - st[-1])\n            st.append(i)\n        right = [0] * n\n        st = []\n        for i in range(n - 1, -1, -1):\n            while st and h[st[-1]] > h[i]:\n                st.pop()\n            right[i] = h[i] * (n - i) if not st else right[st[-1]] + h[i] * (st[-1] - i)\n            st.append(i)\n        return max(left[i] + right[i] - h[i] for i in range(n))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Choose the peak i. To its left heights must not decrease toward i and stay ≤ maxHeights, so each tower is capped by the minimum since it. A monotonic stack gives left[i] = best sum of 0..i when i is the right end of a non-decreasing run: reuse left of the previous smaller tower. Do the same from the right and answer max(left[i] + right[i] − h[i]).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every peak",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumSumOfHeights(self, maxHeights):\n        h = maxHeights\n        n = len(h)\n        best = 0\n        for i in range(n):\n            total = cur = h[i]\n            for j in range(i - 1, -1, -1):\n                cur = min(cur, h[j])\n                total += cur\n            cur = h[i]\n            for j in range(i + 1, n):\n                cur = min(cur, h[j])\n                total += cur\n            best = max(best, total)\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For each peak shrink heights outwards and sum; too slow for the largest input but a good check.",
   "frames": [],
   "alt": true
  }
 ]
};
