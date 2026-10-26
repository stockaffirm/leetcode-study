window.PROBLEM = {
 "id": "1111",
 "title": "Maximum Nesting Depth of Two Valid Parentheses Strings",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'(()())' → [0,1,1,1,1,0].",
 "idea": "Split the parentheses into two groups so the larger nesting depth of the two is minimal: give each parenthesis to group (depth mod 2). The depth of a '(' is the nesting level after it opens; its matching ')' gets the same group.",
 "input": "seq = \"(()())\"",
 "output": "[0, 1, 1, 1, 1, 0]",
 "notes": [],
 "best": "Split the parentheses into two groups so the larger nesting depth of the two is minimal: give each parenthesis to group (depth mod 2). The depth of a '(' is the nesting level after it opens; its matching ')' gets the same group.",
 "variants": [
  {
   "name": "Alternate the group by depth parity",
   "code": "class Solution:\n    def maxDepthAfterSplit(self, seq):\n        res = []\n        depth = 0\n        for c in seq:\n            if c == '(':\n                depth += 1\n                res.append((depth - 1) % 2)\n            else:\n                res.append((depth - 1) % 2)\n                depth -= 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Split the parentheses into two groups so the larger nesting depth of the two is minimal: give each parenthesis to group (depth mod 2). The depth of a '(' is the nesting level after it opens; its matching ')' gets the same group.",
   "frames": []
  }
 ]
};
