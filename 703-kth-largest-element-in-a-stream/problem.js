window.PROBLEM = {
 "id": "703",
 "title": "Kth Largest Element in a Stream",
 "level": "Easy",
 "topic": "Heap",
 "question": "",
 "why": "k=3 with [4,5,8,2]: the 3rd largest is 4. Add 3 → still 4; add 5 → 5; add 10 → 5; add 9 → 8; add 4 → 8.",
 "idea": "Keep only the k largest numbers in a min-heap. Its top is the k-th largest overall. A new number is pushed, and if the heap grows beyond k the smallest is dropped.",
 "input": "KthLargest(3,[4,5,8,2]); add(3), add(5), add(10), add(9), add(4)",
 "output": "4, 5, 5, 8, 8",
 "notes": [],
 "best": "Keep only the k largest numbers in a min-heap. Its top is the k-th largest overall. A new number is pushed, and if the heap grows beyond k the smallest is dropped.",
 "variants": [
  {
   "name": "Min-heap of size k",
   "code": "class KthLargest:\n    def __init__(self, k, nums):\n        self.k = k\n        self.h = nums[:]\n        heapify(self.h)\n        while len(self.h) > k:\n            heappop(self.h)\n    def add(self, val):\n        heappush(self.h, val)\n        if len(self.h) > self.k:\n            heappop(self.h)\n        return self.h[0]",
   "time": "O(log k) per add",
   "space": "O(k)",
   "explain": "Keep only the k largest numbers in a min-heap. Its top is the k-th largest overall. A new number is pushed, and if the heap grows beyond k the smallest is dropped.",
   "frames": []
  }
 ]
};
