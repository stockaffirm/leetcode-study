window.PROBLEM = {
 "id": "282",
 "title": "Expression Add Operators",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "Insert +, − or × (or nothing) between the digits of a number string so the expression equals the target; list all such expressions.",
 "idea": "Build the expression left to right, remembering its value and the last term. For '×' replace the last term: value − last + last·n. Numbers with a leading zero (other than 0 itself) are not allowed.",
 "input": "'123', target 6",
 "output": "['1*2*3','1+2+3']",
 "notes": [],
 "best": "Build the expression left to right, remembering its value and the last term. For '×' replace the last term: value − last + last·n. Numbers with a leading zero (other than 0 itself) are not allowed.",
 "variants": [
  {
   "name": "Backtracking with the last multiplied term",
   "code": "class Solution:\n    def addOperators(self, num, target):\n        res = []\n        def go(i, expr, val, last):\n            if i == len(num):\n                if val == target: res.append(expr)\n                return\n            for j in range(i, len(num)):\n                if j > i and num[i] == '0': break\n                s = num[i:j + 1]\n                n = int(s)\n                if i == 0: go(j + 1, s, n, n)\n                else:\n                    go(j + 1, expr + '+' + s, val + n, n)\n                    go(j + 1, expr + '-' + s, val - n, -n)\n                    go(j + 1, expr + '*' + s, val - last + last * n, last * n)\n        go(0, '', 0, 0)\n        return res",
   "time": "O(4^n)",
   "space": "O(n)",
   "explain": "Build the expression left to right, remembering its value and the last term. For '×' replace the last term: value − last + last·n. Numbers with a leading zero (other than 0 itself) are not allowed.",
   "frames": []
  }
 ]
};
