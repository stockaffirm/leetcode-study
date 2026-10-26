window.PROBLEM = {
 "id": "2865",
 "title": "Beautiful Towers I",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
