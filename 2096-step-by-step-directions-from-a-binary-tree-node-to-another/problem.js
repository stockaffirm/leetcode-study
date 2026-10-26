window.PROBLEM = {
 "id": "2096",
 "title": "Step-By-Step Directions From a Binary Tree Node to Another",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "You are given a binary tree (boxes called nodes with up to two children, all values different) and two values: startValue and destValue (both present). Return the shortest route from the start node to the destination node as a string of letters: 'L' = go to the left child, 'R' = go to the right child, 'U' = go up to the parent. Example: tree [5,1,2,3,null,6,4], start 3, dest 6 → go up from 3 to 1, up to 5, then right to 2 and left to 6 → 'UURL'. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Give directions from node A to node B using U (up), L (left), R (right). Climb to the meeting point, then walk down.",
 "idea": "Find the path from the root to each node as letters L/R. The shared beginning of both paths is the common route — cut it off. Each leftover letter of A's path becomes a U; B's leftover letters stay as they are.",
 "input": "tree [5,1,2,3,null,6,4], start=3, dest=6",
 "output": "\"UURL\"",
 "notes": [],
 "best": "Find the path from the root to each node as letters L/R. The shared beginning of both paths is the common route — cut it off. Each leftover letter of A's path becomes a U; B's leftover letters stay as they are.",
 "variants": [
  {
   "name": "Two root paths, drop the shared part",
   "code": "class Solution:\n    def getDirections(self, root, startValue, destValue):\n        def path(node, target, acc):\n            if node.val == target: return True\n            if node.left and path(node.left, target, acc):\n                acc.append('L')\n                return True\n            if node.right and path(node.right, target, acc):\n                acc.append('R')\n                return True\n            return False\n        a, b = [], []\n        path(root, startValue, a)\n        path(root, destValue, b)\n        a.reverse()\n        b.reverse()\n        i = 0\n        while i < len(a) and i < len(b) and a[i] == b[i]: i += 1\n        return 'U' * (len(a) - i) + ''.join(b[i:])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Find the path from the root to each node as letters L/R. The shared beginning of both paths is the common route — cut it off. Each leftover letter of A's path becomes a U; B's leftover letters stay as they are.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Lowest common ancestor first",
   "tag": "Alternative",
   "code": "class Solution:\n    def getDirections(self, root, startValue, destValue):\n        def lca(node):\n            if not node or node.val in (startValue, destValue): return node\n            l, r = lca(node.left), lca(node.right)\n            return node if l and r else (l or r)\n        def find(node, target, acc):\n            if node.val == target: return True\n            for ch, d in ((node.left, 'L'), (node.right, 'R')):\n                if ch:\n                    acc.append(d)\n                    if find(ch, target, acc): return True\n                    acc.pop()\n            return False\n        top = lca(root)\n        a, b = [], []\n        find(top, startValue, a)\n        find(top, destValue, b)\n        return 'U' * len(a) + ''.join(b)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Find the lowest common ancestor, then the path down from it to each node; the start's path becomes all U's.",
   "frames": [],
   "alt": true
  }
 ]
};
