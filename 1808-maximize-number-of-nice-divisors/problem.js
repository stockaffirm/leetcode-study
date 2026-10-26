window.PROBLEM = {
 "id": "1808",
 "title": "Maximize Number of Nice Divisors",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "primeFactors = 5 → n = 2·2·3·3·3? best split 3 + 2 → 6.",
 "idea": "The number of nice divisors is the product of the exponents of its distinct primes, and the exponents sum to primeFactors. This is the integer-break problem: use as many 3s as possible, fix the remainder with 2s (remainder 1 turns one 3 into 2 + 2). Compute with modular exponentiation.",
 "input": "primeFactors = 5",
 "output": "6",
 "notes": [],
 "best": "The number of nice divisors is the product of the exponents of its distinct primes, and the exponents sum to primeFactors. This is the integer-break problem: use as many 3s as possible, fix the remainder with 2s (remainder 1 turns one 3 into 2 + 2). Compute with modular exponentiation.",
 "variants": [
  {
   "name": "Split prime factors into groups of 3",
   "code": "class Solution:\n    def maxNiceDivisors(self, primeFactors):\n        MOD = 10**9 + 7\n        n = primeFactors\n        if n <= 3:\n            return n\n        if n % 3 == 0:\n            return pow(3, n // 3, MOD)\n        if n % 3 == 1:\n            return pow(3, n // 3 - 1, MOD) * 4 % MOD\n        return pow(3, n // 3, MOD) * 2 % MOD",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "The number of nice divisors is the product of the exponents of its distinct primes, and the exponents sum to primeFactors. This is the integer-break problem: use as many 3s as possible, fix the remainder with 2s (remainder 1 turns one 3 into 2 + 2). Compute with modular exponentiation.",
   "frames": []
  }
 ]
};
