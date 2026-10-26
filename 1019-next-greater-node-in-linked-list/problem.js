window.PROBLEM = {
 "id": "1019",
 "title": "Next Greater Node In Linked List",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "For each node of a linked list find the value of the first node after it that is strictly larger (0 if none) and return these values in order. Example: 2→1→5 → [5,5,0].",
 "why": "2 → 1 → 5: the next greater values are [5, 5, 0].",
 "idea": "Copy the values into an array and use a decreasing stack of indices: when a value is bigger than the one at the top of the stack, it is the next greater value of that index. Indices left on the stack get 0.",
 "input": "head = [2,1,5]",
 "output": "[5, 5, 0]",
 "notes": [],
 "best": "Copy the values into an array and use a decreasing stack of indices: when a value is bigger than the one at the top of the stack, it is the next greater value of that index. Indices left on the stack get 0.",
 "variants": [
  {
   "name": "Monotonic stack over the list values",
   "code": "class Solution:\n    def nextLargerNodes(self, head):\n        vals = []\n        while head:\n            vals.append(head.val)\n            head = head.next\n        res = [0] * len(vals)\n        st = []\n        for i, v in enumerate(vals):\n            while st and vals[st[-1]] < v:\n                res[st.pop()] = v\n            st.append(i)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Copy the values into an array and use a decreasing stack of indices: when a value is bigger than the one at the top of the stack, it is the next greater value of that index. Indices left on the stack get 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Brute force scan",
   "tag": "Brute force",
   "code": "class Solution:\n    def nextLargerNodes(self, head):\n        vals = []\n        while head:\n            vals.append(head.val)\n            head = head.next\n        res = []\n        for i, v in enumerate(vals):\n            res.append(next((w for w in vals[i + 1:] if w > v), 0))\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each node scan forward for the first larger value.",
   "frames": [],
   "alt": true
  }
 ]
};
