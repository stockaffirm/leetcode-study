window.PROBLEM = {
 "id": "2843",
 "title": "Count Symmetric Integers",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
