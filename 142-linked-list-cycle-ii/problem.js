window.PROBLEM = {
 "id": "142",
 "title": "Linked List Cycle II",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
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
   "frames": []
  }
 ]
};
