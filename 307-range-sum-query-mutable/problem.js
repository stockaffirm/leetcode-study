window.PROBLEM = {
 "id": "307",
 "title": "Range Sum Query - Mutable",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "[1,3,5]: sum(0,2)=9; set index 1 to 2; sum(0,2)=8.",
 "idea": "A Fenwick tree stores partial sums so both a point update and a prefix-sum query touch only O(log n) cells (jump by the lowest set bit). Range sum = prefix(right) − prefix(left−1).",
 "input": "NumArray([1,3,5]); sumRange(0,2); update(1,2); sumRange(0,2)",
 "output": "[9, None, 8]",
 "notes": [],
 "best": "A Fenwick tree stores partial sums so both a point update and a prefix-sum query touch only O(log n) cells (jump by the lowest set bit). Range sum = prefix(right) − prefix(left−1).",
 "variants": [
  {
   "name": "Fenwick tree (binary indexed tree)",
   "code": "class NumArray:\n    def __init__(self, nums):\n        self.n = len(nums)\n        self.nums = [0] * self.n\n        self.tree = [0] * (self.n + 1)\n        for i, v in enumerate(nums):\n            self.update(i, v)\n\n    def update(self, index, val):\n        delta = val - self.nums[index]\n        self.nums[index] = val\n        i = index + 1\n        while i <= self.n:\n            self.tree[i] += delta\n            i += i & -i\n\n    def _prefix(self, i):\n        s = 0\n        while i > 0:\n            s += self.tree[i]\n            i -= i & -i\n        return s\n\n    def sumRange(self, left, right):\n        return self._prefix(right + 1) - self._prefix(left)",
   "time": "O(log n) per call",
   "space": "O(n)",
   "explain": "A Fenwick tree stores partial sums so both a point update and a prefix-sum query touch only O(log n) cells (jump by the lowest set bit). Range sum = prefix(right) − prefix(left−1).",
   "frames": []
  }
 ]
};
