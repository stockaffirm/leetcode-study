window.PROBLEM = {
 "id": "203",
 "title": "Remove Linked List Elements",
 "level": "Easy",
 "topic": "Linked List",
 "question": "Given the head of a linked list and a value, delete every node whose value equals it and return the new head. Example: 1→2→6→3→4→5→6 with value 6 → 1→2→3→4→5.",
 "why": "Remove every node with a given value from a linked list.",
 "idea": "Put a dummy node before the head so deleting the first node is no special case; skip nodes that match.",
 "input": "[1,2,6,3,4,5,6], val = 6",
 "output": "[1,2,3,4,5]",
 "notes": [],
 "best": "Put a dummy node before the head so deleting the first node is no special case; skip nodes that match.",
 "variants": [
  {
   "name": "Dummy head",
   "code": "class Solution:\n    def removeElements(self, head, val):\n        dummy = ListNode(0, head)\n        cur = dummy\n        while cur.next:\n            if cur.next.val == val: cur.next = cur.next.next\n            else: cur = cur.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Put a dummy node before the head so deleting the first node is no special case; skip nodes that match.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeElements(self, head, val):\n        if not head: return None\n        head.next = self.removeElements(head.next, val)\n        return head.next if head.val == val else head",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Clean the rest of the list first, then decide about the head.",
   "frames": [],
   "alt": true
  }
 ]
};
