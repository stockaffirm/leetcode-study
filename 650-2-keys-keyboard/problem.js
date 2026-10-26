window.PROBLEM = {
 "id": "650",
 "title": "2 Keys Keyboard",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "A notepad holds one 'A'. Each step is Copy All or Paste. Fewest steps to have exactly n 'A's?",
 "idea": "To multiply the count by p you need 1 copy + (p−1) pastes = p steps. So the answer is the sum of the prime factors of n (with multiplicity).",
 "input": "n = 3",
 "output": "3",
 "notes": [],
 "best": "To multiply the count by p you need 1 copy + (p−1) pastes = p steps. So the answer is the sum of the prime factors of n (with multiplicity).",
 "variants": [
  {
   "name": "Sum of prime factors",
   "code": "class Solution:\n    def minSteps(self, n):\n        steps, d = 0, 2\n        while n > 1:\n            while n % d == 0:\n                steps += d\n                n //= d\n            d += 1\n        return steps",
   "time": "O(√n)",
   "space": "O(1)",
   "explain": "To multiply the count by p you need 1 copy + (p−1) pastes = p steps. So the answer is the sum of the prime factors of n (with multiplicity).",
   "frames": []
  }
 ]
};
