window.PROBLEM = {
 "id": "1916",
 "title": "Count Ways to Build Rooms in an Ant Colony",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "prevRoom[i] is the room that must be built directly before room i (room 0 is built first; every room is reachable from 0). You may build any room whose prevRoom is already built. Return the number of different build orders modulo 1 000 000 007. Example: [−1,0,0,1,2] → 6.",
 "why": "prevRoom [-1,0,0,1,2]: room 1 and 2 after 0, 3 after 1, 4 after 2 → 6 valid orders.",
 "idea": "The rooms form a tree rooted at 0 and a valid build order is a topological order. The number of orders of a rooted tree is n! / ∏(size of each subtree). Compute subtree sizes bottom-up and use modular inverses.",
 "input": "prevRoom = [-1,0,0,1,2]",
 "output": "6",
 "notes": [],
 "best": "The rooms form a tree rooted at 0 and a valid build order is a topological order. The number of orders of a rooted tree is n! / ∏(size of each subtree). Compute subtree sizes bottom-up and use modular inverses.",
 "variants": [
  {
   "name": "n! divided by the product of subtree sizes",
   "code": "class Solution:\n    def waysToBuildRooms(self, prevRoom):\n        MOD = 10**9 + 7\n        n = len(prevRoom)\n        children = [[] for _ in range(n)]\n        for i in range(1, n):\n            children[prevRoom[i]].append(i)\n        order = [0]\n        for u in order:\n            order.extend(children[u])\n        size = [1] * n\n        for u in reversed(order):\n            for v in children[u]:\n                size[u] += size[v]\n        res = 1\n        for i in range(1, n + 1):\n            res = res * i % MOD\n        for s in size:\n            res = res * pow(s, MOD - 2, MOD) % MOD\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The rooms form a tree rooted at 0 and a valid build order is a topological order. The number of orders of a rooted tree is n! / ∏(size of each subtree). Compute subtree sizes bottom-up and use modular inverses.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursive combinations",
   "tag": "Alternative",
   "code": "class Solution:\n    def waysToBuildRooms(self, prevRoom):\n        MOD = 10**9 + 7\n        n = len(prevRoom)\n        children = [[] for _ in range(n)]\n        for i in range(1, n):\n            children[prevRoom[i]].append(i)\n        fact = [1] * (n + 1)\n        for i in range(1, n + 1):\n            fact[i] = fact[i - 1] * i % MOD\n        def go(u):\n            size, ways = 1, 1\n            sizes = []\n            for v in children[u]:\n                s, w = go(v)\n                sizes.append(s)\n                ways = ways * w % MOD\n                size += s\n            total = fact[size - 1]\n            for s in sizes:\n                total = total * pow(fact[s], MOD - 2, MOD) % MOD\n            return size, ways * total % MOD\n        return go(0)[1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "ways(u) = product of the children's ways times the number of ways to interleave their orders (a multinomial coefficient).",
   "frames": [],
   "alt": true
  }
 ]
};
