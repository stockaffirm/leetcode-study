window.PROBLEM = {
 "id": "622",
 "title": "Design Circular Queue",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "A queue of fixed size that reuses freed space at the front by wrapping around the end of its array.",
 "idea": "Store items in an array. The front is at index head; the next free slot is (head + size) % capacity. Use modulo to wrap.",
 "input": "capacity 3: enQueue 1,2,3,4; Rear; isFull; deQueue; enQueue 4; Rear",
 "output": "True,True,True,False,3,True,True,True,4",
 "notes": [],
 "best": "Store items in an array. The front is at index head; the next free slot is (head + size) % capacity. Use modulo to wrap.",
 "variants": [
  {
   "name": "Array + head index + size",
   "code": "class MyCircularQueue:\n    def __init__(self, k):\n        self.a = [0] * k\n        self.head = 0\n        self.size = 0\n    def enQueue(self, value):\n        if self.size == len(self.a): return False\n        self.a[(self.head + self.size) % len(self.a)] = value\n        self.size += 1\n        return True\n    def deQueue(self):\n        if self.size == 0: return False\n        self.head = (self.head + 1) % len(self.a)\n        self.size -= 1\n        return True\n    def Front(self):\n        return -1 if self.size == 0 else self.a[self.head]\n    def Rear(self):\n        return -1 if self.size == 0 else self.a[(self.head + self.size - 1) % len(self.a)]\n    def isEmpty(self):\n        return self.size == 0\n    def isFull(self):\n        return self.size == len(self.a)",
   "time": "O(1) per op",
   "space": "O(k)",
   "explain": "Store items in an array. The front is at index head; the next free slot is (head + size) % capacity. Use modulo to wrap.",
   "frames": []
  }
 ]
};
