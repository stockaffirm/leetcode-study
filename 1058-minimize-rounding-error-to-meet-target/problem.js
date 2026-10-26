window.PROBLEM = {
 "id": "1058",
 "title": "Minimize Rounding Error to Meet Target",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
