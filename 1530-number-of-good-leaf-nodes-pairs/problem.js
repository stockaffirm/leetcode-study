window.PROBLEM = {
 "id": "1530",
 "title": "Number of Good Leaf Nodes Pairs",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "A pair of leaf nodes is good if the shortest path between them has length at most distance. Return the number of good pairs. Example: [1,2,3,null,4], distance 3 → 1. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect leaf paths and test pairs",
   "tag": "Brute force",
   "code": "class Solution:\n    def countPairs(self, root, distance):\n        paths = []\n        def dfs(node, path):\n            if not node:\n                return\n            path = path + [node]\n            if not node.left and not node.right:\n                paths.append(path)\n                return\n            dfs(node.left, path)\n            dfs(node.right, path)\n        dfs(root, [])\n        res = 0\n        for i in range(len(paths)):\n            for j in range(i + 1, len(paths)):\n                a, b = paths[i], paths[j]\n                k = 0\n                while k < min(len(a), len(b)) and a[k] is b[k]:\n                    k += 1\n                if (len(a) - k) + (len(b) - k) <= distance:\n                    res += 1\n        return res",
   "time": "O(L²·h)",
   "space": "O(n)",
   "explain": "Record the root path of every leaf; two leaves are close if their paths minus the common prefix are short.",
   "frames": [],
   "alt": true
  }
 ]
};
