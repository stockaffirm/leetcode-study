window.PROBLEM = {
 "id": "876",
 "title": "Middle of the Linked List",
 "level": "Easy",
 "topic": "Linked List",
 "question": "",
 "why": "Return the middle node of a linked list (the second of the two middles if the length is even).",
 "idea": "Move one pointer one step and another two steps at a time; when the fast one reaches the end, the slow one is in the middle.",
 "input": "1 → 2 → 3 → 4 → 5",
 "output": "3 → 4 → 5",
 "notes": [],
 "best": "Move one pointer one step and another two steps at a time; when the fast one reaches the end, the slow one is in the middle.",
 "variants": [
  {
   "name": "Slow and fast pointers",
   "code": "class Solution:\n    def middleNode(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n        return slow",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Move one pointer one step and another two steps at a time; when the fast one reaches the end, the slow one is in the middle.",
   "frames": []
  }
 ]
};
