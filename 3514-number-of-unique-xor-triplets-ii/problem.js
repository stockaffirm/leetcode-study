window.PROBLEM = {
 "id": "3514",
 "title": "Number of Unique XOR Triplets II",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[1,3] → XORs of triplets (i ≤ j ≤ k): 1, 3, 1^1^3 = 3, 1^3^3 = 1 ... → 2 distinct values.",
 "idea": "A triplet i ≤ j ≤ k can repeat indices, so the set of all XORs of two numbers (including a with itself, which gives 0) combined with any third number covers every triplet. Build the set of pair XORs, then XOR (exclusive OR) each with each number; the answer is the size of the resulting set.",
 "input": "nums = [1,3]",
 "output": "2",
 "notes": [],
 "best": "A triplet i ≤ j ≤ k can repeat indices, so the set of all XORs of two numbers (including a with itself, which gives 0) combined with any third number covers every triplet. Build the set of pair XORs, then XOR (exclusive OR) each with each number; the answer is the size of the resulting set.",
 "variants": [
  {
   "name": "Set of pair XORs, then XOR with every number",
   "code": "class Solution:\n    def uniqueXorTriplets(self, nums):\n        vals = set(nums)\n        pairs = {a ^ b for a in vals for b in vals}\n        return len({p ^ c for p in pairs for c in vals})",
   "time": "O(n² + n·V)",
   "space": "O(V)",
   "explain": "A triplet i ≤ j ≤ k can repeat indices, so the set of all XORs of two numbers (including a with itself, which gives 0) combined with any third number covers every triplet. Build the set of pair XORs, then XOR (exclusive OR) each with each number; the answer is the size of the resulting set.",
   "frames": []
  }
 ]
};
