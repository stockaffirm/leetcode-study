window.PROBLEM = {
 "id": "24",
 "title": "Swap Nodes in Pairs",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
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
   "frames": []
  }
 ]
};
