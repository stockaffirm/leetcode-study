window.PROBLEM = {
 "id": "1052",
 "title": "Grumpy Bookstore Owner",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "A bookstore owner is open for n minutes. customers[i] people enter during minute i, and grumpy[i] is 1 if the owner is grumpy during that minute (the people who enter in a grumpy minute leave unsatisfied) or 0 if he is calm. The owner knows a secret technique that keeps him calm for `minutes` minutes in a row, and he can use it once. Return the maximum number of satisfied customers. Example: customers [1,0,1,2,1,1,7,5], grumpy [0,1,0,1,0,1,0,1], minutes 3 → calm during the last three-minute stretch (minutes 5 to 7) → 16.",
 "why": "A shop owner is sometimes grumpy and customers leave unsatisfied. He has a secret technique to stay calm for `minutes` in a row, once. How many customers can be satisfied at most?",
 "idea": "Customers in calm minutes are always satisfied. The technique should cover the stretch of `minutes` where the most grumpy-minute customers are — a sliding window sum of the grumpy-minute customers.",
 "input": "customers [1,0,1,2,1,1,7,5], grumpy [0,1,0,1,0,1,0,1], minutes 3",
 "output": "16",
 "notes": [],
 "best": "Customers in calm minutes are always satisfied. The technique should cover the stretch of `minutes` where the most grumpy-minute customers are — a sliding window sum of the grumpy-minute customers.",
 "variants": [
  {
   "name": "Fixed window over grumpy minutes",
   "code": "class Solution:\n    def maxSatisfied(self, customers, grumpy, minutes):\n        base = sum(c for c, g in zip(customers, grumpy) if not g)\n        extra = best = 0\n        for i, (c, g) in enumerate(zip(customers, grumpy)):\n            if g: extra += c\n            if i >= minutes and grumpy[i - minutes]: extra -= customers[i - minutes]\n            best = max(best, extra)\n        return base + best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Customers in calm minutes are always satisfied. The technique should cover the stretch of `minutes` where the most grumpy-minute customers are — a sliding window sum of the grumpy-minute customers.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every window",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxSatisfied(self, customers, grumpy, minutes):\n        base = sum(c for c, g in zip(customers, grumpy) if not g)\n        best = 0\n        for s in range(len(customers) - minutes + 1):\n            best = max(best, sum(c for c, g in zip(customers[s:s + minutes], grumpy[s:s + minutes]) if g))\n        return base + best",
   "time": "O(n·minutes)",
   "space": "O(1)",
   "explain": "For each start sum the grumpy-minute customers in the window.",
   "frames": [],
   "alt": true
  }
 ]
};
