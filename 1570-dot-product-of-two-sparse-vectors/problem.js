window.PROBLEM = {
 "id": "1570",
 "title": "Dot Product of Two Sparse Vectors",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
