window.PROBLEM = {
 "id": "2561",
 "title": "Rearranging Fruits",
 "level": "Hard",
 "topic": "Greedy",
 "question": "Two baskets hold fruits, each fruit a number (its cost). In one swap you exchange any fruit from basket 1 with any fruit from basket 2; the swap costs the smaller of the two fruit costs. Make the two baskets contain the same fruits (as multisets, in any order) with the smallest total swap cost, or return −1 if it is impossible. Example: [4,2,2,2] and [1,4,1,2] → swap the 2 from the first basket with the 1 from the second (cost 1) → both baskets are {4,2,1,2} → 1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two surplus lists",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCost(self, basket1, basket2):\n        c1, c2 = Counter(basket1), Counter(basket2)\n        total = c1 + c2\n        if any(v % 2 for v in total.values()): return -1\n        give, take = [], []\n        for v in total:\n            half = total[v] // 2\n            if c1[v] > half: give += [v] * (c1[v] - half)\n            elif c2[v] > half: take += [v] * (c2[v] - half)\n        give.sort()\n        take.sort(reverse=True)\n        m = min(total)\n        return sum(min(a, b, 2 * m) for a, b in zip(give, take))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "List what each basket has too much of, sort one ascending and the other descending, and pair them.",
   "frames": [],
   "alt": true
  }
 ]
};
