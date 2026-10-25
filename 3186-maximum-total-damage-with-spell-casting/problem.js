window.PROBLEM = {
 "id": "3186",
 "title": "Maximum Total Damage With Spell Casting",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Each spell has a damage value. If you cast a spell with damage p you cannot cast any spell with damage p−2, p−1, p+1 or p+2 (spells with the same damage are fine). Return the maximum total damage. Example: [1,1,3,4] → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sorted values with a pointer",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumTotalDamage(self, power):\n        cnt = Counter(power)\n        vals = sorted(cnt)\n        best = [0] * (len(vals) + 1)\n        j = 0\n        for i, v in enumerate(vals):\n            while vals[j] < v - 2:\n                j += 1\n            best[i + 1] = max(best[i], best[j] + v * cnt[v])\n        return best[-1]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Same DP with a moving pointer instead of bisect.",
   "frames": [],
   "alt": true
  }
 ]
};
