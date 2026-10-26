window.PROBLEM = {
 "id": "160",
 "title": "Intersection of Two Linked Lists",
 "level": "Easy",
 "topic": "Linked List",
 "question": "Two singly linked lists (chains of nodes, each pointing to the next) may merge into a single shared tail at some node. Given the heads of both lists, return the first node where they share the same node (the same object, not just equal values), or nothing if they never meet. Example: A = 4→1→8→4→5 and B = 5→6→1→8→4→5 share the tail starting at node 8 → 8.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Set of visited nodes",
   "tag": "Alternative",
   "code": "class Solution:\n    def getIntersectionNode(self, headA, headB):\n        seen = set()\n        while headA:\n            seen.add(headA)\n            headA = headA.next\n        while headB:\n            if headB in seen: return headB\n            headB = headB.next\n        return None",
   "time": "O(m + n)",
   "space": "O(m)",
   "explain": "Remember every node of list A; the first node of B already seen is the intersection.",
   "frames": [],
   "alt": true
  }
 ]
};
