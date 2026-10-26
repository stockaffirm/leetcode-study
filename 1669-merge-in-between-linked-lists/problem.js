window.PROBLEM = {
 "id": "1669",
 "title": "Merge In Between Linked Lists",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
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
   "frames": []
  }
 ]
};
