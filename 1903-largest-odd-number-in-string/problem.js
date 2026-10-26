window.PROBLEM = {
 "id": "1903",
 "title": "Largest Odd Number in String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'52': the last digit 2 is even, so cut it off → '5'.",
 "idea": "A number is odd iff its last digit is odd. The largest odd substring is the longest prefix that ends in an odd digit: look for the last odd digit and cut right after it.",
 "input": "num = \"52\"",
 "output": "\"5\"",
 "notes": [],
 "best": "A number is odd iff its last digit is odd. The largest odd substring is the longest prefix that ends in an odd digit: look for the last odd digit and cut right after it.",
 "variants": [
  {
   "name": "Cut after the last odd digit",
   "code": "class Solution:\n    def largestOddNumber(self, num):\n        for i in range(len(num) - 1, -1, -1):\n            if int(num[i]) % 2:\n                return num[:i + 1]\n        return \"\"",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A number is odd iff its last digit is odd. The largest odd substring is the longest prefix that ends in an odd digit: look for the last odd digit and cut right after it.",
   "frames": []
  }
 ]
};
