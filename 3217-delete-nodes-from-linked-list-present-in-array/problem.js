window.PROBLEM = {
 "id": "3217",
 "title": "Delete Nodes From Linked List Present in Array",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
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
   "frames": []
  }
 ]
};
