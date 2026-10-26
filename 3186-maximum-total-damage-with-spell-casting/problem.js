window.PROBLEM = {
 "id": "3186",
 "title": "Maximum Total Damage With Spell Casting",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,1,3,4]: cast both 1s and the 4 → 6 (3 is too close to both 1 and 4).",
 "idea": "Casting a spell with damage p blocks any spell with damage p−2 … p+2, but spells with the same damage can all be cast. Group by value: taking value v earns v × count(v) and excludes the previous two smaller values. Over the sorted distinct values: best[i] = max(best[i−1], best[j] + v × count) where j counts the values at least 3 below v.",
 "input": "power = [1,1,3,4]",
 "output": "6",
 "notes": [],
 "best": "Casting a spell with damage p blocks any spell with damage p−2 … p+2, but spells with the same damage can all be cast. Group by value: taking value v earns v × count(v) and excludes the previous two smaller values. Over the sorted distinct values: best[i] = max(best[i−1], best[j] + v × count) where j counts the values at least 3 below v.",
 "variants": [
  {
   "name": "House-robber over distinct damage values",
   "code": "class Solution:\n    def maximumTotalDamage(self, power):\n        cnt = Counter(power)\n        vals = sorted(cnt)\n        best = [0] * (len(vals) + 1)\n        for i, v in enumerate(vals):\n            j = bisect_left(vals, v - 2)\n            best[i + 1] = max(best[i], best[j] + v * cnt[v])\n        return best[-1]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Casting a spell with damage p blocks any spell with damage p−2 … p+2, but spells with the same damage can all be cast. Group by value: taking value v earns v × count(v) and excludes the previous two smaller values. Over the sorted distinct values: best[i] = max(best[i−1], best[j] + v × count) where j counts the values at least 3 below v.",
   "frames": []
  }
 ]
};
