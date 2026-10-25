window.PROBLEM = {
 "id": "2673",
 "title": "Make Costs of Paths Equal in a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "A perfect binary tree with n nodes numbered 1…n has a cost on each node (cost[i−1]). In one operation add 1 to any node's cost. Return the minimum operations to make all root-to-leaf path costs equal. Example: n=7, cost [1,5,2,2,3,3,1] → 6.",
 "why": "n=7, cost [1,5,2,2,3,3,1]: raise 1→... total 6 increments equalise all root-to-leaf paths.",
 "idea": "The tree is perfect with nodes numbered like a heap (children of i are 2i and 2i+1, 1-indexed). Go bottom-up: at a node, the two child paths must be equal, so add the difference to the smaller one (count it as increments) and pass the larger path cost up by adding it to the node's cost.",
 "input": "n = 7, cost = [1,5,2,2,3,3,1]",
 "output": "6",
 "notes": [],
 "best": "The tree is perfect with nodes numbered like a heap (children of i are 2i and 2i+1, 1-indexed). Go bottom-up: at a node, the two child paths must be equal, so add the difference to the smaller one (count it as increments) and pass the larger path cost up by adding it to the node's cost.",
 "variants": [
  {
   "name": "Bottom-up: raise the smaller child path",
   "code": "class Solution:\n    def minIncrements(self, n, cost):\n        cost = cost[:]\n        ops = 0\n        for i in range(n // 2, 0, -1):\n            l, r = cost[2 * i - 1], cost[2 * i]\n            ops += abs(l - r)\n            cost[i - 1] += max(l, r)\n        return ops",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The tree is perfect with nodes numbered like a heap (children of i are 2i and 2i+1, 1-indexed). Go bottom-up: at a node, the two child paths must be equal, so add the difference to the smaller one (count it as increments) and pass the larger path cost up by adding it to the node's cost.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursive tree walk",
   "tag": "Alternative",
   "code": "class Solution:\n    def minIncrements(self, n, cost):\n        ops = 0\n        def go(i):\n            nonlocal ops\n            if 2 * i > n:\n                return cost[i - 1]\n            l, r = go(2 * i), go(2 * i + 1)\n            ops += abs(l - r)\n            return cost[i - 1] + max(l, r)\n        go(1)\n        return ops",
   "time": "O(n)",
   "space": "O(log n)",
   "explain": "path(i) = best cost from node i to a leaf, adding the gap to the smaller child.",
   "frames": [],
   "alt": true
  }
 ]
};
