window.PROBLEM = {
 "id": "1171",
 "title": "Remove Zero Sum Consecutive Nodes from Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Given a linked list, repeatedly delete consecutive nodes whose values sum to 0, until there are none; return the head of the final list (any answer is accepted by LeetCode; this solution gives the one below). Example: 1→2→−3→3→1 → 3→1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Stack of prefix sums",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeZeroSumSublists(self, head):\n        vals, pre, pos, s = [], [0], {0: 0}, 0\n        while head:\n            s += head.val\n            if s in pos:\n                k = pos[s]\n                for p in pre[k + 1:]: pos.pop(p, None)\n                del vals[k:]\n                del pre[k + 1:]\n            else:\n                vals.append(head.val)\n                pre.append(s)\n                pos[s] = len(vals)\n            head = head.next\n        dummy = cur = ListNode(0)\n        for v in vals:\n            cur.next = ListNode(v)\n            cur = cur.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep the surviving values with their prefix sums; when a prefix sum repeats, drop everything after its first occurrence.",
   "frames": [],
   "alt": true
  }
 ]
};
