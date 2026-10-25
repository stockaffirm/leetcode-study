window.PROBLEM = {
 "id": "319",
 "title": "Bulb Switcher",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "There are n bulbs, all off. In round 1 you flip every bulb; in round 2 every 2nd bulb; in round 3 every 3rd; … in round n only the n-th. Return how many bulbs are on at the end. Example: n=3 → 1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate every round",
   "tag": "Brute force",
   "code": "class Solution:\n    def bulbSwitch(self, n):\n        on = [False] * n\n        for r in range(1, n + 1):\n            for j in range(r - 1, n, r): on[j] = not on[j]\n        return sum(on)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Really toggle the bulbs round by round and count the ones that are on.",
   "frames": [],
   "alt": true
  }
 ]
};
