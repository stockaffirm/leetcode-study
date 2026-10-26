window.PROBLEM = {
 "id": "1916",
 "title": "Count Ways to Build Rooms in an Ant Colony",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
