window.PROBLEM = {
 "id": "147",
 "title": "Insertion Sort List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "[4,2,1,3] → [1,2,3,4].",
 "idea": "Keep a dummy head for the sorted list. Take the nodes one by one; walk the sorted part to the first node larger than the current value and splice the node in before it.",
 "input": "head = [4,2,1,3]",
 "output": "[1, 2, 3, 4]",
 "notes": [],
 "best": "Keep a dummy head for the sorted list. Take the nodes one by one; walk the sorted part to the first node larger than the current value and splice the node in before it.",
 "variants": [
  {
   "name": "Insert each node into the sorted part",
   "code": "class Solution:\n    def insertionSortList(self, head):\n        dummy = ListNode(0)\n        cur = head\n        while cur:\n            nxt = cur.next\n            prev = dummy\n            while prev.next and prev.next.val < cur.val:\n                prev = prev.next\n            cur.next = prev.next\n            prev.next = cur\n            cur = nxt\n        return dummy.next",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Keep a dummy head for the sorted list. Take the nodes one by one; walk the sorted part to the first node larger than the current value and splice the node in before it.",
   "frames": []
  }
 ]
};
