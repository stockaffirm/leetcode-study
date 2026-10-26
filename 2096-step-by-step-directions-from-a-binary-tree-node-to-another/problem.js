window.PROBLEM = {
 "id": "2096",
 "title": "Step-By-Step Directions From a Binary Tree Node to Another",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
