window.PROBLEM = {
 "id": "888",
 "title": "Fair Candy Swap",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Alice [1,1], Bob [2,2]: swap 1 for 2 so both have 3 → [1,2].",
 "idea": "If Alice gives x and takes y then sumA − x + y = sumB − y + x, so y = x + (sumB − sumA) / 2. Put Bob's boxes in a set and look for the first x in Alice's list with x + delta in the set.",
 "input": "aliceSizes = [1,1], bobSizes = [2,2]",
 "output": "[1, 2]",
 "notes": [],
 "best": "If Alice gives x and takes y then sumA − x + y = sumB − y + x, so y = x + (sumB − sumA) / 2. Put Bob's boxes in a set and look for the first x in Alice's list with x + delta in the set.",
 "variants": [
  {
   "name": "The needed difference is fixed",
   "code": "class Solution:\n    def fairCandySwap(self, aliceSizes, bobSizes):\n        delta = (sum(bobSizes) - sum(aliceSizes)) // 2\n        bob = set(bobSizes)\n        for x in aliceSizes:\n            if x + delta in bob:\n                return [x, x + delta]",
   "time": "O(n + m)",
   "space": "O(m)",
   "explain": "If Alice gives x and takes y then sumA − x + y = sumB − y + x, so y = x + (sumB − sumA) / 2. Put Bob's boxes in a set and look for the first x in Alice's list with x + delta in the set.",
   "frames": []
  }
 ]
};
