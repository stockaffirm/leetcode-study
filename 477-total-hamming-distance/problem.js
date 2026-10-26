window.PROBLEM = {
 "id": "477",
 "title": "Total Hamming Distance",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "The Hamming distance of two numbers is the number of bit positions where they differ. Return the sum over all pairs.",
 "idea": "Handle each bit position separately: if c numbers have a 1 there and n−c have a 0, that bit contributes c·(n−c) differing pairs.",
 "input": "[4,14,2]",
 "output": "6",
 "notes": [],
 "best": "Handle each bit position separately: if c numbers have a 1 there and n−c have a 0, that bit contributes c·(n−c) differing pairs.",
 "variants": [
  {
   "name": "Count ones per bit position",
   "code": "class Solution:\n    def totalHammingDistance(self, nums):\n        n = len(nums)\n        total = 0\n        for b in range(32):\n            c = sum(x >> b & 1 for x in nums)\n            total += c * (n - c)\n        return total",
   "time": "O(32·n)",
   "space": "O(1)",
   "explain": "Handle each bit position separately: if c numbers have a 1 there and n−c have a 0, that bit contributes c·(n−c) differing pairs.",
   "frames": []
  }
 ]
};
