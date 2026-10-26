window.PROBLEM = {
 "id": "2181",
 "title": "Merge Nodes in Between Zeros",
 "level": "Medium",
 "topic": "Linked List",
 "question": "A linked list starts and ends with 0 and has no two neighbouring zeros. Replace the nodes between consecutive zeros by one node holding their sum (remove the zeros). Return the new list. Example: 0,3,1,0,4,5,2,0 → 4,11.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect sums, then build the list",
   "tag": "Alternative",
   "code": "class Solution:\n    def mergeNodes(self, head):\n        sums = []\n        total = 0\n        cur = head.next\n        while cur:\n            if cur.val == 0:\n                sums.append(total)\n                total = 0\n            else:\n                total += cur.val\n            cur = cur.next\n        dummy = tail = ListNode()\n        for s in sums:\n            tail.next = ListNode(s)\n            tail = tail.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "First gather the block sums in a Python list, then create the nodes.",
   "frames": [],
   "alt": true
  }
 ]
};
