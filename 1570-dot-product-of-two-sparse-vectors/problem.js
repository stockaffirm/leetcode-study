window.PROBLEM = {
 "id": "1570",
 "title": "Dot Product of Two Sparse Vectors",
 "level": "Medium",
 "topic": "Design",
 "question": "A sparse vector is a long list of numbers that is mostly zeros. Design a class SparseVector(nums) that stores one efficiently, with a method dotProduct(vec) that returns its dot product with another sparse vector (multiply the numbers at matching positions, then add all those products). Example: [1,0,0,2,3] · [0,3,0,4,0] = 1·0 + 0·3 + 0·0 + 2·4 + 3·0 = 8.",
 "why": "Two long lists are mostly zeros. Their dot product (multiply matching positions, then add) only needs the positions where both are non-zero.",
 "idea": "Keep each vector as {position: value} for non-zero entries only. For the dot product loop over the smaller dictionary and look each position up in the other.",
 "input": "[1,0,0,2,3] · [0,3,0,4,0]",
 "output": "8",
 "notes": [],
 "best": "Keep each vector as {position: value} for non-zero entries only. For the dot product loop over the smaller dictionary and look each position up in the other.",
 "variants": [
  {
   "name": "Store only the non-zero entries",
   "code": "class SparseVector:\n    def __init__(self, nums):\n        self.nz = {i: x for i, x in enumerate(nums) if x}\n    def dotProduct(self, vec):\n        a, b = self.nz, vec.nz\n        if len(a) > len(b): a, b = b, a\n        return sum(x * b[i] for i, x in a.items() if i in b)",
   "time": "O(non-zeros)",
   "space": "O(non-zeros)",
   "explain": "Keep each vector as {position: value} for non-zero entries only. For the dot product loop over the smaller dictionary and look each position up in the other.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "List of (index, value) pairs",
   "tag": "Alternative",
   "code": "class SparseVector:\n    def __init__(self, nums):\n        self.pairs = [(i, x) for i, x in enumerate(nums) if x]\n    def dotProduct(self, vec):\n        i = j = total = 0\n        a, b = self.pairs, vec.pairs\n        while i < len(a) and j < len(b):\n            if a[i][0] == b[j][0]:\n                total += a[i][1] * b[j][1]\n                i += 1\n                j += 1\n            elif a[i][0] < b[j][0]: i += 1\n            else: j += 1\n        return total",
   "time": "O(n + m)",
   "space": "O(non-zeros)",
   "explain": "Keep sorted non-zero pairs and walk both lists with two pointers.",
   "frames": [],
   "alt": true
  }
 ]
};
