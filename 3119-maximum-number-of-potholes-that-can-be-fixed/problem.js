window.PROBLEM = {
 "id": "3119",
 "title": "Maximum Number of Potholes That Can Be Fixed",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "road '..xxxxx', budget 4 → fix 3 of the 5 consecutive potholes (cost 3 + 1) → 3.",
 "idea": "Fixing n consecutive potholes costs n + 1, so long groups are cheaper per pothole. Sort the lengths of the groups of x in descending order. Fix whole groups while the budget allows (cost length + 1). With the leftover budget b ≥ 2, fix b − 1 potholes of the next group and stop.",
 "input": "road = \"x.x.xxx...x\", budget = 14",
 "output": "6",
 "notes": [],
 "best": "Fixing n consecutive potholes costs n + 1, so long groups are cheaper per pothole. Sort the lengths of the groups of x in descending order. Fix whole groups while the budget allows (cost length + 1). With the leftover budget b ≥ 2, fix b − 1 potholes of the next group and stop.",
 "variants": [
  {
   "name": "Fix the longest groups first, partial group with the leftover",
   "code": "class Solution:\n    def maxPotholes(self, road, budget):\n        groups = sorted((len(g) for g in road.split('.') if g), reverse=True)\n        fixed = 0\n        for g in groups:\n            if budget >= g + 1:\n                budget -= g + 1\n                fixed += g\n            else:\n                if budget >= 2:\n                    fixed += budget - 1\n                break\n        return fixed",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Fixing n consecutive potholes costs n + 1, so long groups are cheaper per pothole. Sort the lengths of the groups of x in descending order. Fix whole groups while the budget allows (cost length + 1). With the leftover budget b ≥ 2, fix b − 1 potholes of the next group and stop.",
   "frames": []
  }
 ]
};
