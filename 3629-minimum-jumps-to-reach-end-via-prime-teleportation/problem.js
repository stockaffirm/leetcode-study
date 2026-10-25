window.PROBLEM = {
 "id": "3629",
 "title": "Minimum Jumps to Reach End via Prime Teleportation",
 "level": "Medium",
 "topic": "Graph",
 "question": "You start at index 0 of an array and want to reach the last index. From index i you can jump to i−1 or i+1, or, if nums[i] is a prime p, jump to any other index j where nums[j] is a multiple of p. Return the minimum number of jumps. Example: [2,3,4,7,9] → 2.",
 "why": "From index i you may step to i ± 1; and if nums[i] is a prime p you may teleport to any index whose value is a multiple of p. Find the fewest jumps from index 0 to the last index.",
 "idea": "BFS. Group indices by each prime factor of their value. When you stand on a prime p, jump to everything in p's group once and then empty the group (each index only needs to be reached once).",
 "input": "[2,3,4,7,9]",
 "output": "2",
 "notes": [],
 "best": "BFS. Group indices by each prime factor of their value. When you stand on a prime p, jump to everything in p's group once and then empty the group (each index only needs to be reached once).",
 "variants": [
  {
   "name": "BFS with prime-factor buckets",
   "code": "class Solution:\n    def minJumps(self, nums):\n        n = len(nums)\n        def factors(x):\n            ps, d = set(), 2\n            while d * d <= x:\n                if x % d == 0:\n                    ps.add(d)\n                    while x % d == 0: x //= d\n                d += 1\n            if x > 1: ps.add(x)\n            return ps\n        pos = defaultdict(list)\n        for i, x in enumerate(nums):\n            for p in factors(x): pos[p].append(i)\n        dist = [-1] * n\n        dist[0] = 0\n        q = deque([0])\n        while q:\n            i = q.popleft()\n            nb = [i - 1, i + 1]\n            if factors(nums[i]) == {nums[i]}:\n                nb += pos[nums[i]]\n                pos[nums[i]] = []\n            for j in nb:\n                if 0 <= j < n and dist[j] < 0:\n                    dist[j] = dist[i] + 1\n                    q.append(j)\n        return dist[n - 1]",
   "time": "O(n·√V)",
   "space": "O(n)",
   "explain": "BFS. Group indices by each prime factor of their value. When you stand on a prime p, jump to everything in p's group once and then empty the group (each index only needs to be reached once).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS testing divisibility directly",
   "tag": "Brute force",
   "code": "class Solution:\n    def minJumps(self, nums):\n        n = len(nums)\n        def prime(x):\n            return x > 1 and all(x % d for d in range(2, int(x ** 0.5) + 1))\n        dist = [-1] * n\n        dist[0] = 0\n        q = deque([0])\n        while q:\n            i = q.popleft()\n            nb = [i - 1, i + 1]\n            if prime(nums[i]): nb += [j for j in range(n) if nums[j] % nums[i] == 0 and j != i]\n            for j in nb:\n                if 0 <= j < n and dist[j] < 0:\n                    dist[j] = dist[i] + 1\n                    q.append(j)\n        return dist[n - 1]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "At a prime, scan the whole array for multiples.",
   "frames": [],
   "alt": true
  }
 ]
};
