window.PROBLEM = {
 "id": "3629",
 "title": "Minimum Jumps to Reach End via Prime Teleportation",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
