window.PROBLEM = {
 "id": "1530",
 "title": "Number of Good Leaf Nodes Pairs",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,2,3,null,4], distance 3: leaves 3 and 4 are 3 edges apart → 1 pair.",
 "idea": "For each node compute how many leaves lie at each depth below it in the left and right subtrees. A leaf pair whose lowest common ancestor is this node is good if depth_left + depth_right ≤ distance, so multiply the counts for every compatible pair of depths. Return the combined (depth+1) counts upwards.",
 "input": "root = [1,2,3,null,4], distance = 3",
 "output": "1",
 "notes": [],
 "best": "For each node compute how many leaves lie at each depth below it in the left and right subtrees. A leaf pair whose lowest common ancestor is this node is good if depth_left + depth_right ≤ distance, so multiply the counts for every compatible pair of depths. Return the combined (depth+1) counts upwards.",
 "variants": [
  {
   "name": "Return counts of leaves by depth from each subtree",
   "code": "class Solution:\n    def countPairs(self, root, distance):\n        res = 0\n        def dfs(node):\n            nonlocal res\n            if not node:\n                return [0] * (distance + 1)\n            if not node.left and not node.right:\n                out = [0] * (distance + 1)\n                out[1] = 1\n                return out\n            L, R = dfs(node.left), dfs(node.right)\n            for i in range(1, distance + 1):\n                for j in range(1, distance + 1):\n                    if i + j <= distance:\n                        res += L[i] * R[j]\n            out = [0] * (distance + 1)\n            for i in range(1, distance):\n                out[i + 1] = L[i] + R[i]\n            return out\n        dfs(root)\n        return res",
   "time": "O(n·distance²)",
   "space": "O(h·distance)",
   "explain": "For each node compute how many leaves lie at each depth below it in the left and right subtrees. A leaf pair whose lowest common ancestor is this node is good if depth_left + depth_right ≤ distance, so multiply the counts for every compatible pair of depths. Return the combined (depth+1) counts upwards.",
   "frames": []
  }
 ]
};
