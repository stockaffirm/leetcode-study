window.PROBLEM = {
 "id": "415",
 "title": "Add Strings",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
