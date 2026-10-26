window.PROBLEM = {
 "id": "1969",
 "title": "Minimum Non-Zero Product of the Array Elements",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
