window.PROBLEM = {
 "id": "1860",
 "title": "Incremental Memory Leak",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "At second i (starting from 1) a program uses i bits of memory, taken from the stick with more free memory (the first one on ties); it crashes when neither stick has i bits. Return [crash time, memory left in stick 1, memory left in stick 2]. Example: 2 and 2 → [3,1,0].",
 "why": "memory1=2, memory2=2: second 1 takes 1 from the first stick, second 2 takes 2 from the second → crash at second 3 with [1, 0].",
 "idea": "At second i the program needs i bits and takes them from the stick with more free memory (the first on ties). Keep subtracting until the next demand does not fit in either stick. The loop runs about √(memory) times.",
 "input": "memory1 = 2, memory2 = 2",
 "output": "[3, 1, 0]",
 "notes": [],
 "best": "At second i the program needs i bits and takes them from the stick with more free memory (the first on ties). Keep subtracting until the next demand does not fit in either stick. The loop runs about √(memory) times.",
 "variants": [
  {
   "name": "Simulate second by second",
   "code": "class Solution:\n    def memLeak(self, memory1, memory2):\n        t = 1\n        while max(memory1, memory2) >= t:\n            if memory1 >= memory2:\n                memory1 -= t\n            else:\n                memory2 -= t\n            t += 1\n        return [t, memory1, memory2]",
   "time": "O(√(m1+m2))",
   "space": "O(1)",
   "explain": "At second i the program needs i bits and takes them from the stick with more free memory (the first on ties). Keep subtracting until the next demand does not fit in either stick. The loop runs about √(memory) times.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Closed-form step then simulate",
   "tag": "Alternative",
   "code": "class Solution:\n    def memLeak(self, memory1, memory2):\n        i = 1\n        while True:\n            if memory1 >= memory2 and memory1 >= i:\n                memory1 -= i\n            elif memory2 > memory1 and memory2 >= i:\n                memory2 -= i\n            else:\n                return [i, memory1, memory2]\n            i += 1",
   "time": "O(√m)",
   "space": "O(1)",
   "explain": "Same simulation with the larger stick chosen by comparing explicitly.",
   "frames": [],
   "alt": true
  }
 ]
};
