window.PROBLEM = {
 "id": "1836",
 "title": "Remove Duplicates From an Unsorted Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "[1,2,3,2] → both 2s are removed → [1,3].",
 "idea": "Count how often each value occurs. Rebuild the list skipping every node whose value occurs more than once (all copies are deleted, not just the extras).",
 "input": "head = [1,2,3,2]",
 "output": "[1, 3]",
 "notes": [],
 "best": "Count how often each value occurs. Rebuild the list skipping every node whose value occurs more than once (all copies are deleted, not just the extras).",
 "variants": [
  {
   "name": "Count values, then drop every node whose value repeats",
   "code": "class Solution:\n    def deleteDuplicatesUnsorted(self, head):\n        cnt = Counter()\n        node = head\n        while node:\n            cnt[node.val] += 1\n            node = node.next\n        dummy = ListNode(0, head)\n        prev = dummy\n        while prev.next:\n            if cnt[prev.next.val] > 1:\n                prev.next = prev.next.next\n            else:\n                prev = prev.next\n        return dummy.next",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count how often each value occurs. Rebuild the list skipping every node whose value occurs more than once (all copies are deleted, not just the extras).",
   "frames": []
  }
 ]
};
