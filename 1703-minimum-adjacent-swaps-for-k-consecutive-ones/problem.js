window.PROBLEM = {
 "id": "1703",
 "title": "Minimum Adjacent Swaps for K Consecutive Ones",
 "level": "Hard",
 "topic": "Prefix Sum",
 "question": "",
 "why": "nums [1,0,0,1,0,1], k=2 → 1 swap.",
 "idea": "Take the positions of the 1s and subtract their rank (pos[i] − i): this removes the spacing the 1s already keep between them. Gathering k consecutive ones then means moving k of these shifted positions to one common value; the cheapest is the median. Slide a window of k positions and compute the cost with prefix sums.",
 "input": "nums = [1,0,0,1,0,1], k = 2",
 "output": "1",
 "notes": [],
 "best": "Take the positions of the 1s and subtract their rank (pos[i] − i): this removes the spacing the 1s already keep between them. Gathering k consecutive ones then means moving k of these shifted positions to one common value; the cheapest is the median. Slide a window of k positions and compute the cost with prefix sums.",
 "variants": [
  {
   "name": "Shift the positions, gather around the median",
   "code": "class Solution:\n    def minMoves(self, nums, k):\n        if k == 1:\n            return 0\n        pos = [i for i, v in enumerate(nums) if v]\n        p = [pos[i] - i for i in range(len(pos))]\n        pre = [0]\n        for x in p:\n            pre.append(pre[-1] + x)\n        best = float('inf')\n        for i in range(len(p) - k + 1):\n            mid = i + k // 2\n            med = p[mid]\n            left = med * (mid - i) - (pre[mid] - pre[i])\n            right = (pre[i + k] - pre[mid + 1]) - med * (i + k - mid - 1)\n            best = min(best, left + right)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Take the positions of the 1s and subtract their rank (pos[i] − i): this removes the spacing the 1s already keep between them. Gathering k consecutive ones then means moving k of these shifted positions to one common value; the cheapest is the median. Slide a window of k positions and compute the cost with prefix sums.",
   "frames": []
  }
 ]
};
