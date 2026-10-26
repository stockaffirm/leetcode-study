window.PROBLEM = {
 "id": "2749",
 "title": "Minimum Operations to Make the Integer Zero",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "num1=3, num2=−2: three operations (each subtracts 2^i − 2) reach 0.",
 "idea": "After k operations num1 − k·num2 must be written as a sum of exactly k powers of two. That is possible iff x = num1 − k·num2 ≥ k and the number of set bits of x is ≤ k. Try k = 1 … 60.",
 "input": "num1 = 3, num2 = -2",
 "output": "3",
 "notes": [],
 "best": "After k operations num1 − k·num2 must be written as a sum of exactly k powers of two. That is possible iff x = num1 − k·num2 ≥ k and the number of set bits of x is ≤ k. Try k = 1 … 60.",
 "variants": [
  {
   "name": "Try k operations: the remainder must be a sum of k powers of two",
   "code": "class Solution:\n    def makeTheIntegerZero(self, num1, num2):\n        for k in range(1, 61):\n            x = num1 - k * num2\n            if x >= k and bin(x).count('1') <= k:\n                return k\n        return -1",
   "time": "O(60)",
   "space": "O(1)",
   "explain": "After k operations num1 − k·num2 must be written as a sum of exactly k powers of two. That is possible iff x = num1 − k·num2 ≥ k and the number of set bits of x is ≤ k. Try k = 1 … 60.",
   "frames": []
  }
 ]
};
