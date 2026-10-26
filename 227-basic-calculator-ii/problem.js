window.PROBLEM = {
 "id": "227",
 "title": "Basic Calculator II",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "Evaluate '3+2*2' = 7 (multiplication first) using only + − × ÷ and whole numbers.",
 "idea": "Read numbers with the operator that came BEFORE them. '+' and '−' push the number (signed) on a stack; '×' and '÷' combine it with the top of the stack right away. Finally add up the stack.",
 "input": "\"3+2*2\"",
 "output": "7",
 "notes": [],
 "best": "Read numbers with the operator that came BEFORE them. '+' and '−' push the number (signed) on a stack; '×' and '÷' combine it with the top of the stack right away. Finally add up the stack.",
 "variants": [
  {
   "name": "Stack: finish × and ÷ immediately",
   "code": "class Solution:\n    def calculate(self, s):\n        stack, num, op = [], 0, '+'\n        for i, ch in enumerate(s):\n            if ch.isdigit(): num = num * 10 + int(ch)\n            if (not ch.isdigit() and ch != ' ') or i == len(s) - 1:\n                if op == '+': stack.append(num)\n                elif op == '-': stack.append(-num)\n                elif op == '*': stack.append(stack.pop() * num)\n                else: stack.append(int(stack.pop() / num))\n                op, num = ch, 0\n        return sum(stack)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Read numbers with the operator that came BEFORE them. '+' and '−' push the number (signed) on a stack; '×' and '÷' combine it with the top of the stack right away. Finally add up the stack.",
   "frames": []
  }
 ]
};
