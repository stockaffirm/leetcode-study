window.PROBLEM = {
 "id": "989",
 "title": "Add to Array-Form of Integer",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "1200 + 34 = 1234.",
 "idea": "Add from the last digit like on paper: take a digit of the array (if any), the last digit of k, plus the carry; write the last digit of the total and carry the rest.",
 "input": "num = [1,2,0,0], k = 34",
 "output": "[1,2,3,4]",
 "notes": [],
 "best": "Add from the last digit like on paper: take a digit of the array (if any), the last digit of k, plus the carry; write the last digit of the total and carry the rest.",
 "variants": [
  {
   "name": "Add digit by digit with a carry",
   "code": "class Solution:\n    def addToArrayForm(self, num, k):\n        res = []\n        i = len(num) - 1\n        carry = 0\n        while i >= 0 or k or carry:\n            if i >= 0:\n                carry += num[i]\n                i -= 1\n            carry += k % 10\n            k //= 10\n            res.append(carry % 10)\n            carry //= 10\n        return res[::-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Add from the last digit like on paper: take a digit of the array (if any), the last digit of k, plus the carry; write the last digit of the total and carry the rest.",
   "frames": []
  }
 ]
};
