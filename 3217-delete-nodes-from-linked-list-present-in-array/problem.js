window.PROBLEM = {
 "id": "3217",
 "title": "Delete Nodes From Linked List Present in Array",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Remove from a linked list every node whose value appears in the array nums, and return the head. Example: nums [1,2,3], list 1→2→3→4→5 → 4→5.",
 "why": "nums {1,2,3}, list 1→2→3→4→5 → 4→5.",
 "idea": "Put nums in a set and walk the list with a dummy head, linking only nodes whose value is not in the set.",
 "input": "nums = [1,2,3], head = [1,2,3,4,5]",
 "output": "[4, 5]",
 "notes": [],
 "best": "Put nums in a set and walk the list with a dummy head, linking only nodes whose value is not in the set.",
 "variants": [
  {
   "name": "Skip nodes whose value is in a set",
   "code": "class Solution:\n    def modifiedList(self, nums, head):\n        bad = set(nums)\n        dummy = tail = ListNode()\n        while head:\n            if head.val not in bad:\n                tail.next = head\n                tail = head\n            head = head.next\n        tail.next = None\n        return dummy.next",
   "time": "O(n + m)",
   "space": "O(m)",
   "explain": "Put nums in a set and walk the list with a dummy head, linking only nodes whose value is not in the set.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Rebuild a list of kept values",
   "tag": "Alternative",
   "code": "class Solution:\n    def modifiedList(self, nums, head):\n        bad = set(nums)\n        vals = []\n        while head:\n            if head.val not in bad:\n                vals.append(head.val)\n            head = head.next\n        dummy = tail = ListNode()\n        for v in vals:\n            tail.next = ListNode(v)\n            tail = tail.next\n        return dummy.next",
   "time": "O(n + m)",
   "space": "O(n)",
   "explain": "Collect the kept values and build a new list.",
   "frames": [],
   "alt": true
  }
 ]
};
