window.PROBLEM = {
 "id": "43",
 "title": "Multiply Strings",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "123 × 456 = 56088, built digit by digit as on paper.",
 "idea": "Digit i of the first number times digit j of the second lands at positions i + j and i + j + 1 of the result. Add into those cells and carry.",
 "input": "num1 = \"123\", num2 = \"456\"",
 "output": "\"56088\"",
 "notes": [],
 "best": "Digit i of the first number times digit j of the second lands at positions i + j and i + j + 1 of the result. Add into those cells and carry.",
 "variants": [
  {
   "name": "Grade-school digit multiplication",
   "code": "class Solution:\n    def multiply(self, num1, num2):\n        if num1 == \"0\" or num2 == \"0\":\n            return \"0\"\n        res = [0] * (len(num1) + len(num2))\n        for i in range(len(num1) - 1, -1, -1):\n            for j in range(len(num2) - 1, -1, -1):\n                p = int(num1[i]) * int(num2[j]) + res[i + j + 1]\n                res[i + j + 1] = p % 10\n                res[i + j] += p // 10\n        return \"\".join(map(str, res)).lstrip(\"0\")",
   "time": "O(m·n)",
   "space": "O(m+n)",
   "explain": "Digit i of the first number times digit j of the second lands at positions i + j and i + j + 1 of the result. Add into those cells and carry.",
   "frames": []
  }
 ]
};
