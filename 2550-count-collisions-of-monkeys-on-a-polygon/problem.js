window.PROBLEM = {
 "id": "2550",
 "title": "Count Collisions of Monkeys on a Polygon",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=3 monkeys: 8 direction choices, only all-clockwise and all-counter-clockwise avoid collisions → 6 collide.",
 "idea": "Each monkey picks one of 2 directions: 2ⁿ ways. Only the two ways where everyone goes the same direction have no collision, so the answer is 2ⁿ − 2 modulo 1e9+7.",
 "input": "n = 3",
 "output": "6",
 "notes": [],
 "best": "Each monkey picks one of 2 directions: 2ⁿ ways. Only the two ways where everyone goes the same direction have no collision, so the answer is 2ⁿ − 2 modulo 1e9+7.",
 "variants": [
  {
   "name": "2ⁿ − 2",
   "code": "class Solution:\n    def monkeyMove(self, n):\n        MOD = 10**9 + 7\n        return (pow(2, n, MOD) - 2) % MOD",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Each monkey picks one of 2 directions: 2ⁿ ways. Only the two ways where everyone goes the same direction have no collision, so the answer is 2ⁿ − 2 modulo 1e9+7.",
   "frames": []
  }
 ]
};
