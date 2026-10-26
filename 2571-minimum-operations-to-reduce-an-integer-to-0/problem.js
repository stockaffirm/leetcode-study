window.PROBLEM = {
 "id": "2571",
 "title": "Minimum Operations to Reduce an Integer to 0",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "You are given a positive whole number n. In one operation you may add to n or subtract from n any power of 2 (1, 2, 4, 8, …). Return the minimum number of operations needed to make n equal to 0. Example: n=39 → add 1 (40), subtract 8 (32), subtract 32 (0) → 3 operations.",
 "why": "In one operation you add or subtract a power of 2. Fewest operations to reach 0? 39 → 3.",
 "idea": "Look at the lowest bits. A single 1 is removed with one subtraction; a run of 1s (…11) is cheaper to fix by adding 1 to carry it away. Shift right as you go.",
 "input": "n = 39",
 "output": "3",
 "notes": [],
 "best": "Look at the lowest bits. A single 1 is removed with one subtraction; a run of 1s (…11) is cheaper to fix by adding 1 to carry it away. Shift right as you go.",
 "variants": [
  {
   "name": "Greedy on the lowest bits",
   "code": "class Solution:\n    def minOperations(self, n):\n        ops = 0\n        while n:\n            if n & 1:\n                if n & 3 == 3: n += 1\n                else: n -= 1\n                ops += 1\n            n >>= 1\n        return ops",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Look at the lowest bits. A single 1 is removed with one subtraction; a run of 1s (…11) is cheaper to fix by adding 1 to carry it away. Shift right as you go.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def minOperations(self, n):\n        @lru_cache(None)\n        def go(x):\n            if x == 0: return 0\n            if x == 1: return 1\n            if x & 1 == 0: return go(x >> 1)\n            return 1 + min(go(x - 1), go(x + 1))\n        return go(n)",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "Even numbers shift right for free; odd numbers try both −1 and +1.",
   "frames": [],
   "alt": true
  }
 ]
};
