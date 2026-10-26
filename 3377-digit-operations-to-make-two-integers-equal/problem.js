window.PROBLEM = {
 "id": "3377",
 "title": "Digit Operations to Make Two Integers Equal",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "n=10, m=12 → 10 → 20 → 21 → 22 → 12 costs 10 + 20 + 21 + 22 + 12 = 85.",
 "idea": "Every number with the same digit count is a node; changing one digit by ±1 moves to another node. The cost of a path is the sum of all values visited (including the start). Primes (and the start/target if prime) are forbidden. Sieve primes below 10^d and run Dijkstra's algorithm from n; the answer is the distance to m, or −1.",
 "input": "n = 10, m = 12",
 "output": "85",
 "notes": [],
 "best": "Every number with the same digit count is a node; changing one digit by ±1 moves to another node. The cost of a path is the sum of all values visited (including the start). Primes (and the start/target if prime) are forbidden. Sieve primes below 10^d and run Dijkstra's algorithm from n; the answer is the distance to m, or −1.",
 "variants": [
  {
   "name": "Dijkstra over numbers, skipping primes",
   "code": "class Solution:\n    def minOperations(self, n, m):\n        d = len(str(n))\n        limit = 10 ** d\n        is_prime = [True] * (limit + 1)\n        is_prime[0] = is_prime[1] = False\n        for i in range(2, int(limit ** 0.5) + 1):\n            if is_prime[i]:\n                for j in range(i * i, limit + 1, i):\n                    is_prime[j] = False\n        if is_prime[n] or is_prime[m]:\n            return -1\n        dist = {n: n}\n        pq = [(n, n)]\n        while pq:\n            cost, u = heappop(pq)\n            if dist.get(u, float('inf')) < cost:\n                continue\n            if u == m:\n                return cost\n            s = str(u).zfill(d)\n            for i in range(d):\n                digit = int(s[i])\n                for nd in (digit - 1, digit + 1):\n                    if 0 <= nd <= 9:\n                        v = int(s[:i] + str(nd) + s[i + 1:])\n                        if not is_prime[v] and cost + v < dist.get(v, float('inf')):\n                            dist[v] = cost + v\n                            heappush(pq, (cost + v, v))\n        return -1",
   "time": "O(10^d · d · log)",
   "space": "O(10^d)",
   "explain": "Every number with the same digit count is a node; changing one digit by ±1 moves to another node. The cost of a path is the sum of all values visited (including the start). Primes (and the start/target if prime) are forbidden. Sieve primes below 10^d and run Dijkstra's algorithm from n; the answer is the distance to m, or −1.",
   "frames": []
  }
 ]
};
