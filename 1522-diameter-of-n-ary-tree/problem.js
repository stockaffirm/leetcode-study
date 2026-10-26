window.PROBLEM = {
 "id": "1522",
 "title": "Diameter of N-Ary Tree",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "The longest path is 5 → 3 → 1 → 2 (or 4): 3 edges.",
 "idea": "For every node take the two deepest child subtrees. The longest path through the node is top1 + top2 edges. Return top1 + 1 to the parent, and keep the best path seen.",
 "input": "root = [1,null,3,2,4,null,5,6]",
 "output": "3",
 "notes": [],
 "best": "For every node take the two deepest child subtrees. The longest path through the node is top1 + top2 edges. Return top1 + 1 to the parent, and keep the best path seen.",
 "variants": [
  {
   "name": "Two deepest child depths",
   "code": "class Solution:\n    def diameter(self, root):\n        best = 0\n        def depth(n):\n            nonlocal best\n            top1 = top2 = 0\n            for c in n.children:\n                d = depth(c)\n                if d > top1:\n                    top1, top2 = d, top1\n                elif d > top2:\n                    top2 = d\n            best = max(best, top1 + top2)\n            return top1 + 1\n        depth(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For every node take the two deepest child subtrees. The longest path through the node is top1 + top2 edges. Return top1 + 1 to the parent, and keep the best path seen.",
   "frames": []
  }
 ]
};
