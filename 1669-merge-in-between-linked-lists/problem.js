window.PROBLEM = {
 "id": "1669",
 "title": "Merge In Between Linked Lists",
 "level": "Medium",
 "topic": "Linked List",
 "question": "You are given two linked lists (chains of nodes where each points to the next), list1 and list2, and two positions a and b (counting from 0). Remove the nodes of list1 from position a through position b, and put the whole of list2 in their place. Return the head of list1. Example: list1 = 10→1→13→6→9→5, a=3, b=4 (the nodes 6 and 9), list2 = 1000000→1000001→1000002 → 10→1→13→1000000→1000001→1000002→5.",
 "why": "Cut nodes a through b out of list1 and put all of list2 in their place.",
 "idea": "Walk to the node just before position a and the node just after b, point the first at list2's head, and point list2's tail at the second.",
 "input": "list1 = 10→1→13→6→9→5, a=3, b=4, list2 = 1000000→1000001→1000002",
 "output": "10→1→13→1000000→1000001→1000002→5",
 "notes": [],
 "best": "Walk to the node just before position a and the node just after b, point the first at list2's head, and point list2's tail at the second.",
 "variants": [
  {
   "name": "Find the two boundary nodes, relink",
   "code": "class Solution:\n    def mergeInBetween(self, list1, a, b, list2):\n        before = list1\n        for _ in range(a - 1): before = before.next\n        after = before\n        for _ in range(b - a + 2): after = after.next\n        before.next = list2\n        tail = list2\n        while tail.next: tail = tail.next\n        tail.next = after\n        return list1",
   "time": "O(n + m)",
   "space": "O(1)",
   "explain": "Walk to the node just before position a and the node just after b, point the first at list2's head, and point list2's tail at the second.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect nodes in a list",
   "tag": "Alternative",
   "code": "class Solution:\n    def mergeInBetween(self, list1, a, b, list2):\n        nodes, cur = [], list1\n        while cur:\n            nodes.append(cur)\n            cur = cur.next\n        tail = list2\n        while tail.next: tail = tail.next\n        nodes[a - 1].next = list2\n        tail.next = nodes[b + 1] if b + 1 < len(nodes) else None\n        return list1",
   "time": "O(n + m)",
   "space": "O(n)",
   "explain": "Put list1's nodes in an array so the boundary nodes can be reached by index.",
   "frames": [],
   "alt": true
  }
 ]
};
