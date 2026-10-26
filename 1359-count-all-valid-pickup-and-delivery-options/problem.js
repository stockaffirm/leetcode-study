window.PROBLEM = {
 "id": "1359",
 "title": "Count All Valid Pickup and Delivery Options",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "There are n orders, each with a pickup and a delivery, and each delivery must happen after its own pickup. Count the possible sequences of all 2n events, modulo 1,000,000,007. Example: n=1 → 1; n=2 → 6; n=3 → 90.",
 "why": "n orders each have a pickup and a delivery; a delivery must come after its own pickup. How many valid sequences of all 2n events exist (modulo 1,000,000,007)?",
 "idea": "Add orders one by one. With 2(i−1) events already placed, the new pickup and delivery can be placed in (2i−1)·(2i)/2 = i(2i−1) ways; multiply them all together.",
 "input": "n = 3",
 "output": "90",
 "notes": [],
 "best": "Add orders one by one. With 2(i−1) events already placed, the new pickup and delivery can be placed in (2i−1)·(2i)/2 = i(2i−1) ways; multiply them all together.",
 "variants": [
  {
   "name": "Multiply by the ways to insert the next order",
   "code": "class Solution:\n    def countOrders(self, n):\n        MOD = 10 ** 9 + 7\n        ways = 1\n        for i in range(2, n + 1): ways = ways * (2 * i - 1) * i % MOD\n        return ways",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Add orders one by one. With 2(i−1) events already placed, the new pickup and delivery can be placed in (2i−1)·(2i)/2 = i(2i−1) ways; multiply them all together.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Closed formula (2n)! / 2ⁿ",
   "tag": "Alternative",
   "code": "class Solution:\n    def countOrders(self, n):\n        return factorial(2 * n) // 2 ** n % (10 ** 9 + 7)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "All orderings of 2n events, divided by 2 for each order's fixed pickup-before-delivery.",
   "frames": [],
   "alt": true
  }
 ]
};
