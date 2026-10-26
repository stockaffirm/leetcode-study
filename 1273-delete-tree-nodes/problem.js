window.PROBLEM = {
 "id": "1273",
 "title": "Delete Tree Nodes",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "7 nodes, parent [-1,0,0,1,2,2,2], value [1,-2,4,0,-2,-1,-1] → the subtree of node 1 sums to -2... → 2 nodes remain.",
 "idea": "Compute each node's subtree sum and subtree size bottom-up. If the sum is zero the whole subtree is deleted, so its size contributes 0; otherwise it contributes its size (its own 1 plus the sizes of its kept children). Return the size contributed by the root.",
 "input": "nodes = 7, parent = [-1,0,0,1,2,2,2], value = [1,-2,4,0,-2,-1,-1]",
 "output": "2",
 "notes": [],
 "best": "Compute each node's subtree sum and subtree size bottom-up. If the sum is zero the whole subtree is deleted, so its size contributes 0; otherwise it contributes its size (its own 1 plus the sizes of its kept children). Return the size contributed by the root.",
 "variants": [
  {
   "name": "Subtree sums and sizes from the leaves up",
   "code": "class Solution:\n    def deleteTreeNodes(self, nodes, parent, value):\n        children = defaultdict(list)\n        for i, p in enumerate(parent):\n            if p != -1:\n                children[p].append(i)\n        def go(u):\n            total, size = value[u], 1\n            for v in children[u]:\n                s, c = go(v)\n                total += s\n                size += c\n            return (total, 0 if total == 0 else size)\n        return go(0)[1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Compute each node's subtree sum and subtree size bottom-up. If the sum is zero the whole subtree is deleted, so its size contributes 0; otherwise it contributes its size (its own 1 plus the sizes of its kept children). Return the size contributed by the root.",
   "frames": []
  }
 ]
};
