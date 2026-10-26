window.PROBLEM = {
 "id": "1022",
 "title": "Sum of Root To Leaf Binary Numbers",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,0,1,0,1,0,1]: paths 100, 101, 110, 111 = 4+5+6+7 = 22.",
 "idea": "Carry the binary value of the path to each node (value × 2 + node bit). At a leaf add the value to the total.",
 "input": "root = [1,0,1,0,1,0,1]",
 "output": "22",
 "notes": [],
 "best": "Carry the binary value of the path to each node (value × 2 + node bit). At a leaf add the value to the total.",
 "variants": [
  {
   "name": "Build the number while descending",
   "code": "class Solution:\n    def sumRootToLeaf(self, root):\n        def dfs(node, cur):\n            if not node:\n                return 0\n            cur = cur * 2 + node.val\n            if not node.left and not node.right:\n                return cur\n            return dfs(node.left, cur) + dfs(node.right, cur)\n        return dfs(root, 0)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Carry the binary value of the path to each node (value × 2 + node bit). At a leaf add the value to the total.",
   "frames": []
  }
 ]
};
