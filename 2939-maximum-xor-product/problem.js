window.PROBLEM = {
 "id": "2939",
 "title": "Maximum Xor Product",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Pick x below 2ⁿ to maximise (a XOR x) · (b XOR x). Give the answer modulo 1,000,000,007.",
 "idea": "Where a and b have the same bit, choose x so both become 1. Where they differ, exactly one of the two gets a 1: give it to the SMALLER number so the two stay as balanced as possible (a fixed sum gives the biggest product when balanced).",
 "input": "a=12, b=5, n=4",
 "output": "98",
 "notes": [],
 "best": "Where a and b have the same bit, choose x so both become 1. Where they differ, exactly one of the two gets a 1: give it to the SMALLER number so the two stay as balanced as possible (a fixed sum gives the biggest product when balanced).",
 "variants": [
  {
   "name": "Greedy per bit, keep the two numbers balanced",
   "code": "class Solution:\n    def maximumXorProduct(self, a, b, n):\n        MOD = 10 ** 9 + 7\n        ca, cb = (a >> n) << n, (b >> n) << n\n        for bit in range(n - 1, -1, -1):\n            ba, bb = a >> bit & 1, b >> bit & 1\n            if ba == bb:\n                ca |= 1 << bit\n                cb |= 1 << bit\n            elif ca <= cb: ca |= 1 << bit\n            else: cb |= 1 << bit\n        return ca * cb % MOD",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Where a and b have the same bit, choose x so both become 1. Where they differ, exactly one of the two gets a 1: give it to the SMALLER number so the two stay as balanced as possible (a fixed sum gives the biggest product when balanced).",
   "frames": []
  }
 ]
};
