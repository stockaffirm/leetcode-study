window.PROBLEM = {
 "id": "1518",
 "title": "Water Bottles",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "You have numBottles full bottles; you can exchange numExchange empty bottles for one full bottle. Return the maximum number of bottles you can drink. Example: 9 bottles, 3 per exchange → 13.",
 "why": "9 full bottles, 3 empties per new one: drink 9, exchange 9 → 3 new, drink, exchange → 1 more → 13.",
 "idea": "Keep drinking everything you have, then trade numExchange empties for one full bottle. Repeat while you have enough empties, adding every new bottle to the total.",
 "input": "numBottles = 9, numExchange = 3",
 "output": "13",
 "notes": [],
 "best": "Keep drinking everything you have, then trade numExchange empties for one full bottle. Repeat while you have enough empties, adding every new bottle to the total.",
 "variants": [
  {
   "name": "Drink, then exchange empties",
   "code": "class Solution:\n    def numWaterBottles(self, numBottles, numExchange):\n        total = empty = numBottles\n        while empty >= numExchange:\n            new = empty // numExchange\n            total += new\n            empty = empty % numExchange + new\n        return total",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Keep drinking everything you have, then trade numExchange empties for one full bottle. Repeat while you have enough empties, adding every new bottle to the total.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Closed form",
   "tag": "Alternative",
   "code": "class Solution:\n    def numWaterBottles(self, numBottles, numExchange):\n        return numBottles + (numBottles - 1) // (numExchange - 1)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Every exchange removes numExchange − 1 empties net, so the total is n + (n − 1) // (numExchange − 1).",
   "frames": [],
   "alt": true
  }
 ]
};
