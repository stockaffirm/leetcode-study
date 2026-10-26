window.PROBLEM = {
 "id": "385",
 "title": "Mini Parser",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
