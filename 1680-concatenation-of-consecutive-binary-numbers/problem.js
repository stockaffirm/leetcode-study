window.PROBLEM = {
 "id": "1680",
 "title": "Concatenation of Consecutive Binary Numbers",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=3 → '1' '10' '11' = 11011 = 27.",
 "idea": "Build the number left to right: result = (result << bit_length(i)) | i for i = 1 … n, modulo 1e9+7.",
 "input": "n = 3",
 "output": "27",
 "notes": [],
 "best": "Build the number left to right: result = (result << bit_length(i)) | i for i = 1 … n, modulo 1e9+7.",
 "variants": [
  {
   "name": "Shift by the bit length each time",
   "code": "class Solution:\n    def concatenatedBinary(self, n):\n        MOD = 10**9 + 7\n        res = 0\n        for i in range(1, n + 1):\n            res = ((res << i.bit_length()) | i) % MOD\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Build the number left to right: result = (result << bit_length(i)) | i for i = 1 … n, modulo 1e9+7.",
   "frames": []
  }
 ]
};
