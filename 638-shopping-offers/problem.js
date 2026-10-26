window.PROBLEM = {
 "id": "638",
 "title": "Shopping Offers",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
