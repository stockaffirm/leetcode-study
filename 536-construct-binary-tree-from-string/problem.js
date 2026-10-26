window.PROBLEM = {
 "id": "536",
 "title": "Construct Binary Tree from String",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Build a binary tree from a string: an integer (possibly negative) followed by zero, one or two groups in brackets. The first group is the left child and the second the right child, each written in the same form. Return the root. Example: '4(2(3)(1))(6(5))' → [4,2,6,3,1,5].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Stack parser",
   "tag": "Alternative",
   "code": "class Solution:\n    def str2tree(self, s):\n        stack = []\n        i = 0\n        while i < len(s):\n            if s[i] == \")\":\n                stack.pop()\n                i += 1\n            elif s[i] == \"(\":\n                i += 1\n            else:\n                j = i\n                while j < len(s) and (s[j] == \"-\" or s[j].isdigit()):\n                    j += 1\n                node = TreeNode(int(s[i:j]))\n                i = j\n                if stack:\n                    parent = stack[-1]\n                    if parent.left is None:\n                        parent.left = node\n                    else:\n                        parent.right = node\n                stack.append(node)\n        return stack[0] if stack else None",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Push each new node; a ')' closes the node on top. The first free child slot of the top node gets the next node.",
   "frames": [],
   "alt": true
  }
 ]
};
