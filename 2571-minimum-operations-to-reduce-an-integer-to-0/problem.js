window.PROBLEM = {
 "id": "2571",
 "title": "Minimum Operations to Reduce an Integer to 0",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
