window.PROBLEM = {
 "id": "465",
 "title": "Optimal Account Balancing",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "transactions[i] = [from, to, amount] means person 'from' gave 'amount' dollars to person 'to'. Return the minimum number of money transfers needed to settle all debts so that nobody owes anything. Example: [[0,1,10],[2,0,5]] → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bitmask DP: most zero-sum groups",
   "tag": "Alternative",
   "code": "class Solution:\n    def minTransfers(self, transactions):\n        bal = defaultdict(int)\n        for a, b, c in transactions:\n            bal[a] -= c\n            bal[b] += c\n        debts = [v for v in bal.values() if v]\n        m = len(debts)\n        total = [0] * (1 << m)\n        dp = [0] * (1 << m)\n        for mask in range(1, 1 << m):\n            low = (mask & -mask).bit_length() - 1\n            total[mask] = total[mask & (mask - 1)] + debts[low]\n            best = 0\n            for i in range(m):\n                if mask >> i & 1: best = max(best, dp[mask ^ (1 << i)])\n            dp[mask] = best + (1 if total[mask] == 0 else 0)\n        return m - dp[(1 << m) - 1]",
   "time": "O(2ⁿ·n)",
   "space": "O(2ⁿ)",
   "explain": "Debts split into zero-sum groups; each group of size g needs g−1 transfers, so maximise the number of groups.",
   "frames": [],
   "alt": true
  }
 ]
};
