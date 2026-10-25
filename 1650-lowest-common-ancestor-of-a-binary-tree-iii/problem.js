window.PROBLEM = {
 "id": "1650",
 "title": "Lowest Common Ancestor of a Binary Tree III",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "You are given two nodes p and q of a binary tree in which EVERY node also has a pointer to its parent. Return their lowest common ancestor: the lowest node that has both p and q below it (a node counts as below itself). Example: in the tree [3,5,1,6,2,0,8,null,null,7,4] with p = 5 and q = 1 → 3. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect the ancestors of p",
   "tag": "Alternative",
   "code": "class Solution:\n    def lowestCommonAncestor(self, p, q):\n        seen = set()\n        while p:\n            seen.add(p)\n            p = p.parent\n        while q not in seen: q = q.parent\n        return q",
   "time": "O(h)",
   "space": "O(h)",
   "explain": "Put all ancestors of p in a set, then climb from q until you hit one.",
   "frames": [],
   "alt": true
  }
 ]
};
