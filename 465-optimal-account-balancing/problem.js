window.PROBLEM = {
 "id": "465",
 "title": "Optimal Account Balancing",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "Transactions [from, to, amount] say who paid whom. Find the minimum number of money transfers that settle all debts.",
 "idea": "Only each person's net balance matters. Take the first non-zero balance and try to settle it with every later balance of opposite sign (skipping duplicates), recursing on the rest.",
 "input": "[[0,1,10],[2,0,5]]",
 "output": "2",
 "notes": [],
 "best": "Only each person's net balance matters. Take the first non-zero balance and try to settle it with every later balance of opposite sign (skipping duplicates), recursing on the rest.",
 "variants": [
  {
   "name": "Backtracking on net balances",
   "code": "class Solution:\n    def minTransfers(self, transactions):\n        bal = defaultdict(int)\n        for a, b, c in transactions:\n            bal[a] -= c\n            bal[b] += c\n        debts = [v for v in bal.values() if v]\n        def go(i):\n            while i < len(debts) and debts[i] == 0: i += 1\n            if i == len(debts): return 0\n            best, seen = float('inf'), set()\n            for j in range(i + 1, len(debts)):\n                if debts[j] * debts[i] < 0 and debts[j] not in seen:\n                    seen.add(debts[j])\n                    debts[j] += debts[i]\n                    best = min(best, 1 + go(i + 1))\n                    debts[j] -= debts[i]\n            return best\n        return go(0)",
   "time": "O(n!) worst",
   "space": "O(n)",
   "explain": "Only each person's net balance matters. Take the first non-zero balance and try to settle it with every later balance of opposite sign (skipping duplicates), recursing on the rest.",
   "frames": []
  }
 ]
};
