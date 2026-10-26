window.PROBLEM = {
 "id": "1022",
 "title": "Sum of Root To Leaf Binary Numbers",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Each root-to-leaf path in a binary tree of 0/1 values represents a binary number (most significant bit at the root). Return the sum of these numbers. Example: [1,0,1,0,1,0,1] → 22.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect root-to-leaf strings",
   "tag": "Alternative",
   "code": "class Solution:\n    def sumRootToLeaf(self, root):\n        total = 0\n        st = [(root, '')]\n        while st:\n            node, path = st.pop()\n            path += str(node.val)\n            if not node.left and not node.right:\n                total += int(path, 2)\n            if node.left:\n                st.append((node.left, path))\n            if node.right:\n                st.append((node.right, path))\n        return total",
   "time": "O(n·h)",
   "space": "O(h)",
   "explain": "Build each path as a binary string and convert it.",
   "frames": [],
   "alt": true
  }
 ]
};
