window.PROBLEM = {
 "id": "1586",
 "title": "Binary Search Tree Iterator II",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
