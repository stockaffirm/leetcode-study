window.PROBLEM = {
 "id": "1291",
 "title": "Sequential Digits",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "A number has sequential digits if each digit is one more than the previous one (123, 4567 …). Return the sorted list of all such numbers between low and high. Example: 100 … 300 → [123, 234].",
 "why": "Between 100 and 300 the numbers whose digits go up by one are 123 and 234.",
 "idea": "Sequential-digit numbers are slices of '123456789'. For every length between the lengths of low and high take every slice of that length and keep those inside the range — they come out in increasing order.",
 "input": "low = 100, high = 300",
 "output": "[123, 234]",
 "notes": [],
 "best": "Sequential-digit numbers are slices of '123456789'. For every length between the lengths of low and high take every slice of that length and keep those inside the range — they come out in increasing order.",
 "variants": [
  {
   "name": "Slice the string 123456789",
   "code": "class Solution:\n    def sequentialDigits(self, low, high):\n        res = []\n        digits = \"123456789\"\n        for length in range(len(str(low)), len(str(high)) + 1):\n            for start in range(0, 10 - length):\n                num = int(digits[start:start + length])\n                if low <= num <= high:\n                    res.append(num)\n        return res",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Sequential-digit numbers are slices of '123456789'. For every length between the lengths of low and high take every slice of that length and keep those inside the range — they come out in increasing order.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Extend numbers digit by digit",
   "tag": "Alternative",
   "code": "class Solution:\n    def sequentialDigits(self, low, high):\n        res = []\n        for start in range(1, 10):\n            num = last = start\n            while last < 9 and num <= high:\n                last += 1\n                num = num * 10 + last\n                if low <= num <= high:\n                    res.append(num)\n        return sorted(res)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Start from every single digit and keep adding the next digit, collecting numbers in range.",
   "frames": [],
   "alt": true
  }
 ]
};
