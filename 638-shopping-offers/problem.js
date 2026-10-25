window.PROBLEM = {
 "id": "638",
 "title": "Shopping Offers",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "A store sells n items with given prices (price[i] for item i) and also has special offers: special[j] = [a1, …, an, total] means you get a1 of item 1, …, an of item n for the price `total`. You need exactly needs[i] of each item (no more). You may use any offer any number of times. Return the lowest total cost. Example: prices [2,5], offers [[3,0,5],[1,2,10]], needs [3,2] → use the second offer once (1 of item 1 and 2 of item 2 for 10) and buy the remaining 2 of item 1 at 2 each = 14 → 14.",
 "why": "Buy exactly the items you need; special offers bundle several items at one price. Cheapest total?",
 "idea": "The state is the list of items still needed. Either buy everything at normal prices, or apply one offer (if it doesn't overshoot) and solve the rest. Cache by the needs.",
 "input": "prices [2,5], offers [[3,0,5],[1,2,10]], needs [3,2]",
 "output": "14",
 "notes": [],
 "best": "The state is the list of items still needed. Either buy everything at normal prices, or apply one offer (if it doesn't overshoot) and solve the rest. Cache by the needs.",
 "variants": [
  {
   "name": "Recursion with memo over remaining needs",
   "code": "class Solution:\n    def shoppingOffers(self, price, special, needs):\n        @lru_cache(None)\n        def go(need):\n            best = sum(p * n for p, n in zip(price, need))\n            for offer in special:\n                nxt = tuple(n - o for n, o in zip(need, offer[:-1]))\n                if min(nxt) >= 0: best = min(best, offer[-1] + go(nxt))\n            return best\n        return go(tuple(needs))",
   "time": "exponential in the worst case",
   "space": "O(states)",
   "explain": "The state is the list of items still needed. Either buy everything at normal prices, or apply one offer (if it doesn't overshoot) and solve the rest. Cache by the needs.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Plain recursion over offers",
   "tag": "Brute force",
   "code": "class Solution:\n    def shoppingOffers(self, price, special, needs):\n        def go(need, i):\n            best = sum(p * n for p, n in zip(price, need))\n            for k in range(i, len(special)):\n                offer = special[k]\n                nxt = [n - o for n, o in zip(need, offer[:-1])]\n                if min(nxt) >= 0: best = min(best, offer[-1] + go(nxt, k))\n            return best\n        return go(list(needs), 0)",
   "time": "exponential",
   "space": "O(depth)",
   "explain": "Try applying each offer (allowing repeats) without caching.",
   "frames": [],
   "alt": true
  }
 ]
};
