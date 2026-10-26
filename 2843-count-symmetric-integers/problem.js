window.PROBLEM = {
 "id": "2843",
 "title": "Count Symmetric Integers",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "An integer with 2n digits is symmetric if the sum of its first n digits equals the sum of the last n digits. Count the symmetric integers in [low, high]. Example: 1…100 → 9.",
 "why": "Between 1 and 100 the symmetric integers are 11, 22, …, 99 → 9.",
 "idea": "An integer with an even number of digits is symmetric if the sum of the first half equals the sum of the second half. Check every number in the range.",
 "input": "low = 1, high = 100",
 "output": "9",
 "notes": [],
 "best": "An integer with an even number of digits is symmetric if the sum of the first half equals the sum of the second half. Check every number in the range.",
 "variants": [
  {
   "name": "Compare half sums of even-length numbers",
   "code": "class Solution:\n    def countSymmetricIntegers(self, low, high):\n        res = 0\n        for x in range(low, high + 1):\n            s = str(x)\n            h = len(s) // 2\n            if len(s) % 2 == 0 and sum(map(int, s[:h])) == sum(map(int, s[h:])):\n                res += 1\n        return res",
   "time": "O(range·digits)",
   "space": "O(1)",
   "explain": "An integer with an even number of digits is symmetric if the sum of the first half equals the sum of the second half. Check every number in the range.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Arithmetic on digits",
   "tag": "Alternative",
   "code": "class Solution:\n    def countSymmetricIntegers(self, low, high):\n        res = 0\n        for x in range(low, high + 1):\n            if 10 <= x <= 99 and x // 10 == x % 10:\n                res += 1\n            elif 1000 <= x <= 9999 and x // 1000 + x // 100 % 10 == x // 10 % 10 + x % 10:\n                res += 1\n        return res",
   "time": "O(range)",
   "space": "O(1)",
   "explain": "Split with divmod instead of strings (only 2 or 4 digit numbers can be symmetric in range).",
   "frames": [],
   "alt": true
  }
 ]
};
