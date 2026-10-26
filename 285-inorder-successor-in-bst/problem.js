window.PROBLEM = {
 "id": "285",
 "title": "Inorder Successor in BST",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "In the tree 2 with children 1 and 3, the successor of 1 is 2.",
 "idea": "The successor of p is the smallest value larger than p. Walk down from the root: if p is smaller than the current node, this node is a candidate and we go left; otherwise go right.",
 "input": "root = [2,1,3], p = 1",
 "output": "2",
 "notes": [],
 "best": "The successor of p is the smallest value larger than p. Walk down from the root: if p is smaller than the current node, this node is a candidate and we go left; otherwise go right.",
 "variants": [
  {
   "name": "Walk down, remember the last left turn",
   "code": "class Solution:\n    def inorderSuccessor(self, root, p):\n        succ = None\n        cur = root\n        while cur:\n            if p.val < cur.val:\n                succ = cur\n                cur = cur.left\n            else:\n                cur = cur.right\n        return succ",
   "time": "O(h)",
   "space": "O(1)",
   "explain": "The successor of p is the smallest value larger than p. Walk down from the root: if p is smaller than the current node, this node is a candidate and we go left; otherwise go right.",
   "frames": []
  }
 ]
};
