window.PROBLEM = {
 "id": "3776",
 "title": "Minimum Moves to Balance Circular Array",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[5,1,-4] → three units from person 0 (distance 1) and one from person 1 (distance 1) = 4 moves.",
 "idea": "At most one person is negative. If the total is negative nothing works (−1). Otherwise the deficit must be covered by other people; a unit travelling d positions costs d moves. Take units from the nearest neighbours first: at distance d look at the two people d steps away on either side, take what they can give, add d per unit.",
 "input": "balance = [5,1,-4]",
 "output": "4",
 "notes": [],
 "best": "At most one person is negative. If the total is negative nothing works (−1). Otherwise the deficit must be covered by other people; a unit travelling d positions costs d moves. Take units from the nearest neighbours first: at distance d look at the two people d steps away on either side, take what they can give, add d per unit.",
 "variants": [
  {
   "name": "Pull the deficit from the nearest donors outwards",
   "code": "class Solution:\n    def minMoves(self, balance):\n        n = len(balance)\n        if sum(balance) < 0:\n            return -1\n        j = next((i for i, v in enumerate(balance) if v < 0), None)\n        if j is None:\n            return 0\n        need = -balance[j]\n        cost = 0\n        d = 1\n        while need > 0:\n            for idx in {(j - d) % n, (j + d) % n}:\n                take = min(max(balance[idx], 0), need)\n                cost += take * d\n                need -= take\n                if need == 0:\n                    break\n            d += 1\n        return cost",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "At most one person is negative. If the total is negative nothing works (−1). Otherwise the deficit must be covered by other people; a unit travelling d positions costs d moves. Take units from the nearest neighbours first: at distance d look at the two people d steps away on either side, take what they can give, add d per unit.",
   "frames": []
  }
 ]
};
