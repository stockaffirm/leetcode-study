window.PROBLEM = {
 "id": "1474",
 "title": "Delete N Nodes After M Nodes of a Linked List",
 "level": "Easy",
 "topic": "Linked List",
 "question": "",
 "why": "[1..13], m=2, n=3 → 1,2,6,7,11,12.",
 "idea": "Walk the list: keep m nodes (advance m − 1 steps from the last kept node), then unlink the next n nodes, and repeat until the end.",
 "input": "head = [1,2,3,4,5,6,7,8,9,10,11,12,13], m = 2, n = 3",
 "output": "[1, 2, 6, 7, 11, 12]",
 "notes": [],
 "best": "Walk the list: keep m nodes (advance m − 1 steps from the last kept node), then unlink the next n nodes, and repeat until the end.",
 "variants": [
  {
   "name": "Keep m, skip n, repeat",
   "code": "class Solution:\n    def deleteNodes(self, head, m, n):\n        cur = head\n        while cur:\n            for _ in range(m - 1):\n                if cur:\n                    cur = cur.next\n            if not cur:\n                break\n            drop = cur.next\n            for _ in range(n):\n                if drop:\n                    drop = drop.next\n            cur.next = drop\n            cur = drop\n        return head",
   "time": "O(len)",
   "space": "O(1)",
   "explain": "Walk the list: keep m nodes (advance m − 1 steps from the last kept node), then unlink the next n nodes, and repeat until the end.",
   "frames": []
  }
 ]
};
