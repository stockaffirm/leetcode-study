window.PROBLEM = {
 "id": "204",
 "title": "Count Primes",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "How many prime numbers are smaller than n? n=10 → 2, 3, 5, 7 → 4.",
 "idea": "Cross out the multiples of every prime, starting from its square. Whatever is never crossed out is prime.",
 "input": "n = 10",
 "output": "4",
 "notes": [],
 "best": "Cross out the multiples of every prime, starting from its square. Whatever is never crossed out is prime.",
 "variants": [
  {
   "name": "Sieve of Eratosthenes",
   "code": "class Solution:\n    def countPrimes(self, n):\n        if n < 3: return 0\n        is_p = [True] * n\n        is_p[0] = is_p[1] = False\n        for i in range(2, int(n ** 0.5) + 1):\n            if is_p[i]:\n                for j in range(i * i, n, i):\n                    is_p[j] = False\n        return sum(is_p)",
   "time": "O(n log log n)",
   "space": "O(n)",
   "explain": "Cross out the multiples of every prime, starting from its square. Whatever is never crossed out is prime.",
   "frames": []
  }
 ]
};
