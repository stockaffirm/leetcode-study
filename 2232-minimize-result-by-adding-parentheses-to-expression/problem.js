window.PROBLEM = {
 "id": "2232",
 "title": "Minimize Result by Adding Parentheses to Expression",
 "level": "Medium",
 "topic": "Array / String",
 "question": "You are given a text expression of the form '<digits>+<digits>' such as '247+38'. Add exactly one pair of brackets: '(' somewhere before the '+', and ')' somewhere after it, with at least one digit on each side inside the brackets, so that the '+' is inside. Evaluate the result, treating digits outside the brackets as a number that multiplies the bracketed sum (a missing outside part counts as 1). Return the expression with the brackets placed so the value is the SMALLEST possible. Example: '247+38' → '2(47+38)' = 2 × 85 = 170.",
 "why": "An expression 'a+b' (digits). Put one pair of brackets so that the '+' is inside, evaluate the result (anything outside the brackets is multiplied) and make it as small as possible. '247+38' → '2(47+38)' = 170.",
 "idea": "Only two choices: where the '(' goes in the left number and where the ')' goes in the right number. Try every combination, treat missing outside parts as 1, and keep the smallest value.",
 "input": "\"247+38\"",
 "output": "\"2(47+38)\"",
 "notes": [],
 "best": "Only two choices: where the '(' goes in the left number and where the ')' goes in the right number. Try every combination, treat missing outside parts as 1, and keep the smallest value.",
 "variants": [
  {
   "name": "Try every parenthesis placement",
   "code": "class Solution:\n    def minimizeResult(self, expression):\n        left, right = expression.split('+')\n        best, best_s = float('inf'), ''\n        for i in range(len(left)):\n            for j in range(1, len(right) + 1):\n                a = int(left[:i] or 1)\n                b = int(left[i:])\n                c = int(right[:j])\n                d = int(right[j:] or 1)\n                val = a * (b + c) * d\n                if val < best:\n                    best = val\n                    best_s = left[:i] + '(' + left[i:] + '+' + right[:j] + ')' + right[j:]\n        return best_s",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Only two choices: where the '(' goes in the left number and where the ')' goes in the right number. Try every combination, treat missing outside parts as 1, and keep the smallest value.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "All options, then min",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimizeResult(self, expression):\n        left, right = expression.split('+')\n        options = []\n        for i, j in product(range(len(left)), range(1, len(right) + 1)):\n            val = int(left[:i] or 1) * (int(left[i:]) + int(right[:j])) * int(right[j:] or 1)\n            options.append((val, left[:i] + '(' + left[i:] + '+' + right[:j] + ')' + right[j:]))\n        return min(options)[1]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Build every (value, text) option and take the minimum.",
   "frames": [],
   "alt": true
  }
 ]
};
