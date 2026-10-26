window.PROBLEM = {
 "id": "143",
 "title": "Reorder List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "Reorder a linked list L0→L1→…→Ln into L0→Ln→L1→Ln−1→… in place.",
 "idea": "Find the middle, reverse the second half, then weave the two halves together one node at a time.",
 "input": "1→2→3→4",
 "output": "1→4→2→3",
 "notes": [],
 "best": "Find the middle, reverse the second half, then weave the two halves together one node at a time.",
 "variants": [
  {
   "name": "Split, reverse the second half, interleave",
   "code": "class Solution:\n    def reorderList(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow, fast = slow.next, fast.next.next\n        prev, cur = None, slow.next\n        slow.next = None\n        while cur:\n            cur.next, prev, cur = prev, cur, cur.next\n        a, b = head, prev\n        while b:\n            a.next, b.next, a, b = b, a.next, a.next, b.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Find the middle, reverse the second half, then weave the two halves together one node at a time.",
   "frames": []
  }
 ]
};
