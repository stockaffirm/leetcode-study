window.PROBLEM = {
 "id": "740",
 "title": "Delete and Earn",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[3,4,2]: take 4 (earn 4), which deletes 3; then take 2 → 6.",
 "idea": "Taking value v earns v × count(v) but forbids v−1 and v+1. Sum the points per value and run house robber over the values 1 … max: best[v] = max(best[v−1], best[v−2] + points[v]).",
 "input": "nums = [3,4,2]",
 "output": "6",
 "notes": [],
 "best": "Taking value v earns v × count(v) but forbids v−1 and v+1. Sum the points per value and run house robber over the values 1 … max: best[v] = max(best[v−1], best[v−2] + points[v]).",
 "variants": [
  {
   "name": "House robber over the values",
   "code": "class Solution:\n    def deleteAndEarn(self, nums):\n        pts = [0] * (max(nums) + 1)\n        for x in nums:\n            pts[x] += x\n        take, skip = 0, 0\n        for v in pts:\n            take, skip = skip + v, max(take, skip)\n        return max(take, skip)",
   "time": "O(n + max)",
   "space": "O(max)",
   "explain": "Taking value v earns v × count(v) but forbids v−1 and v+1. Sum the points per value and run house robber over the values 1 … max: best[v] = max(best[v−1], best[v−2] + points[v]).",
   "frames": []
  }
 ]
};
