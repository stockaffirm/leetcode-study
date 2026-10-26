window.PROBLEM = {
 "id": "817",
 "title": "Linked List Components",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "head [0,1,2,3], nums [0,1,3] → components {0,1} and {3} → 2.",
 "idea": "Put nums in a set. Walk the list; a component starts at a node whose value is in the set while the previous node's value is not (or there is no previous node).",
 "input": "head = [0,1,2,3], nums = [0,1,3]",
 "output": "2",
 "notes": [],
 "best": "Put nums in a set. Walk the list; a component starts at a node whose value is in the set while the previous node's value is not (or there is no previous node).",
 "variants": [
  {
   "name": "Count runs of listed values",
   "code": "class Solution:\n    def numComponents(self, head, nums):\n        wanted = set(nums)\n        count = 0\n        in_run = False\n        while head:\n            if head.val in wanted:\n                if not in_run:\n                    count += 1\n                in_run = True\n            else:\n                in_run = False\n            head = head.next\n        return count",
   "time": "O(n)",
   "space": "O(m)",
   "explain": "Put nums in a set. Walk the list; a component starts at a node whose value is in the set while the previous node's value is not (or there is no previous node).",
   "frames": []
  }
 ]
};
