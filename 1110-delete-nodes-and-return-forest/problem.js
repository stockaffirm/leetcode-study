window.PROBLEM = {
 "id": "1110",
 "title": "Delete Nodes And Return Forest",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Deleting 3 and 5 from [1,2,3,4,5,6,7] leaves the trees [1,2,null,4], [6] and [7].",
 "idea": "DFS with a flag telling whether the node is a root of a new tree (its parent was deleted, or it is the real root). A node that is not deleted and is a root joins the answer. Children of a deleted node get the flag; deleted nodes are cut off by returning None.",
 "input": "root = [1,2,3,4,5,6,7], to_delete = [3,5]",
 "output": "[[1,2,null,4],[6],[7]]",
 "notes": [],
 "best": "DFS with a flag telling whether the node is a root of a new tree (its parent was deleted, or it is the real root). A node that is not deleted and is a root joins the answer. Children of a deleted node get the flag; deleted nodes are cut off by returning None.",
 "variants": [
  {
   "name": "DFS passing 'is a new root'",
   "code": "class Solution:\n    def delNodes(self, root, to_delete):\n        drop = set(to_delete)\n        res = []\n        def dfs(node, is_root):\n            if not node:\n                return None\n            deleted = node.val in drop\n            if is_root and not deleted:\n                res.append(node)\n            node.left = dfs(node.left, deleted)\n            node.right = dfs(node.right, deleted)\n            return None if deleted else node\n        dfs(root, True)\n        return res",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "DFS with a flag telling whether the node is a root of a new tree (its parent was deleted, or it is the real root). A node that is not deleted and is a root joins the answer. Children of a deleted node get the flag; deleted nodes are cut off by returning None.",
   "frames": []
  }
 ]
};
