window.PROBLEM = {
 "id": "2231",
 "title": "Largest Number After Digit Swaps by Parity",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "1234: odds {1,3} and evens {2,4} → put the larger odd first, then the larger even … → 3412.",
 "idea": "Only digits of the same parity can swap, so they can be arranged in any order within their own positions. Put the biggest odd digits in the odd-digit positions and the biggest even digits in the even-digit positions.",
 "input": "num = 1234",
 "output": "3412",
 "notes": [],
 "best": "Only digits of the same parity can swap, so they can be arranged in any order within their own positions. Put the biggest odd digits in the odd-digit positions and the biggest even digits in the even-digit positions.",
 "variants": [
  {
   "name": "Sort odd and even digits separately",
   "code": "class Solution:\n    def largestInteger(self, num):\n        digits = list(map(int, str(num)))\n        odd = sorted((d for d in digits if d % 2), reverse=True)\n        even = sorted((d for d in digits if d % 2 == 0), reverse=True)\n        oi = ei = 0\n        res = 0\n        for d in digits:\n            if d % 2:\n                res = res * 10 + odd[oi]\n                oi += 1\n            else:\n                res = res * 10 + even[ei]\n                ei += 1\n        return res",
   "time": "O(d log d)",
   "space": "O(d)",
   "explain": "Only digits of the same parity can swap, so they can be arranged in any order within their own positions. Put the biggest odd digits in the odd-digit positions and the biggest even digits in the even-digit positions.",
   "frames": []
  }
 ]
};
