window.PROBLEM = {
 "id": "83",
 "title": "Remove Duplicates from Sorted List",
 "level": "Easy",
 "topic": "Linked List",
 "question": "",
 "why": "1 → 1 → 2 becomes 1 → 2.",
 "idea": "Because the list is sorted, duplicates are neighbours. If the next node has the same value, unlink it; otherwise move on.",
 "input": "head = [1,1,2]",
 "output": "[1,2]",
 "notes": [],
 "best": "Because the list is sorted, duplicates are neighbours. If the next node has the same value, unlink it; otherwise move on.",
 "variants": [
  {
   "name": "Skip equal neighbours",
   "code": "class Solution:\n    def deleteDuplicates(self, head):\n        cur = head\n        while cur and cur.next:\n            if cur.val == cur.next.val:\n                cur.next = cur.next.next\n            else:\n                cur = cur.next\n        return head",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Because the list is sorted, duplicates are neighbours. If the next node has the same value, unlink it; otherwise move on.",
   "frames": []
  }
 ]
};
