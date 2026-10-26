window.PROBLEM = {
 "id": "441",
 "title": "Arranging Coins",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "",
 "why": "5 coins: rows of 1, 2, 2 → 2 full rows (the 3rd row would need 3).",
 "idea": "k full rows need k(k+1)/2 coins. That grows with k, so binary search the largest k with k(k+1)/2 ≤ n.",
 "input": "n = 5",
 "output": "2",
 "notes": [],
 "best": "k full rows need k(k+1)/2 coins. That grows with k, so binary search the largest k with k(k+1)/2 ≤ n.",
 "variants": [
  {
   "name": "Binary search the number of rows",
   "code": "class Solution:\n    def arrangeCoins(self, n):\n        lo, hi = 0, n\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if mid * (mid + 1) // 2 <= n:\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "k full rows need k(k+1)/2 coins. That grows with k, so binary search the largest k with k(k+1)/2 ≤ n.",
   "frames": []
  }
 ]
};
