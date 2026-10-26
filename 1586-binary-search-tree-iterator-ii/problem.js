window.PROBLEM = {
 "id": "1586",
 "title": "Binary Search Tree Iterator II",
 "level": "Medium",
 "topic": "Design",
 "question": "Design BSTIterator(root) over a binary search tree's in-order sequence: hasNext(), next(), hasPrev(), prev(). The pointer starts before the first element; prev() returns the element before the last one returned. Example: tree [7,3,15,null,null,9,20] → next 3, next 7, prev 3, next 7 … (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "next() walks the sorted values 3, 7, 9, 15, 20; prev() steps back to the previous one.",
 "idea": "The in-order walk of a BST is sorted. Store it in a list with a pointer: next moves forward, prev moves back, and hasNext / hasPrev only check the pointer.",
 "input": "BSTIterator([7,3,15,null,null,9,20]); next, next, prev, next",
 "output": "3, 7, 3, 7",
 "notes": [],
 "best": "The in-order walk of a BST is sorted. Store it in a list with a pointer: next moves forward, prev moves back, and hasNext / hasPrev only check the pointer.",
 "variants": [
  {
   "name": "In-order array and a pointer",
   "code": "class BSTIterator:\n    def __init__(self, root):\n        self.vals = []\n        def inorder(n):\n            if n:\n                inorder(n.left)\n                self.vals.append(n.val)\n                inorder(n.right)\n        inorder(root)\n        self.i = -1\n    def hasNext(self):\n        return self.i + 1 < len(self.vals)\n    def next(self):\n        self.i += 1\n        return self.vals[self.i]\n    def hasPrev(self):\n        return self.i > 0\n    def prev(self):\n        self.i -= 1\n        return self.vals[self.i]",
   "time": "O(1) per call",
   "space": "O(n)",
   "explain": "The in-order walk of a BST is sorted. Store it in a list with a pointer: next moves forward, prev moves back, and hasNext / hasPrev only check the pointer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Lazy iterator with a stack",
   "tag": "Alternative",
   "code": "class BSTIterator:\n    def __init__(self, root):\n        self.stack = []\n        self.seen = []\n        self.i = -1\n        self._push(root)\n    def _push(self, n):\n        while n:\n            self.stack.append(n)\n            n = n.left\n    def hasNext(self):\n        return bool(self.stack) or self.i + 1 < len(self.seen)\n    def next(self):\n        self.i += 1\n        if self.i == len(self.seen):\n            n = self.stack.pop()\n            self._push(n.right)\n            self.seen.append(n.val)\n        return self.seen[self.i]\n    def hasPrev(self):\n        return self.i > 0\n    def prev(self):\n        self.i -= 1\n        return self.seen[self.i]",
   "time": "O(1) amortised",
   "space": "O(h + n)",
   "explain": "Walk the tree on demand with a stack and remember the visited values for prev().",
   "frames": [],
   "alt": true
  }
 ]
};
