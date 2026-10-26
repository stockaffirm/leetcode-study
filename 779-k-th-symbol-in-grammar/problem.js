window.PROBLEM = {
 "id": "779",
 "title": "K-th Symbol in Grammar",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Row 1 of a table is 0. Each next row replaces every 0 by 01 and every 1 by 10. Return the k-th symbol (1-indexed) of row n. Example: n=2, k=2 → 1.",
 "why": "Row 2 is 01: the 1st symbol is 0, the 2nd is 1.",
 "idea": "Each row is the previous one with 0 → 01 and 1 → 10. The k-th symbol is the parity of the number of 1 bits in k − 1 (the Thue–Morse sequence).",
 "input": "n = 2, k = 2",
 "output": "1",
 "notes": [],
 "best": "Each row is the previous one with 0 → 01 and 1 → 10. The k-th symbol is the parity of the number of 1 bits in k − 1 (the Thue–Morse sequence).",
 "variants": [
  {
   "name": "Parity of the set bits of k − 1",
   "code": "class Solution:\n    def kthGrammar(self, n, k):\n        return bin(k - 1).count('1') % 2",
   "time": "O(log k)",
   "space": "O(1)",
   "explain": "Each row is the previous one with 0 → 01 and 1 → 10. The k-th symbol is the parity of the number of 1 bits in k − 1 (the Thue–Morse sequence).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursive halves",
   "tag": "Alternative",
   "code": "class Solution:\n    def kthGrammar(self, n, k):\n        if n == 1:\n            return 0\n        parent = self.kthGrammar(n - 1, (k + 1) // 2)\n        return parent if k % 2 else 1 - parent",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The k-th symbol of row n comes from its parent in row n−1 (flipped when k is even).",
   "frames": [],
   "alt": true
  }
 ]
};
