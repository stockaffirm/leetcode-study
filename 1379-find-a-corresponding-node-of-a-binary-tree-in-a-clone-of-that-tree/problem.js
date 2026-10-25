window.PROBLEM = {
 "id": "1379",
 "title": "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Two identical binary trees are given: the original and its clone, plus a reference to a node (the target) in the original. Return the reference to the same node in the cloned tree.",
 "why": "The target is the node 3 in the original; walking the clone along the same path leads to its twin.",
 "idea": "Traverse the original and the clone at the same time. When the original node is the target (same object), return the clone node at that position.",
 "input": "tree [7,4,3,null,null,6,19], target = the node 3",
 "output": "the node 3 of the cloned tree",
 "notes": [],
 "best": "Traverse the original and the clone at the same time. When the original node is the target (same object), return the clone node at that position.",
 "variants": [
  {
   "name": "Walk both trees together",
   "code": "class Solution:\n    def getTargetCopy(self, original, cloned, target):\n        if not original:\n            return None\n        if original is target:\n            return cloned\n        return (self.getTargetCopy(original.left, cloned.left, target)\n                or self.getTargetCopy(original.right, cloned.right, target))",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Traverse the original and the clone at the same time. When the original node is the target (same object), return the clone node at that position.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS over both trees",
   "tag": "Alternative",
   "code": "class Solution:\n    def getTargetCopy(self, original, cloned, target):\n        q = deque([(original, cloned)])\n        while q:\n            o, c = q.popleft()\n            if o is target:\n                return c\n            if o.left:\n                q.append((o.left, c.left))\n            if o.right:\n                q.append((o.right, c.right))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep pairs (original node, cloned node) in a queue.",
   "frames": [],
   "alt": true
  }
 ]
};
