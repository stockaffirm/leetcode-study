window.PROBLEM = {
 "id": "2561",
 "title": "Rearranging Fruits",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "Swap fruits between two baskets (swap costs the smaller of the two values) so both baskets hold the same multiset. Cheapest total cost, or −1 if impossible.",
 "idea": "Every value must appear an even number of times overall. Work out the surplus values that must move; pair the smallest half of them with the largest half. Each swap costs min(value, 2 × the smallest value overall), because a cheap value can act as a 'go-between' using two swaps.",
 "input": "[4,2,2,2], [1,4,1,2]",
 "output": "1",
 "notes": [],
 "best": "Every value must appear an even number of times overall. Work out the surplus values that must move; pair the smallest half of them with the largest half. Each swap costs min(value, 2 × the smallest value overall), because a cheap value can act as a 'go-between' using two swaps.",
 "variants": [
  {
   "name": "Match the smallest surplus with the largest",
   "code": "class Solution:\n    def minCost(self, basket1, basket2):\n        cnt = Counter(basket1)\n        cnt.subtract(Counter(basket2))\n        extra = []\n        for v, c in cnt.items():\n            if c % 2: return -1\n            extra += [v] * (abs(c) // 2)\n        extra.sort()\n        m = min(min(basket1), min(basket2))\n        return sum(min(x, 2 * m) for x in extra[:len(extra) // 2])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Every value must appear an even number of times overall. Work out the surplus values that must move; pair the smallest half of them with the largest half. Each swap costs min(value, 2 × the smallest value overall), because a cheap value can act as a 'go-between' using two swaps.",
   "frames": []
  }
 ]
};
