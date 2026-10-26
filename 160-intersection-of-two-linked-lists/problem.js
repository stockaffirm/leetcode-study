window.PROBLEM = {
 "id": "160",
 "title": "Intersection of Two Linked Lists",
 "level": "Easy",
 "topic": "Linked List",
 "question": "",
 "why": "Two linked lists merge into one tail at some node. Find the first shared node (or none).",
 "idea": "Walk one pointer along list A then list B, the other along B then A. Both walk the same total length, so they arrive at the shared node at the same moment (or both end at nothing).",
 "input": "A = 4→1→8→4→5, B = 5→6→1→8→4→5 (sharing 8→4→5)",
 "output": "the node with value 8",
 "notes": [],
 "best": "Walk one pointer along list A then list B, the other along B then A. Both walk the same total length, so they arrive at the shared node at the same moment (or both end at nothing).",
 "variants": [
  {
   "name": "Two pointers that swap lists",
   "code": "class Solution:\n    def getIntersectionNode(self, headA, headB):\n        a, b = headA, headB\n        while a is not b:\n            a = a.next if a else headB\n            b = b.next if b else headA\n        return a",
   "time": "O(m + n)",
   "space": "O(1)",
   "explain": "Walk one pointer along list A then list B, the other along B then A. Both walk the same total length, so they arrive at the shared node at the same moment (or both end at nothing).",
   "frames": []
  }
 ]
};
