window.PROBLEM = {
 "id": "1361",
 "title": "Validate Binary Tree Nodes",
 "level": "Medium",
 "topic": "Graph",
 "question": "There are n nodes with leftChild[i] and rightChild[i] (−1 = none). Return true if these nodes form exactly one valid binary tree. Example: n=4, leftChild [1,-1,3,-1], rightChild [2,-1,-1,-1] → true.",
 "why": "Node 0 has the children 1 (left) and 2 (right); node 2 has the child 3 (left). One root, every other node has exactly one parent, and all 4 nodes are reachable → true.",
 "idea": "A valid binary tree has exactly one node with no parent (the root), no node with two parents, and every node reachable from the root. Compute in-degrees, find the root, then BFS and make sure each node is met once and all n are visited.",
 "input": "n=4, leftChild=[1,-1,3,-1], rightChild=[2,-1,-1,-1]",
 "output": "true",
 "notes": [],
 "best": "A valid binary tree has exactly one node with no parent (the root), no node with two parents, and every node reachable from the root. Compute in-degrees, find the root, then BFS and make sure each node is met once and all n are visited.",
 "variants": [
  {
   "name": "One root, one parent each, all reachable",
   "code": "class Solution:\n    def validateBinaryTreeNodes(self, n, leftChild, rightChild):\n        indeg = [0] * n\n        for c in leftChild + rightChild:\n            if c != -1:\n                indeg[c] += 1\n        roots = [i for i in range(n) if indeg[i] == 0]\n        if len(roots) != 1 or any(d > 1 for d in indeg):\n            return False\n        seen = set()\n        q = deque(roots)\n        while q:\n            u = q.popleft()\n            if u in seen:\n                return False\n            seen.add(u)\n            for c in (leftChild[u], rightChild[u]):\n                if c != -1:\n                    q.append(c)\n        return len(seen) == n",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A valid binary tree has exactly one node with no parent (the root), no node with two parents, and every node reachable from the root. Compute in-degrees, find the root, then BFS and make sure each node is met once and all n are visited.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS from the root counting visited nodes",
   "tag": "Alternative",
   "code": "class Solution:\n    def validateBinaryTreeNodes(self, n, leftChild, rightChild):\n        has_parent = [False] * n\n        for c in leftChild + rightChild:\n            if c != -1:\n                if has_parent[c]:\n                    return False\n                has_parent[c] = True\n        roots = [i for i in range(n) if not has_parent[i]]\n        if len(roots) != 1:\n            return False\n        seen = {roots[0]}\n        stack = [roots[0]]\n        while stack:\n            u = stack.pop()\n            for c in (leftChild[u], rightChild[u]):\n                if c != -1:\n                    if c in seen:\n                        return False\n                    seen.add(c)\n                    stack.append(c)\n        return len(seen) == n",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Find the single parentless node, walk down, and fail if a node is reached twice.",
   "frames": [],
   "alt": true
  }
 ]
};
