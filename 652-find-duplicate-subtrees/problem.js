window.PROBLEM = {
 "id": "652",
 "title": "Find Duplicate Subtrees",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
