window.PROBLEM = {
 "id": "1475",
 "title": "Final Prices With a Special Discount in a Shop",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "prices[i] is the price of item i. When buying item i you get a discount equal to prices[j] for the smallest j > i with prices[j] ≤ prices[i] (no such j → no discount). Return the final price of every item. Example: [8,4,6,2,3] → [4,2,4,2,3].",
 "why": "Item i gets a discount equal to the first later price that is ≤ prices[i] (none → no discount). Return the final prices.",
 "idea": "A decreasing-stack pass: when a price arrives that is ≤ the price on top of the stack, it is that item's discount.",
 "input": "[8,4,6,2,3]",
 "output": "[4,2,4,2,3]",
 "notes": [],
 "best": "A decreasing-stack pass: when a price arrives that is ≤ the price on top of the stack, it is that item's discount.",
 "variants": [
  {
   "name": "Next smaller-or-equal with a stack",
   "code": "class Solution:\n    def finalPrices(self, prices):\n        res = prices[:]\n        st = []\n        for i, p in enumerate(prices):\n            while st and prices[st[-1]] >= p: res[st.pop()] -= p\n            st.append(i)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A decreasing-stack pass: when a price arrives that is ≤ the price on top of the stack, it is that item's discount.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan to the right",
   "tag": "Brute force",
   "code": "class Solution:\n    def finalPrices(self, prices):\n        res = []\n        for i, p in enumerate(prices):\n            d = next((q for q in prices[i + 1:] if q <= p), 0)\n            res.append(p - d)\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each price look for the first later price that is not bigger.",
   "frames": [],
   "alt": true
  }
 ]
};
