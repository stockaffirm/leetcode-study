window.PROBLEM = {
 "id": "282",
 "title": "Expression Add Operators",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "Given a string of digits and a target, insert the operators +, − or × between some digits (or nothing, to make a longer number) so that the expression equals the target. Numbers must not have leading zeros. Return all such expressions (any order). Example: '123', target 6 → ['1*2*3','1+2+3'].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every operator layout and eval",
   "tag": "Brute force",
   "code": "import re\n\nclass Solution:\n    def addOperators(self, num, target):\n        res = []\n        for ops in product(('', '+', '-', '*'), repeat=len(num) - 1):\n            expr = num[0] + ''.join(op + ch for op, ch in zip(ops, num[1:]))\n            if any(len(t) > 1 and t[0] == '0' for t in re.split(r'[+\\-*]', expr)): continue\n            if eval(expr) == target: res.append(expr)\n        return res",
   "time": "O(4^n · n)",
   "space": "O(n)",
   "explain": "For small strings put every choice of '', +, −, × between digits, skip numbers with leading zeros and evaluate.",
   "frames": [],
   "alt": true
  }
 ]
};
