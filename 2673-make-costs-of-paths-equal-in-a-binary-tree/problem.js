window.PROBLEM = {
 "id": "2673",
 "title": "Make Costs of Paths Equal in a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
