window.PROBLEM = {
 "id": "24",
 "title": "Swap Nodes in Pairs",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Swap every two adjacent nodes of a linked list and return the new head. You must change links, not the values stored in the nodes. Example: 1→2→3→4 → 2→1→4→3; an odd last node stays in place.",
 "why": "Swap every two adjacent nodes of a linked list (by changing links, not values).",
 "idea": "Keep a pointer to the node before each pair and rewire three links.",
 "input": "1→2→3→4",
 "output": "2→1→4→3",
 "notes": [],
 "best": "Keep a pointer to the node before each pair and rewire three links.",
 "variants": [
  {
   "name": "Dummy head, swap neighbours",
   "code": "class Solution:\n    def swapPairs(self, head):\n        dummy = ListNode(0, head)\n        prev = dummy\n        while prev.next and prev.next.next:\n            a, b = prev.next, prev.next.next\n            a.next = b.next\n            b.next = a\n            prev.next = b\n            prev = a\n        return dummy.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep a pointer to the node before each pair and rewire three links.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def swapPairs(self, head):\n        if not head or not head.next: return head\n        second = head.next\n        head.next = self.swapPairs(second.next)\n        second.next = head\n        return second",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Swap the first pair and recurse on the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
