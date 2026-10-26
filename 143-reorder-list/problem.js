window.PROBLEM = {
 "id": "143",
 "title": "Reorder List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Rearrange a linked list L0 → L1 → … → Ln−1 → Ln in place into L0 → Ln → L1 → Ln−1 → L2 → Ln−2 → … Do not change the values, only the links. Example: 1→2→3→4 becomes 1→4→2→3; 1→2→3→4→5 becomes 1→5→2→4→3.",
 "why": "Reorder a linked list L0→L1→…→Ln into L0→Ln→L1→Ln−1→… in place.",
 "idea": "Find the middle, reverse the second half, then weave the two halves together one node at a time.",
 "input": "1→2→3→4",
 "output": "1→4→2→3",
 "notes": [],
 "best": "Find the middle, reverse the second half, then weave the two halves together one node at a time.",
 "variants": [
  {
   "name": "Split, reverse the second half, interleave",
   "code": "class Solution:\n    def reorderList(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow, fast = slow.next, fast.next.next\n        prev, cur = None, slow.next\n        slow.next = None\n        while cur:\n            cur.next, prev, cur = prev, cur, cur.next\n        a, b = head, prev\n        while b:\n            a.next, b.next, a, b = b, a.next, a.next, b.next",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Find the middle, reverse the second half, then weave the two halves together one node at a time.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect nodes in a list",
   "tag": "Alternative",
   "code": "class Solution:\n    def reorderList(self, head):\n        nodes = []\n        cur = head\n        while cur:\n            nodes.append(cur)\n            cur = cur.next\n        l, r = 0, len(nodes) - 1\n        while l < r:\n            nodes[l].next = nodes[r]\n            l += 1\n            if l == r: break\n            nodes[r].next = nodes[l]\n            r -= 1\n        nodes[l].next = None",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put all nodes in an array and link them from both ends towards the middle.",
   "frames": [],
   "alt": true
  }
 ]
};
