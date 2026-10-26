window.PROBLEM = {
 "id": "652",
 "title": "Find Duplicate Subtrees",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Given a binary tree, return the root of ONE subtree for every group of duplicate subtrees (two subtrees are the same if they have the same structure and the same node values). Example: [1,2,3,4,null,2,4,null,null,4] → the subtrees [2,4] and [4]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Return one root node for every kind of subtree (same structure and values) that appears more than once in the tree.",
 "idea": "Give each subtree a text serialisation like 'left,node,right' built bottom-up. Count them in a dictionary; the moment a serialisation is seen for the second time, report that subtree.",
 "input": "[1,2,3,4,null,2,4,null,null,4]",
 "output": "subtrees [2,4] and [4]",
 "notes": [],
 "best": "Give each subtree a text serialisation like 'left,node,right' built bottom-up. Count them in a dictionary; the moment a serialisation is seen for the second time, report that subtree.",
 "variants": [
  {
   "name": "Serialise every subtree",
   "code": "class Solution:\n    def findDuplicateSubtrees(self, root):\n        seen, res = defaultdict(int), []\n        def ser(node):\n            if not node: return '#'\n            s = '%s,%d,%s' % (ser(node.left), node.val, ser(node.right))\n            seen[s] += 1\n            if seen[s] == 2: res.append(node)\n            return s\n        ser(root)\n        return res",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Give each subtree a text serialisation like 'left,node,right' built bottom-up. Count them in a dictionary; the moment a serialisation is seen for the second time, report that subtree.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "IDs per subtree shape",
   "tag": "Alternative",
   "code": "class Solution:\n    def findDuplicateSubtrees(self, root):\n        ids, cnt, res = {}, defaultdict(int), []\n        def go(node):\n            if not node: return 0\n            key = (go(node.left), node.val, go(node.right))\n            uid = ids.setdefault(key, len(ids) + 1)\n            cnt[uid] += 1\n            if cnt[uid] == 2: res.append(node)\n            return uid\n        go(root)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Give each distinct (left id, value, right id) triple a number instead of building long strings.",
   "frames": [],
   "alt": true
  }
 ]
};
