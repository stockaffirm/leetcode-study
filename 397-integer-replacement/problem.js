window.PROBLEM = {
 "id": "397",
 "title": "Integer Replacement",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "Reduce n to 1: if n is even replace it by n/2; if odd by n + 1 or n − 1. Fewest steps?",
 "idea": "For an odd n choose the neighbour with more trailing zero bits: n + 1 unless n ends in binary '01' (or n is 3). That removes the most 1-bits.",
 "input": "n = 7",
 "output": "4",
 "notes": [],
 "best": "For an odd n choose the neighbour with more trailing zero bits: n + 1 unless n ends in binary '01' (or n is 3). That removes the most 1-bits.",
 "variants": [
  {
   "name": "Greedy on the low bits",
   "code": "class Solution:\n    def integerReplacement(self, n):\n        steps = 0\n        while n != 1:\n            if n % 2 == 0: n //= 2\n            elif n == 3 or n % 4 == 1: n -= 1\n            else: n += 1\n            steps += 1\n        return steps",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "For an odd n choose the neighbour with more trailing zero bits: n + 1 unless n ends in binary '01' (or n is 3). That removes the most 1-bits.",
   "frames": []
  }
 ]
};
