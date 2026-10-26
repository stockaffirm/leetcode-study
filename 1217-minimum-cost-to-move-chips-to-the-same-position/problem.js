window.PROBLEM = {
 "id": "1217",
 "title": "Minimum Cost to Move Chips to The Same Position",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "positions [2,2,2,3,3]: move the two chips on 3 to 2 (cost 1 each) → 2.",
 "idea": "Moving a chip by 2 is free and by 1 costs 1. So every chip can reach any position with the same parity for free; the answer is the smaller of the count of chips on even positions and on odd positions.",
 "input": "position = [2,2,2,3,3]",
 "output": "2",
 "notes": [],
 "best": "Moving a chip by 2 is free and by 1 costs 1. So every chip can reach any position with the same parity for free; the answer is the smaller of the count of chips on even positions and on odd positions.",
 "variants": [
  {
   "name": "Only parity matters",
   "code": "class Solution:\n    def minCostToMoveChips(self, position):\n        odd = sum(p % 2 for p in position)\n        return min(odd, len(position) - odd)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Moving a chip by 2 is free and by 1 costs 1. So every chip can reach any position with the same parity for free; the answer is the smaller of the count of chips on even positions and on odd positions.",
   "frames": []
  }
 ]
};
