window.PROBLEM = {
 "id": "2523",
 "title": "Closest Prime Numbers in Range",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Between 10 and 19 the primes are 11, 13, 17, 19; the closest pair is 11 and 13.",
 "idea": "List the primes in [left, right] with a sieve. The closest pair must be consecutive primes, so scan neighbours and keep the pair with the smallest gap (the earliest on ties). Return [−1, −1] if there are fewer than two primes.",
 "input": "left = 10, right = 19",
 "output": "[11, 13]",
 "notes": [],
 "best": "List the primes in [left, right] with a sieve. The closest pair must be consecutive primes, so scan neighbours and keep the pair with the smallest gap (the earliest on ties). Return [−1, −1] if there are fewer than two primes.",
 "variants": [
  {
   "name": "Sieve, then the closest consecutive primes",
   "code": "class Solution:\n    def closestPrimes(self, left, right):\n        sieve = bytearray([1]) * (right + 1)\n        sieve[0:2] = b'\\x00\\x00'[:min(2, right + 1)]\n        for i in range(2, int(right ** 0.5) + 1):\n            if sieve[i]:\n                sieve[i * i::i] = bytearray(len(sieve[i * i::i]))\n        primes = [p for p in range(max(2, left), right + 1) if sieve[p]]\n        best = [-1, -1]\n        gap = float('inf')\n        for a, b in zip(primes, primes[1:]):\n            if b - a < gap:\n                gap = b - a\n                best = [a, b]\n        return best",
   "time": "O(R log log R)",
   "space": "O(R)",
   "explain": "List the primes in [left, right] with a sieve. The closest pair must be consecutive primes, so scan neighbours and keep the pair with the smallest gap (the earliest on ties). Return [−1, −1] if there are fewer than two primes.",
   "frames": []
  }
 ]
};
