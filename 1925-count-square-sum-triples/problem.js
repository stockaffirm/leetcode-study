window.PROBLEM = {
 "id": "1925",
 "title": "Count Square Sum Triples",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=5 → (3,4,5) and (4,3,5) → 2.",
 "idea": "Count ordered (a, b, c) with a² + b² = c² and everything ≤ n. Loop over a and b, compute the sum and check that it is a perfect square not above n².",
 "input": "n = 5",
 "output": "2",
 "notes": [],
 "best": "Count ordered (a, b, c) with a² + b² = c² and everything ≤ n. Loop over a and b, compute the sum and check that it is a perfect square not above n².",
 "variants": [
  {
   "name": "Try every (a, b) and test c² with a set",
   "code": "class Solution:\n    def countTriples(self, n):\n        squares = {c * c for c in range(1, n + 1)}\n        return sum(1 for a in range(1, n + 1) for b in range(1, n + 1) if a * a + b * b in squares)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Count ordered (a, b, c) with a² + b² = c² and everything ≤ n. Loop over a and b, compute the sum and check that it is a perfect square not above n².",
   "frames": []
  }
 ]
};
