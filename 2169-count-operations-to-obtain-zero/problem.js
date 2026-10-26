window.PROBLEM = {
 "id": "2169",
 "title": "Count Operations to Obtain Zero",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Given two non-negative whole numbers num1 and num2, repeat this operation until one of them is 0: if num1 ≥ num2 subtract num2 from num1, otherwise subtract num1 from num2. Return the number of operations performed. Example: (2, 3) → (2, 1) → (1, 1) → (0, 1): 3 operations.",
 "why": "Repeatedly subtract the smaller number from the larger until one is 0. How many subtractions? (2, 3) → 3.",
 "idea": "Just simulate: each step, whichever number is larger loses the smaller one. (Euclid's algorithm in slow motion.)",
 "input": "num1=2, num2=3",
 "output": "3",
 "notes": [],
 "best": "Just simulate: each step, whichever number is larger loses the smaller one. (Euclid's algorithm in slow motion.)",
 "variants": [
  {
   "name": "Subtract the smaller from the larger",
   "code": "class Solution:\n    def countOperations(self, num1, num2):\n        ops = 0\n        while num1 and num2:\n            if num1 >= num2: num1 -= num2\n            else: num2 -= num1\n            ops += 1\n        return ops",
   "time": "O(max / min)",
   "space": "O(1)",
   "explain": "Just simulate: each step, whichever number is larger loses the smaller one. (Euclid's algorithm in slow motion.)",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Euclid with division",
   "tag": "Alternative",
   "code": "class Solution:\n    def countOperations(self, num1, num2):\n        ops = 0\n        while num1 and num2:\n            ops += num1 // num2\n            num1 %= num2\n            num1, num2 = num2, num1\n        return ops",
   "time": "O(log min)",
   "space": "O(1)",
   "explain": "Subtracting the smaller number q times in a row is a single division.",
   "frames": [],
   "alt": true
  }
 ]
};
