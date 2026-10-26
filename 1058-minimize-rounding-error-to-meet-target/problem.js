window.PROBLEM = {
 "id": "1058",
 "title": "Minimize Rounding Error to Meet Target",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You are given a list of prices written as decimals and a target whole number. Round every price either DOWN (floor) or UP (ceiling) so that the rounded prices add up exactly to the target. The rounding error of a price is |rounded − original|. Return the smallest possible total error written with 3 decimals, or '-1' if the target cannot be reached. Example: ['0.700','2.800','4.900'], target 8 → round 0.7 down to 0, 2.8 up to 3 and 4.9 up to 5; errors 0.7 + 0.2 + 0.1 = 1.0 → '1.000'.",
 "why": "Round each price up or down so the rounded prices add up to the target, with the smallest total rounding error.",
 "idea": "Floor every price first; the target tells how many must be rounded UP. Round up the ones with the biggest fractional parts (cheapest in error). If the target is outside the possible range, answer −1.",
 "input": "[\"0.700\",\"2.800\",\"4.900\"], target 8",
 "output": "\"1.000\"",
 "notes": [],
 "best": "Floor every price first; the target tells how many must be rounded UP. Round up the ones with the biggest fractional parts (cheapest in error). If the target is outside the possible range, answer −1.",
 "variants": [
  {
   "name": "Floor everything, round the largest fractions up",
   "code": "class Solution:\n    def minimizeError(self, prices, target):\n        floors, fracs = 0, []\n        for p in prices:\n            v = float(p)\n            f = int(v)\n            floors += f\n            if v != f: fracs.append(v - f)\n        ceilings = floors + len(fracs)\n        if not floors <= target <= ceilings: return '-1'\n        up = target - floors\n        fracs.sort(reverse=True)\n        err = sum(1 - f for f in fracs[:up]) + sum(fracs[up:])\n        return '%.3f' % err",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Floor every price first; the target tells how many must be rounded UP. Round up the ones with the biggest fractional parts (cheapest in error). If the target is outside the possible range, answer −1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every rounding choice",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimizeError(self, prices, target):\n        vals = [float(p) for p in prices]\n        best = float('inf')\n        for mask in range(1 << len(vals)):\n            total, err = 0, 0.0\n            for i, v in enumerate(vals):\n                if mask >> i & 1:\n                    total += ceil(v)\n                    err += ceil(v) - v\n                else:\n                    total += floor(v)\n                    err += v - floor(v)\n            if total == target: best = min(best, err)\n        return '%.3f' % best if best != float('inf') else '-1'",
   "time": "O(2ⁿ·n)",
   "space": "O(n)",
   "explain": "Round every price up or down in every possible way and keep the best that hits the target.",
   "frames": [],
   "alt": true
  }
 ]
};
