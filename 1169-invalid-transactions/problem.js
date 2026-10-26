window.PROBLEM = {
 "id": "1169",
 "title": "Invalid Transactions",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
