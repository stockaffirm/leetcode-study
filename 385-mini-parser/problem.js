window.PROBLEM = {
 "id": "385",
 "title": "Mini Parser",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "You are given a string s that describes a nested list of integers, like '[123,[456,[789]]]' or just '324'. Return it as a NestedInteger structure (an object that is either a single integer or a list of NestedIntegers). Example: '[123,[456,[789]]]' → a list containing 123 and a list containing 456 and a list containing 789.",
 "why": "Turn a text like '[123,[456,[789]]]' into a nested structure of integers and lists.",
 "idea": "Scan the characters. '[' starts a new list (push the current one on a stack), digits build a number, ',' or ']' finish the number and add it to the current list, and ']' pops back to the parent list.",
 "input": "\"[123,[456,[789]]]\"",
 "output": "[123,[456,[789]]]",
 "notes": [],
 "best": "Scan the characters. '[' starts a new list (push the current one on a stack), digits build a number, ',' or ']' finish the number and add it to the current list, and ']' pops back to the parent list.",
 "variants": [
  {
   "name": "Stack of nested lists",
   "code": "class Solution:\n    def deserialize(self, s):\n        if s[0] != '[': return NestedInteger(int(s))\n        stack, num = [], ''\n        cur = None\n        for ch in s:\n            if ch == '[':\n                if cur is not None: stack.append(cur)\n                cur = NestedInteger()\n            elif ch == ']' or ch == ',':\n                if num:\n                    cur.add(NestedInteger(int(num)))\n                    num = ''\n                if ch == ']' and stack:\n                    parent = stack.pop()\n                    parent.add(cur)\n                    cur = parent\n            else:\n                num += ch\n        return cur",
   "time": "O(n)",
   "space": "O(depth)",
   "explain": "Scan the characters. '[' starts a new list (push the current one on a stack), digits build a number, ',' or ']' finish the number and add it to the current list, and ']' pops back to the parent list.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursive descent",
   "tag": "Alternative",
   "code": "class Solution:\n    def deserialize(self, s):\n        i = 0\n        def parse():\n            nonlocal i\n            if s[i] == '[':\n                i += 1\n                ni = NestedInteger()\n                while s[i] != ']':\n                    ni.add(parse())\n                    if s[i] == ',': i += 1\n                i += 1\n                return ni\n            j = i\n            while i < len(s) and (s[i] == '-' or s[i].isdigit()): i += 1\n            return NestedInteger(int(s[j:i]))\n        return parse()",
   "time": "O(n)",
   "space": "O(depth)",
   "explain": "A function that parses either a number or a list, calling itself for nested lists.",
   "frames": [],
   "alt": true
  }
 ]
};
