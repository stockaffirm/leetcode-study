window.PROBLEM = {
 "id": "2231",
 "title": "Largest Number After Digit Swaps by Parity",
 "level": "Easy",
 "topic": "Sorting",
 "question": "You may swap any two digits of num that have the same parity (both even or both odd), any number of times. Return the largest number you can make. Example: 1234 → 3412.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Swap until nothing improves",
   "tag": "Brute force",
   "code": "class Solution:\n    def largestInteger(self, num):\n        d = list(str(num))\n        changed = True\n        while changed:\n            changed = False\n            for i in range(len(d)):\n                for j in range(i + 1, len(d)):\n                    if (int(d[i]) - int(d[j])) % 2 == 0 and d[i] < d[j]:\n                        d[i], d[j] = d[j], d[i]\n                        changed = True\n        return int(''.join(d))",
   "time": "O(d²)",
   "space": "O(d)",
   "explain": "Bubble-sort style: repeatedly swap a smaller digit in front of a bigger one of the same parity.",
   "frames": [],
   "alt": true
  }
 ]
};
