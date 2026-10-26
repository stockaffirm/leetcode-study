window.PROBLEM = {
 "id": "967",
 "title": "Numbers With Same Consecutive Differences",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "n=3, k=7 → 181, 292, 707, 818, 929.",
 "idea": "The first digit is 1–9. Each next digit differs from the previous by exactly k, so it is prev + k or prev − k (once if k = 0), staying within 0–9. Build all numbers of n digits and return them sorted.",
 "input": "n = 3, k = 7",
 "output": "[181, 292, 707, 818, 929]",
 "notes": [],
 "best": "The first digit is 1–9. Each next digit differs from the previous by exactly k, so it is prev + k or prev − k (once if k = 0), staying within 0–9. Build all numbers of n digits and return them sorted.",
 "variants": [
  {
   "name": "Build digit by digit, branching ±k",
   "code": "class Solution:\n    def numsSameConsecDiff(self, n, k):\n        nums = list(range(1, 10))\n        for _ in range(n - 1):\n            nxt = []\n            for x in nums:\n                last = x % 10\n                for d in {last - k, last + k}:\n                    if 0 <= d <= 9:\n                        nxt.append(x * 10 + d)\n            nums = nxt\n        return sorted(nums)",
   "time": "O(2ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "The first digit is 1–9. Each next digit differs from the previous by exactly k, so it is prev + k or prev − k (once if k = 0), staying within 0–9. Build all numbers of n digits and return them sorted.",
   "frames": []
  }
 ]
};
