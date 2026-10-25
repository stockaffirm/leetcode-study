window.PROBLEM = {
 "id": "707",
 "title": "Design Linked List",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a linked list with: get(index) → the value (or −1 if the index is invalid); addAtHead(val); addAtTail(val); addAtIndex(index, val) which inserts before the node at that index (index = length appends; a larger index does nothing); deleteAtIndex(index). Example: addAtHead 1, addAtTail 3, addAtIndex 1 2 → list 1→2→3; get 1 → 2.",
 "why": "Implement a linked list with get(index), addAtHead, addAtTail, addAtIndex and deleteAtIndex.",
 "idea": "A dummy node in front removes the special cases. To change position i, walk to the node just before it.",
 "input": "addAtHead 1, addAtTail 3, addAtIndex 1 2, get 1",
 "output": "2",
 "notes": [],
 "best": "A dummy node in front removes the special cases. To change position i, walk to the node just before it.",
 "variants": [
  {
   "name": "Singly linked list with a dummy head",
   "code": "class MyLinkedList:\n    def __init__(self):\n        self.head = ListNode(0)\n        self.size = 0\n    def get(self, index):\n        if index < 0 or index >= self.size: return -1\n        cur = self.head.next\n        for _ in range(index): cur = cur.next\n        return cur.val\n    def addAtHead(self, val):\n        self.addAtIndex(0, val)\n    def addAtTail(self, val):\n        self.addAtIndex(self.size, val)\n    def addAtIndex(self, index, val):\n        if index > self.size: return\n        prev = self.head\n        for _ in range(index): prev = prev.next\n        prev.next = ListNode(val, prev.next)\n        self.size += 1\n    def deleteAtIndex(self, index):\n        if index < 0 or index >= self.size: return\n        prev = self.head\n        for _ in range(index): prev = prev.next\n        prev.next = prev.next.next\n        self.size -= 1",
   "time": "O(n) per operation",
   "space": "O(n)",
   "explain": "A dummy node in front removes the special cases. To change position i, walk to the node just before it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Python list",
   "tag": "Brute force",
   "code": "class MyLinkedList:\n    def __init__(self):\n        self.a = []\n    def get(self, index):\n        return self.a[index] if 0 <= index < len(self.a) else -1\n    def addAtHead(self, val):\n        self.a.insert(0, val)\n    def addAtTail(self, val):\n        self.a.append(val)\n    def addAtIndex(self, index, val):\n        if index <= len(self.a): self.a.insert(index, val)\n    def deleteAtIndex(self, index):\n        if 0 <= index < len(self.a): self.a.pop(index)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Back the structure with a list and use insert/pop.",
   "frames": [],
   "alt": true
  }
 ]
};
