window.PROBLEM = {
 "id": "3540",
 "title": "Minimum Time to Visit All Houses",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "Three houses in a circle: 0→1 forward costs 1, 1→2 costs 4 (or 5 backward), 2→0 costs 3 backward, 0→2 costs 4 backward → 12.",
 "idea": "Houses sit on a circle; from a to b you can go forward or backward. Build prefix sums over the forward and backward costs (doubled so they wrap around) and take the cheaper direction for every consecutive pair of the visit order, starting at house 0.",
 "input": "forward = [1,4,4], backward = [4,1,2], queries = [1,2,0,2]",
 "output": "12",
 "notes": [],
 "best": "Houses sit on a circle; from a to b you can go forward or backward. Build prefix sums over the forward and backward costs (doubled so they wrap around) and take the cheaper direction for every consecutive pair of the visit order, starting at house 0.",
 "variants": [
  {
   "name": "Circular prefix sums for both directions",
   "code": "class Solution:\n    def minTotalTime(self, forward, backward, queries):\n        n = len(forward)\n        F = [0]\n        B = [0]\n        for i in range(2 * n):\n            F.append(F[-1] + forward[i % n])\n            B.append(B[-1] + backward[i % n])\n        total = 0\n        cur = 0\n        for q in queries:\n            if q != cur:\n                f = F[q if q > cur else q + n] - F[cur]\n                b = B[cur + 1 if cur > q else cur + n + 1] - B[q + 1]\n                total += min(f, b)\n            cur = q\n        return total",
   "time": "O(n + m)",
   "space": "O(n)",
   "explain": "Houses sit on a circle; from a to b you can go forward or backward. Build prefix sums over the forward and backward costs (doubled so they wrap around) and take the cheaper direction for every consecutive pair of the visit order, starting at house 0.",
   "frames": []
  }
 ]
};
