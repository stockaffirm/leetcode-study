window.PROBLEM = {
 "id": "1171",
 "title": "Remove Zero Sum Consecutive Nodes from Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "Repeatedly delete consecutive nodes of a linked list that sum to 0, until none are left; return the resulting list.",
 "idea": "Two equal prefix sums mean the nodes between them sum to zero. First pass: remember the last node for each prefix sum. Second pass: from each prefix point, jump straight to that last node's next.",
 "input": "1→2→−3→3→1",
 "output": "3→1",
 "notes": [],
 "best": "Two equal prefix sums mean the nodes between them sum to zero. First pass: remember the last node for each prefix sum. Second pass: from each prefix point, jump straight to that last node's next.",
 "variants": [
  {
   "name": "Prefix sums, jump to the last equal prefix",
   "code": "class Solution:\n    def removeZeroSumSublists(self, head):\n        dummy = ListNode(0, head)\n        last, s, cur = {}, 0, dummy\n        while cur:\n            s += cur.val\n            last[s] = cur\n            cur = cur.next\n        s, cur = 0, dummy\n        while cur:\n            s += cur.val\n            cur.next = last[s].next\n            cur = cur.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Two equal prefix sums mean the nodes between them sum to zero. First pass: remember the last node for each prefix sum. Second pass: from each prefix point, jump straight to that last node's next.",
   "frames": []
  }
 ]
};
