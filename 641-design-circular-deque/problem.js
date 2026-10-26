window.PROBLEM = {
 "id": "641",
 "title": "Design Circular Deque",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a circular deque (a double-ended queue of fixed size k, wrapping around its storage): insertFront(value) and insertLast(value) add at either end (false if full); deleteFront() and deleteLast() remove from either end (false if empty); getFront() and getRear() return the first and last items (-1 if empty); isEmpty() and isFull(). Example (size 3): insertLast 1, insertLast 2, insertFront 3 succeed, insertFront 4 fails (full); getRear → 2; isFull → true; deleteLast; insertFront 4 works; getFront → 4.",
 "why": "A fixed-size queue you can add to and remove from at BOTH ends, wrapping around its array.",
 "idea": "Keep a head index and a size. Inserting at the front moves head back by one (mod capacity); inserting at the back writes at (head + size) mod capacity.",
 "input": "capacity 3: insertLast 1, 2; insertFront 3, 4; getRear; isFull; deleteLast; insertFront 4; getFront",
 "output": "True,True,True,False,2,True,True,True,4",
 "notes": [],
 "best": "Keep a head index and a size. Inserting at the front moves head back by one (mod capacity); inserting at the back writes at (head + size) mod capacity.",
 "variants": [
  {
   "name": "Circular array with head index",
   "code": "class MyCircularDeque:\n    def __init__(self, k):\n        self.a = [0] * k\n        self.head = 0\n        self.size = 0\n    def insertFront(self, value):\n        if self.isFull(): return False\n        self.head = (self.head - 1) % len(self.a)\n        self.a[self.head] = value\n        self.size += 1\n        return True\n    def insertLast(self, value):\n        if self.isFull(): return False\n        self.a[(self.head + self.size) % len(self.a)] = value\n        self.size += 1\n        return True\n    def deleteFront(self):\n        if self.isEmpty(): return False\n        self.head = (self.head + 1) % len(self.a)\n        self.size -= 1\n        return True\n    def deleteLast(self):\n        if self.isEmpty(): return False\n        self.size -= 1\n        return True\n    def getFront(self):\n        return -1 if self.isEmpty() else self.a[self.head]\n    def getRear(self):\n        return -1 if self.isEmpty() else self.a[(self.head + self.size - 1) % len(self.a)]\n    def isEmpty(self):\n        return self.size == 0\n    def isFull(self):\n        return self.size == len(self.a)",
   "time": "O(1) per op",
   "space": "O(k)",
   "explain": "Keep a head index and a size. Inserting at the front moves head back by one (mod capacity); inserting at the back writes at (head + size) mod capacity.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Python deque wrapper",
   "tag": "Pythonic",
   "code": "class MyCircularDeque:\n    def __init__(self, k):\n        self.k = k\n        self.d = deque()\n    def insertFront(self, value):\n        if self.isFull(): return False\n        self.d.appendleft(value)\n        return True\n    def insertLast(self, value):\n        if self.isFull(): return False\n        self.d.append(value)\n        return True\n    def deleteFront(self):\n        if not self.d: return False\n        self.d.popleft()\n        return True\n    def deleteLast(self):\n        if not self.d: return False\n        self.d.pop()\n        return True\n    def getFront(self):\n        return self.d[0] if self.d else -1\n    def getRear(self):\n        return self.d[-1] if self.d else -1\n    def isEmpty(self):\n        return not self.d\n    def isFull(self):\n        return len(self.d) == self.k",
   "time": "O(1) per op",
   "space": "O(k)",
   "explain": "Let collections.deque do the work and only enforce the size limit.",
   "frames": [],
   "alt": true
  }
 ]
};
