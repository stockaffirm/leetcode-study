window.PROBLEM = {
 "id": "536",
 "title": "Construct Binary Tree from String",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "'4(2(3)(1))(6(5))': 4 is the root, (2(3)(1)) is its left subtree, (6(5)) its right subtree.",
 "idea": "Read a number to make a node. If a '(' follows, parse the left child and skip its ')'; if another '(' follows, parse the right child the same way. A shared index moves through the string.",
 "input": "s = \"4(2(3)(1))(6(5))\"",
 "output": "[4,2,6,3,1,5]",
 "notes": [],
 "best": "Read a number to make a node. If a '(' follows, parse the left child and skip its ')'; if another '(' follows, parse the right child the same way. A shared index moves through the string.",
 "variants": [
  {
   "name": "Recursive descent parser",
   "code": "class Solution:\n    def str2tree(self, s):\n        i = 0\n        def parse():\n            nonlocal i\n            j = i\n            while j < len(s) and (s[j] == \"-\" or s[j].isdigit()):\n                j += 1\n            node = TreeNode(int(s[i:j]))\n            i = j\n            if i < len(s) and s[i] == \"(\":\n                i += 1\n                node.left = parse()\n                i += 1\n            if i < len(s) and s[i] == \"(\":\n                i += 1\n                node.right = parse()\n                i += 1\n            return node\n        return parse() if s else None",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Read a number to make a node. If a '(' follows, parse the left child and skip its ')'; if another '(' follows, parse the right child the same way. A shared index moves through the string.",
   "frames": []
  }
 ]
};
