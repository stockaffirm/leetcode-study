window.PROBLEM = {
 "id": "2181",
 "title": "Merge Nodes in Between Zeros",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "0→3→1→0→4→5→2→0 becomes 4 → 11.",
 "idea": "The list starts and ends with 0 and has no neighbouring zeros. Walk it, adding values into a running sum; at every 0 (after the first) emit a node with the sum and reset it.",
 "input": "head = [0,3,1,0,4,5,2,0]",
 "output": "[4, 11]",
 "notes": [],
 "best": "The list starts and ends with 0 and has no neighbouring zeros. Walk it, adding values into a running sum; at every 0 (after the first) emit a node with the sum and reset it.",
 "variants": [
  {
   "name": "Sum each block between zeros",
   "code": "class Solution:\n    def mergeNodes(self, head):\n        dummy = tail = ListNode()\n        total = 0\n        cur = head.next\n        while cur:\n            if cur.val == 0:\n                tail.next = ListNode(total)\n                tail = tail.next\n                total = 0\n            else:\n                total += cur.val\n            cur = cur.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The list starts and ends with 0 and has no neighbouring zeros. Walk it, adding values into a running sum; at every 0 (after the first) emit a node with the sum and reset it.",
   "frames": []
  }
 ]
};
