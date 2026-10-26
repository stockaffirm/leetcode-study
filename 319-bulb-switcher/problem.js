window.PROBLEM = {
 "id": "319",
 "title": "Bulb Switcher",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n bulbs start off. In round r you toggle every r-th bulb. How many are on after n rounds?",
 "idea": "Bulb i is toggled once for each divisor of i. Only perfect squares have an odd number of divisors, so the answer is the number of squares ≤ n = ⌊√n⌋.",
 "input": "n = 3",
 "output": "1",
 "notes": [],
 "best": "Bulb i is toggled once for each divisor of i. Only perfect squares have an odd number of divisors, so the answer is the number of squares ≤ n = ⌊√n⌋.",
 "variants": [
  {
   "name": "Perfect squares",
   "code": "class Solution:\n    def bulbSwitch(self, n):\n        return isqrt(n)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Bulb i is toggled once for each divisor of i. Only perfect squares have an odd number of divisors, so the answer is the number of squares ≤ n = ⌊√n⌋.",
   "frames": []
  }
 ]
};
