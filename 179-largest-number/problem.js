window.PROBLEM = {
 "id": "179",
 "title": "Largest Number",
 "level": "Medium",
 "topic": "Sorting",
 "question": "Given a list of non-negative whole numbers, arrange them so that when written one after another they form the LARGEST possible number, and return it as a string (the result can be too big for a normal integer). Example: [3,30,34,5,9] → '9534330'. If the list is all zeros, return '0'.",
 "why": "Arrange the numbers so that, glued together, they make the biggest possible number. [3,30,34,5,9] → 9534330.",
 "idea": "Number a goes before b if the text a+b is bigger than b+a ('3'+'30' = 330 beats '30'+'3' = 303). Sort with that rule and join.",
 "input": "[3, 30, 34, 5, 9]",
 "output": "\"9534330\"",
 "notes": [],
 "best": "Number a goes before b if the text a+b is bigger than b+a ('3'+'30' = 330 beats '30'+'3' = 303). Sort with that rule and join.",
 "variants": [
  {
   "name": "Sort with a custom 'a+b vs b+a' order",
   "code": "class Solution:\n    def largestNumber(self, nums):\n        strs = sorted(map(str, nums), key=cmp_to_key(lambda a, b: -1 if a + b > b + a else (1 if a + b < b + a else 0)))\n        res = ''.join(strs)\n        return '0' if res[0] == '0' else res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Number a goes before b if the text a+b is bigger than b+a ('3'+'30' = 330 beats '30'+'3' = 303). Sort with that rule and join.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Repeat-the-string key",
   "tag": "Pythonic",
   "code": "class Solution:\n    def largestNumber(self, nums):\n        strs = sorted(map(str, nums), key=lambda s: s * 10, reverse=True)\n        res = ''.join(strs)\n        return '0' if res[0] == '0' else res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort descending by the text repeated 10 times, which orders strings exactly like the a+b vs b+a rule for numbers up to 10 digits.",
   "frames": [],
   "alt": true
  }
 ]
};
