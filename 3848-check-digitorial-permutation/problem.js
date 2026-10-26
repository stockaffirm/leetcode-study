window.PROBLEM = {
 "id": "3848",
 "title": "Check Digitorial Permutation",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "145 → 1! + 4! + 5! = 145 → true.",
 "idea": "A digitorial number equals the sum of the factorials of its digits. Only four exist: 1, 2, 145 and 40585. A permutation of n (not starting with 0) is one of these exactly when n has the same multiset of digits as one of them.",
 "input": "n = 145",
 "output": "true",
 "notes": [],
 "best": "A digitorial number equals the sum of the factorials of its digits. Only four exist: 1, 2, 145 and 40585. A permutation of n (not starting with 0) is one of these exactly when n has the same multiset of digits as one of them.",
 "variants": [
  {
   "name": "Compare digits with the few digitorial numbers",
   "code": "class Solution:\n    def isDigitorialPermutation(self, n):\n        digits = sorted(str(n))\n        return any(digits == sorted(str(d)) for d in (1, 2, 145, 40585))",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "A digitorial number equals the sum of the factorials of its digits. Only four exist: 1, 2, 145 and 40585. A permutation of n (not starting with 0) is one of these exactly when n has the same multiset of digits as one of them.",
   "frames": []
  }
 ]
};
