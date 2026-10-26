window.PROBLEM = {
 "id": "772",
 "title": "Basic Calculator III",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
