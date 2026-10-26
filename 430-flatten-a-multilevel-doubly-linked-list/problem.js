window.PROBLEM = {
 "id": "430",
 "title": "Flatten a Multilevel Doubly Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "1-2-3-4 with child list 7-8 under 3: result 1-2-3-7-8-4.",
 "idea": "Walk the list. When a node has a child, push its next onto a stack, splice the child list in as its next (fix prev, clear child). When the end of a list is reached, pop the saved node and link it after the tail.",
 "input": "head = 1-2-3-4-5-6, child of 3 = 7-8-9-10, child of 8 = 11-12",
 "output": "[1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]",
 "notes": [],
 "best": "Walk the list. When a node has a child, push its next onto a stack, splice the child list in as its next (fix prev, clear child). When the end of a list is reached, pop the saved node and link it after the tail.",
 "variants": [
  {
   "name": "Stack of saved next pointers",
   "code": "class Solution:\n    def flatten(self, head):\n        cur = head\n        st = []\n        while cur:\n            if cur.child:\n                if cur.next:\n                    st.append(cur.next)\n                cur.next = cur.child\n                cur.next.prev = cur\n                cur.child = None\n            elif not cur.next and st:\n                nx = st.pop()\n                cur.next = nx\n                nx.prev = cur\n            cur = cur.next\n        return head",
   "time": "O(n)",
   "space": "O(depth)",
   "explain": "Walk the list. When a node has a child, push its next onto a stack, splice the child list in as its next (fix prev, clear child). When the end of a list is reached, pop the saved node and link it after the tail.",
   "frames": []
  }
 ]
};
