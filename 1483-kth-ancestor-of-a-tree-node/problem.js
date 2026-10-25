window.PROBLEM = {
 "id": "1483",
 "title": "Kth Ancestor of a Tree Node",
 "level": "Hard",
 "topic": "Design",
 "question": "Design TreeAncestor(n, parent) for a tree rooted at 0 and getKthAncestor(node, k) returning the k-th ancestor or −1. Example: parents [-1,0,0,1,1,2,2]: getKthAncestor(3,1)=1, (5,2)=0, (6,3)=−1.",
 "why": "Tree parents [-1,0,0,1,1,2,2]: the 1st ancestor of 3 is 1; the 2nd of 5 is 0; the 3rd of 6 does not exist → −1.",
 "idea": "Precompute up[j][v], the 2^j-th ancestor of v, from the parent array. To jump k levels, combine the jumps for each set bit of k; if any jump lands on −1 the answer is −1.",
 "input": "TreeAncestor(7, [-1,0,0,1,1,2,2]); getKthAncestor(3,1); getKthAncestor(5,2); getKthAncestor(6,3)",
 "output": "[1, 0, -1]",
 "notes": [],
 "best": "Precompute up[j][v], the 2^j-th ancestor of v, from the parent array. To jump k levels, combine the jumps for each set bit of k; if any jump lands on −1 the answer is −1.",
 "variants": [
  {
   "name": "Binary lifting table",
   "code": "class TreeAncestor:\n    def __init__(self, n, parent):\n        self.up = [parent[:]]\n        for j in range(1, max(1, n.bit_length())):\n            prev = self.up[-1]\n            self.up.append([prev[prev[v]] if prev[v] >= 0 else -1 for v in range(n)])\n\n    def getKthAncestor(self, node, k):\n        for j in range(len(self.up)):\n            if (k >> j) & 1:\n                node = self.up[j][node]\n                if node < 0:\n                    return -1\n        if k >> len(self.up):\n            return -1\n        return node",
   "time": "O(log n) per query",
   "space": "O(n log n)",
   "explain": "Precompute up[j][v], the 2^j-th ancestor of v, from the parent array. To jump k levels, combine the jumps for each set bit of k; if any jump lands on −1 the answer is −1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk up one parent at a time",
   "tag": "Brute force",
   "code": "class TreeAncestor:\n    def __init__(self, n, parent):\n        self.parent = parent\n\n    def getKthAncestor(self, node, k):\n        while k and node != -1:\n            node = self.parent[node]\n            k -= 1\n        return node",
   "time": "O(k) per query",
   "space": "O(n)",
   "explain": "Follow the parent pointer k times.",
   "frames": [],
   "alt": true
  }
 ]
};
