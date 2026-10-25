window.PROBLEM = {
 "id": "740",
 "title": "Delete and Earn",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Taking a number from nums earns you its value points and deletes every copy of value−1 and value+1. Return the maximum points you can earn. Example: [3,4,2] → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoised recursion over values",
   "tag": "Alternative",
   "code": "class Solution:\n    def deleteAndEarn(self, nums):\n        cnt = Counter(nums)\n        vals = sorted(cnt)\n        @lru_cache(None)\n        def go(i):\n            if i >= len(vals):\n                return 0\n            take = vals[i] * cnt[vals[i]]\n            j = i + 1\n            if j < len(vals) and vals[j] == vals[i] + 1:\n                j += 1\n            return max(go(i + 1), take + go(j))\n        return go(0)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the distinct values; at each value either take it (skipping a neighbour value) or skip it.",
   "frames": [],
   "alt": true
  }
 ]
};
