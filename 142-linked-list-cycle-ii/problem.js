window.PROBLEM = {
 "id": "142",
 "title": "Linked List Cycle II",
 "level": "Medium",
 "topic": "Linked List",
 "question": "A linked list may contain a cycle. Return the node where the cycle begins, or null if there is no cycle (without changing the list, ideally with O(1) (fixed time or memory, however big the input) extra memory). Example: 3 → 2 → 0 → −4 with the tail connecting back to the node 2 → the node with value 2. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "The list 3→2→0→−4 loops back to the node 2, so the cycle starts at the node with value 2.",
 "idea": "Move a slow (1 step) and a fast (2 steps) pointer. If they meet there is a cycle. Put one pointer back to the head and move both one step at a time: they meet exactly at the start of the cycle.",
 "input": "head = [3,2,0,-4], tail connects to index 1",
 "output": "the node with value 2",
 "notes": [],
 "best": "Move a slow (1 step) and a fast (2 steps) pointer. If they meet there is a cycle. Put one pointer back to the head and move both one step at a time: they meet exactly at the start of the cycle.",
 "variants": [
  {
   "name": "Floyd: meet, then restart one pointer",
   "code": "class Solution:\n    def detectCycle(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow = slow.next\n            fast = fast.next.next\n            if slow is fast:\n                slow = head\n                while slow is not fast:\n                    slow = slow.next\n                    fast = fast.next\n                return slow\n        return None",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Move a slow (1 step) and a fast (2 steps) pointer. If they meet there is a cycle. Put one pointer back to the head and move both one step at a time: they meet exactly at the start of the cycle.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remember visited nodes",
   "tag": "Brute force",
   "code": "class Solution:\n    def detectCycle(self, head):\n        seen = set()\n        cur = head\n        while cur:\n            if cur in seen:\n                return cur\n            seen.add(cur)\n            cur = cur.next\n        return None",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The first node we see twice is the start of the cycle.",
   "frames": [],
   "alt": true
  }
 ]
};
