window.PROBLEM = {
 "id": "3479",
 "title": "Fruits Into Baskets III",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "fruits [4,2,5], baskets [3,5,4]: 4→5, 2→3, 5 has no basket → 1 unplaced.",
 "idea": "For each fruit in order take the leftmost unused basket whose capacity is at least the fruit size. A segment tree storing the maximum capacity per range lets us descend to the leftmost sufficient basket in O(log n), then set that leaf to 0.",
 "input": "fruits = [4,2,5], baskets = [3,5,4]",
 "output": "1",
 "notes": [],
 "best": "For each fruit in order take the leftmost unused basket whose capacity is at least the fruit size. A segment tree storing the maximum capacity per range lets us descend to the leftmost sufficient basket in O(log n), then set that leaf to 0.",
 "variants": [
  {
   "name": "Segment tree: leftmost basket with capacity ≥ fruit",
   "code": "class Solution:\n    def numOfUnplacedFruits(self, fruits, baskets):\n        n = len(baskets)\n        size = 1\n        while size < n:\n            size *= 2\n        tree = [0] * (2 * size)\n        for i, b in enumerate(baskets):\n            tree[size + i] = b\n        for i in range(size - 1, 0, -1):\n            tree[i] = max(tree[2 * i], tree[2 * i + 1])\n        unplaced = 0\n        for f in fruits:\n            if tree[1] < f:\n                unplaced += 1\n                continue\n            i = 1\n            while i < size:\n                i = 2 * i if tree[2 * i] >= f else 2 * i + 1\n            tree[i] = 0\n            i //= 2\n            while i:\n                tree[i] = max(tree[2 * i], tree[2 * i + 1])\n                i //= 2\n        return unplaced",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "For each fruit in order take the leftmost unused basket whose capacity is at least the fruit size. A segment tree storing the maximum capacity per range lets us descend to the leftmost sufficient basket in O(log n), then set that leaf to 0.",
   "frames": []
  }
 ]
};
