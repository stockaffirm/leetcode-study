window.PROBLEM = {
 "id": "779",
 "title": "K-th Symbol in Grammar",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
