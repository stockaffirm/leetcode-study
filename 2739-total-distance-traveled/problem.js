window.PROBLEM = {
 "id": "2739",
 "title": "Total Distance Traveled",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "main 5, additional 10 → 5 L → 50 km, +1 L → 10 km → 60.",
 "idea": "The truck does 10 km per litre. Each time 5 litres are used and the additional tank has fuel, 1 litre moves into the main tank. Simulate in chunks of 5 litres (or with the closed form min((main − 1) // 4, additional)).",
 "input": "mainTank = 5, additionalTank = 10",
 "output": "60",
 "notes": [],
 "best": "The truck does 10 km per litre. Each time 5 litres are used and the additional tank has fuel, 1 litre moves into the main tank. Simulate in chunks of 5 litres (or with the closed form min((main − 1) // 4, additional)).",
 "variants": [
  {
   "name": "Every 5 litres used pull 1 litre from the additional tank",
   "code": "class Solution:\n    def distanceTraveled(self, mainTank, additionalTank):\n        distance = 0\n        while mainTank > 0:\n            use = min(5, mainTank)\n            mainTank -= use\n            distance += use * 10\n            if use == 5 and additionalTank > 0:\n                additionalTank -= 1\n                mainTank += 1\n        return distance",
   "time": "O(main / 5)",
   "space": "O(1)",
   "explain": "The truck does 10 km per litre. Each time 5 litres are used and the additional tank has fuel, 1 litre moves into the main tank. Simulate in chunks of 5 litres (or with the closed form min((main − 1) // 4, additional)).",
   "frames": []
  }
 ]
};
