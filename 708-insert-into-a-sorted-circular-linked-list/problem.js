window.PROBLEM = {
 "id": "708",
 "title": "Insert into a Sorted Circular Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "A sorted circular linked list is given by any one of its nodes (the values go up around the circle and wrap from the biggest back to the smallest; the list may be empty). Insert a new value so the circle stays sorted and return a node of the list (the given one, or the new node for an empty list). Example: list 3→4→1→(3), insert 2 → 3→4→1→2→(3).",
 "why": "List 3→4→1→(back to 3) is sorted ascending with the wrap between 4 and 1. Inserting 2 goes after 1: 3→4→1→2.",
 "idea": "Walk around the circle looking for a spot where prev ≤ value ≤ next, or the wrap point (the biggest then the smallest) where the value is ≥ the biggest or ≤ the smallest. If we come back to the start, all values are equal: insert anywhere.",
 "input": "head = [3,4,1] (circular), insertVal = 2",
 "output": "[3,4,1,2] (circular)",
 "notes": [],
 "best": "Walk around the circle looking for a spot where prev ≤ value ≤ next, or the wrap point (the biggest then the smallest) where the value is ≥ the biggest or ≤ the smallest. If we come back to the start, all values are equal: insert anywhere.",
 "variants": [
  {
   "name": "Walk once around the circle",
   "code": "class Solution:\n    def insert(self, head, insertVal):\n        node = Node(insertVal)\n        if not head:\n            node.next = node\n            return node\n        cur = head\n        while True:\n            nxt = cur.next\n            if cur.val <= insertVal <= nxt.val or (cur.val > nxt.val and (insertVal >= cur.val or insertVal <= nxt.val)):\n                break\n            cur = nxt\n            if cur is head:\n                break\n        node.next = cur.next\n        cur.next = node\n        return head",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk around the circle looking for a spot where prev ≤ value ≤ next, or the wrap point (the biggest then the smallest) where the value is ≥ the biggest or ≤ the smallest. If we come back to the start, all values are equal: insert anywhere.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Find the largest node first",
   "tag": "Alternative",
   "code": "class Solution:\n    def insert(self, head, insertVal):\n        node = Node(insertVal)\n        if not head:\n            node.next = node\n            return node\n        cur = head\n        while cur.next is not head and cur.val <= cur.next.val:\n            cur = cur.next\n        if insertVal >= cur.val or insertVal <= cur.next.val:\n            node.next = cur.next\n            cur.next = node\n        else:\n            cur = cur.next\n            while cur.next.val < insertVal:\n                cur = cur.next\n            node.next = cur.next\n            cur.next = node\n        return head",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk to the largest node (the one before the wrap). If the value is the new maximum or minimum insert there, else find the gap starting from the smallest.",
   "frames": [],
   "alt": true
  }
 ]
};
