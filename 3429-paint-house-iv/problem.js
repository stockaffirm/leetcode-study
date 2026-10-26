window.PROBLEM = {
 "id": "3429",
 "title": "Paint House IV",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=4 houses with costs for 3 colours: pair (0,3) and (1,2) get different colours inside each pair and neighbours differ.",
 "idea": "n is even; house i and n−1−i must have different colours, and neighbouring houses differ. Process the pairs from the outside to the middle: state = (colour of the left house, colour of the right house) of the current pair. A pair (c1, c2) can follow a pair (p1, p2) if c1 ≠ c2, c1 ≠ p1 and c2 ≠ p2. Minimise the total cost.",
 "input": "n = 4, cost = [[3,5,7],[6,2,9],[4,8,1],[7,3,5]]",
 "output": "9",
 "notes": [],
 "best": "n is even; house i and n−1−i must have different colours, and neighbouring houses differ. Process the pairs from the outside to the middle: state = (colour of the left house, colour of the right house) of the current pair. A pair (c1, c2) can follow a pair (p1, p2) if c1 ≠ c2, c1 ≠ p1 and c2 ≠ p2. Minimise the total cost.",
 "variants": [
  {
   "name": "DP over mirrored pairs of houses",
   "code": "class Solution:\n    def minCost(self, n, cost):\n        dp = {}\n        for a in range(3):\n            for b in range(3):\n                if a != b:\n                    dp[(a, b)] = cost[0][a] + cost[n - 1][b]\n        for i in range(1, n // 2):\n            new = {}\n            for a in range(3):\n                for b in range(3):\n                    if a == b:\n                        continue\n                    best = min(v for (p, q), v in dp.items() if p != a and q != b)\n                    new[(a, b)] = best + cost[i][a] + cost[n - 1 - i][b]\n            dp = new\n        return min(dp.values())",
   "time": "O(n·81)",
   "space": "O(9)",
   "explain": "n is even; house i and n−1−i must have different colours, and neighbouring houses differ. Process the pairs from the outside to the middle: state = (colour of the left house, colour of the right house) of the current pair. A pair (c1, c2) can follow a pair (p1, p2) if c1 ≠ c2, c1 ≠ p1 and c2 ≠ p2. Minimise the total cost.",
   "frames": []
  }
 ]
};
