window.PROBLEM = {
 "id": "708",
 "title": "Insert into a Sorted Circular Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
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
   "frames": []
  }
 ]
};
