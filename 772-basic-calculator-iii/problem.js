window.PROBLEM = {
 "id": "772",
 "title": "Basic Calculator III",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "Evaluate a text expression with non-negative integers, +, −, ×, ÷ and parentheses. Multiplication and division go before addition and subtraction, and integer division truncates toward zero. Example: '2*(5+5*2)/3+(6/2+8)' → 21.",
 "why": "Evaluate an expression with + − × ÷ and parentheses (non-negative numbers). '2*(5+5*2)/3+(6/2+8)' = 21.",
 "idea": "Evaluate left to right with a stack of terms, remembering the previous operator: × and ÷ combine with the top of the stack at once, + and − push. A '(' makes a recursive call that returns the value of the bracket.",
 "input": "\"2*(5+5*2)/3+(6/2+8)\"",
 "output": "21",
 "notes": [],
 "best": "Evaluate left to right with a stack of terms, remembering the previous operator: × and ÷ combine with the top of the stack at once, + and − push. A '(' makes a recursive call that returns the value of the bracket.",
 "variants": [
  {
   "name": "Recursion on parentheses + a term stack",
   "code": "class Solution:\n    def calculate(self, s):\n        def helper(it):\n            stack, num, op = [], 0, '+'\n            while it:\n                ch = it.popleft()\n                if ch.isdigit(): num = num * 10 + int(ch)\n                elif ch == '(': num = helper(it)\n                if (not ch.isdigit() and ch not in ' (') or not it:\n                    if op == '+': stack.append(num)\n                    elif op == '-': stack.append(-num)\n                    elif op == '*': stack.append(stack.pop() * num)\n                    elif op == '/': stack.append(int(stack.pop() / num))\n                    num, op = 0, ch\n                    if ch == ')': break\n            return sum(stack)\n        return helper(deque(s))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Evaluate left to right with a stack of terms, remembering the previous operator: × and ÷ combine with the top of the stack at once, + and − push. A '(' makes a recursive call that returns the value of the bracket.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two stacks (shunting-yard)",
   "tag": "Alternative",
   "code": "class Solution:\n    def calculate(self, s):\n        prec = {'+': 1, '-': 1, '*': 2, '/': 2}\n        nums, ops = [], []\n        def apply():\n            b, a = nums.pop(), nums.pop()\n            o = ops.pop()\n            if o == '+': nums.append(a + b)\n            elif o == '-': nums.append(a - b)\n            elif o == '*': nums.append(a * b)\n            else: nums.append(int(a / b))\n        i = 0\n        s = s.replace(' ', '')\n        while i < len(s):\n            ch = s[i]\n            if ch.isdigit():\n                j = i\n                while j < len(s) and s[j].isdigit(): j += 1\n                nums.append(int(s[i:j]))\n                i = j\n                continue\n            if ch == '(': ops.append(ch)\n            elif ch == ')':\n                while ops[-1] != '(': apply()\n                ops.pop()\n            else:\n                while ops and ops[-1] != '(' and prec[ops[-1]] >= prec[ch]: apply()\n                ops.append(ch)\n            i += 1\n        while ops: apply()\n        return nums[0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A stack of numbers and a stack of operators; apply an operator when a lower-or-equal priority operator arrives.",
   "frames": [],
   "alt": true
  }
 ]
};
