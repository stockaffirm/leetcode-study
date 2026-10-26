window.PROBLEM = {
 "id": "2276",
 "title": "Count Integers in Intervals",
 "level": "Hard",
 "topic": "Design",
 "question": "",
 "why": "Keep adding ranges like [2,3] and [7,10]; at any time say how many different integers are covered in total.",
 "idea": "Store covered ranges as sorted, non-overlapping intervals. A new range swallows every interval it overlaps; update the running total by removing their sizes and adding the merged size.",
 "input": "add(2,3), add(7,10), count(), add(5,8), count()",
 "output": "6, 8",
 "notes": [],
 "best": "Store covered ranges as sorted, non-overlapping intervals. A new range swallows every interval it overlaps; update the running total by removing their sizes and adding the merged size.",
 "variants": [
  {
   "name": "Merged disjoint intervals",
   "code": "class CountIntervals:\n    def __init__(self):\n        self.L = []\n        self.R = []\n        self.total = 0\n    def add(self, left, right):\n        i = bisect_left(self.R, left)\n        j = i\n        while j < len(self.L) and self.L[j] <= right:\n            left = min(left, self.L[j])\n            right = max(right, self.R[j])\n            self.total -= self.R[j] - self.L[j] + 1\n            j += 1\n        self.L[i:j] = [left]\n        self.R[i:j] = [right]\n        self.total += right - left + 1\n    def count(self):\n        return self.total",
   "time": "O(log n + merged) per add",
   "space": "O(n)",
   "explain": "Store covered ranges as sorted, non-overlapping intervals. A new range swallows every interval it overlaps; update the running total by removing their sizes and adding the merged size.",
   "frames": []
  }
 ]
};
