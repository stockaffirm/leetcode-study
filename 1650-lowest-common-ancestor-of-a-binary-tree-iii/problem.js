window.PROBLEM = {
 "id": "1650",
 "title": "Lowest Common Ancestor of a Binary Tree III",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Each tree node knows its parent. Find the lowest common ancestor of two nodes.",
 "idea": "Walk two pointers up the parent links; when one reaches the top, restart it at the other node. They meet exactly at the common ancestor after equal total steps.",
 "input": "tree [3,5,1,6,2,0,8,null,null,7,4], p=5, q=1",
 "output": "3",
 "notes": [],
 "best": "Walk two pointers up the parent links; when one reaches the top, restart it at the other node. They meet exactly at the common ancestor after equal total steps.",
 "variants": [
  {
   "name": "Two pointers that swap to the other start",
   "code": "class Solution:\n    def lowestCommonAncestor(self, p, q):\n        a, b = p, q\n        while a is not b:\n            a = a.parent if a else q\n            b = b.parent if b else p\n        return a",
   "time": "O(h)",
   "space": "O(1)",
   "explain": "Walk two pointers up the parent links; when one reaches the top, restart it at the other node. They meet exactly at the common ancestor after equal total steps.",
   "frames": []
  }
 ]
};
