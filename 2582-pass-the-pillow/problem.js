window.PROBLEM = {
 "id": "2582",
 "title": "Pass the Pillow",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=4, time=5 → 1,2,3,4,3,2 → person 2.",
 "idea": "The pillow goes from 1 to n and back, a full cycle of 2(n−1) seconds. Reduce time modulo the cycle length t; if t ≤ n−1 the holder is 1 + t, otherwise n − (t − (n−1)).",
 "input": "n = 4, time = 5",
 "output": "2",
 "notes": [],
 "best": "The pillow goes from 1 to n and back, a full cycle of 2(n−1) seconds. Reduce time modulo the cycle length t; if t ≤ n−1 the holder is 1 + t, otherwise n − (t − (n−1)).",
 "variants": [
  {
   "name": "Position on a back-and-forth cycle",
   "code": "class Solution:\n    def passThePillow(self, n, time):\n        t = time % (2 * (n - 1))\n        return 1 + t if t <= n - 1 else n - (t - (n - 1))",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "The pillow goes from 1 to n and back, a full cycle of 2(n−1) seconds. Reduce time modulo the cycle length t; if t ≤ n−1 the holder is 1 + t, otherwise n − (t − (n−1)).",
   "frames": []
  }
 ]
};
