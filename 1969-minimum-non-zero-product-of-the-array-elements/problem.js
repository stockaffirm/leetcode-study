window.PROBLEM = {
 "id": "1969",
 "title": "Minimum Non-Zero Product of the Array Elements",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "The array contains all integers from 1 to 2^p − 1 (written in p bits). In one operation you may pick two elements and swap one bit position between them. Return the minimum possible product of the array (modulo 1 000 000 007) after any number of operations, with no element becoming zero. Example: p=3 → 1512.",
 "why": "p=3: numbers 1…7; best arrangement leaves 7 and three pairs (1, 6) → 7 · 6³ = 1512.",
 "idea": "Swapping bits between two numbers keeps their sum, so to make the product small make one of them tiny. The best is to turn every pair (x, 2^p−1−x) into (1, 2^p−2). That leaves the maximum 2^p−1 alone and 2^(p−1)−1 pairs worth 2^p−2 each: (2^p−1) · (2^p−2)^(2^(p−1)−1) mod 1e9+7.",
 "input": "p = 3",
 "output": "1512",
 "notes": [],
 "best": "Swapping bits between two numbers keeps their sum, so to make the product small make one of them tiny. The best is to turn every pair (x, 2^p−1−x) into (1, 2^p−2). That leaves the maximum 2^p−1 alone and 2^(p−1)−1 pairs worth 2^p−2 each: (2^p−1) · (2^p−2)^(2^(p−1)−1) mod 1e9+7.",
 "variants": [
  {
   "name": "Pair up numbers into (1, 2^p − 2)",
   "code": "class Solution:\n    def minNonZeroProduct(self, p):\n        MOD = 10**9 + 7\n        top = (1 << p) - 1\n        return top % MOD * pow(top - 1, (1 << (p - 1)) - 1, MOD) % MOD",
   "time": "O(p)",
   "space": "O(1)",
   "explain": "Swapping bits between two numbers keeps their sum, so to make the product small make one of them tiny. The best is to turn every pair (x, 2^p−1−x) into (1, 2^p−2). That leaves the maximum 2^p−1 alone and 2^(p−1)−1 pairs worth 2^p−2 each: (2^p−1) · (2^p−2)^(2^(p−1)−1) mod 1e9+7.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Square-and-multiply by hand",
   "tag": "Alternative",
   "code": "class Solution:\n    def minNonZeroProduct(self, p):\n        MOD = 10**9 + 7\n        base = ((1 << p) - 2) % MOD\n        exp = (1 << (p - 1)) - 1\n        result = 1\n        while exp:\n            if exp & 1:\n                result = result * base % MOD\n            base = base * base % MOD\n            exp >>= 1\n        return ((1 << p) - 1) % MOD * result % MOD",
   "time": "O(p)",
   "space": "O(1)",
   "explain": "Compute the big power with an explicit loop instead of pow().",
   "frames": [],
   "alt": true
  }
 ]
};
