window.PROBLEM = {
 "id": "415",
 "title": "Add Strings",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given two non-negative whole numbers written as text, num1 and num2, return their sum as text. You may NOT convert the whole strings to integers directly or use big-number tools; add them digit by digit like on paper. Example: '11' + '123' = '134'.",
 "why": "Add two big numbers given as text, without converting them to integers. '11' + '123' = '134'.",
 "idea": "Do school addition: start at the right ends, add the two digits plus the carry, write the last digit and keep the carry.",
 "input": "\"11\", \"123\"",
 "output": "\"134\"",
 "notes": [],
 "best": "Do school addition: start at the right ends, add the two digits plus the carry, write the last digit and keep the carry.",
 "variants": [
  {
   "name": "Add digit by digit with a carry",
   "code": "class Solution:\n    def addStrings(self, num1, num2):\n        i, j, carry, out = len(num1) - 1, len(num2) - 1, 0, []\n        while i >= 0 or j >= 0 or carry:\n            d = carry\n            if i >= 0:\n                d += int(num1[i])\n                i -= 1\n            if j >= 0:\n                d += int(num2[j])\n                j -= 1\n            out.append(str(d % 10))\n            carry = d // 10\n        return ''.join(reversed(out))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Do school addition: start at the right ends, add the two digits plus the carry, write the last digit and keep the carry.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Convert, add, convert back",
   "tag": "Brute force",
   "code": "class Solution:\n    def addStrings(self, num1, num2):\n        return str(int(num1) + int(num2))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Python can add huge integers directly (the problem forbids it, but it is a handy check).",
   "frames": [],
   "alt": true
  }
 ]
};
