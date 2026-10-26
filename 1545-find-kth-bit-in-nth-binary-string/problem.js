window.PROBLEM = {
 "id": "1545",
 "title": "Find Kth Bit in Nth Binary String",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "S1 = 0, S2 = 011, S3 = 0111001, S4 = 011100110110001. The 11th bit of S4 is 1.",
 "idea": "S_n = S_(n−1) + '1' + reverse(invert(S_(n−1))). The middle bit (position 2^(n−1)) is 1. A bit in the left half is the same bit of S_(n−1). A bit in the right half is the inverted bit at the mirrored position 2·mid − k of S_(n−1).",
 "input": "n = 4, k = 11",
 "output": "\"1\"",
 "notes": [],
 "best": "S_n = S_(n−1) + '1' + reverse(invert(S_(n−1))). The middle bit (position 2^(n−1)) is 1. A bit in the left half is the same bit of S_(n−1). A bit in the right half is the inverted bit at the mirrored position 2·mid − k of S_(n−1).",
 "variants": [
  {
   "name": "Recursive mirror",
   "code": "class Solution:\n    def findKthBit(self, n, k):\n        if n == 1:\n            return \"0\"\n        mid = 1 << (n - 1)\n        if k == mid:\n            return \"1\"\n        if k < mid:\n            return self.findKthBit(n - 1, k)\n        return \"1\" if self.findKthBit(n - 1, 2 * mid - k) == \"0\" else \"0\"",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "S_n = S_(n−1) + '1' + reverse(invert(S_(n−1))). The middle bit (position 2^(n−1)) is 1. A bit in the left half is the same bit of S_(n−1). A bit in the right half is the inverted bit at the mirrored position 2·mid − k of S_(n−1).",
   "frames": []
  }
 ]
};
