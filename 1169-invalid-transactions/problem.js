window.PROBLEM = {
 "id": "1169",
 "title": "Invalid Transactions",
 "level": "Medium",
 "topic": "Array / String",
 "question": "A transaction is a string 'name,time,amount,city' (time in minutes). A transaction is possibly invalid if the amount is over 1000, OR if another transaction by the SAME name happened within 60 minutes (inclusive) in a DIFFERENT city. Return all possibly invalid transactions, in any order. Example: ['alice,20,800,mtv','alice,50,100,beijing'] → both are 30 minutes apart in different cities → both.",
 "why": "A transaction is suspicious if it is over $1000, or if the same name made a transaction in a DIFFERENT city within 60 minutes. List all suspicious ones.",
 "idea": "Parse each 'name,time,amount,city'. For every transaction check the amount and scan the others by the same name for a different city within 60 minutes.",
 "input": "[\"alice,20,800,mtv\", \"alice,50,100,beijing\"]",
 "output": "both transactions",
 "notes": [],
 "best": "Parse each 'name,time,amount,city'. For every transaction check the amount and scan the others by the same name for a different city within 60 minutes.",
 "variants": [
  {
   "name": "Check each transaction against the others",
   "code": "class Solution:\n    def invalidTransactions(self, transactions):\n        tx = [(n, int(t), int(a), c) for n, t, a, c in (s.split(',') for s in transactions)]\n        out = []\n        for i, (n, t, a, c) in enumerate(tx):\n            bad = a > 1000 or any(j != i and n2 == n and c2 != c and abs(t2 - t) <= 60 for j, (n2, t2, a2, c2) in enumerate(tx))\n            if bad: out.append(transactions[i])\n        return out",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Parse each 'name,time,amount,city'. For every transaction check the amount and scan the others by the same name for a different city within 60 minutes.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Group by name",
   "tag": "Alternative",
   "code": "class Solution:\n    def invalidTransactions(self, transactions):\n        by_name = defaultdict(list)\n        for i, s in enumerate(transactions):\n            n, t, a, c = s.split(',')\n            by_name[n].append((int(t), c, i))\n        bad = set()\n        for i, s in enumerate(transactions):\n            n, t, a, c = s.split(',')\n            if int(a) > 1000: bad.add(i)\n            for t2, c2, j in by_name[n]:\n                if c2 != c and abs(t2 - int(t)) <= 60:\n                    bad.add(i)\n                    bad.add(j)\n        return [transactions[i] for i in sorted(bad)]",
   "time": "O(n·k)",
   "space": "O(n)",
   "explain": "Group transactions by person and compare only within a person.",
   "frames": [],
   "alt": true
  }
 ]
};
