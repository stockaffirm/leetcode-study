window.PROBLEM = {
 "id": "2049",
 "title": "Count Nodes With the Highest Score",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Remove a node from a tree: the tree falls apart into its children's subtrees and the rest. The node's score is the product of the sizes of those pieces. How many nodes share the highest score?",
 "idea": "Compute every subtree size. For a node, multiply its children's sizes and the size of the remaining part (n − own size, if not zero). Count how many nodes reach the maximum.",
 "input": "parents [-1, 2, 0, 2, 0]",
 "output": "3",
 "notes": [],
 "best": "Compute every subtree size. For a node, multiply its children's sizes and the size of the remaining part (n − own size, if not zero). Count how many nodes reach the maximum.",
 "variants": [
  {
   "name": "Subtree sizes, product of the pieces",
   "code": "class Solution:\n    def countHighestScoreNodes(self, parents):\n        n = len(parents)\n        children = [[] for _ in range(n)]\n        for i in range(1, n): children[parents[i]].append(i)\n        size = [0] * n\n        def go(u):\n            size[u] = 1 + sum(go(v) for v in children[u])\n            return size[u]\n        go(0)\n        best, count = 0, 0\n        for u in range(n):\n            score = 1\n            for v in children[u]: score *= size[v]\n            if n - size[u]: score *= n - size[u]\n            if score > best:\n                best, count = score, 1\n            elif score == best: count += 1\n        return count",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Compute every subtree size. For a node, multiply its children's sizes and the size of the remaining part (n − own size, if not zero). Count how many nodes reach the maximum.",
   "frames": []
  }
 ]
};
