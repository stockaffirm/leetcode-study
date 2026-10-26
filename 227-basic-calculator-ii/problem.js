window.PROBLEM = {
 "id": "227",
 "title": "Basic Calculator II",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "Evaluate a text expression s that contains whole numbers, the operators + − × ÷ (written + - * /) and possible spaces, following the usual rule that × and ÷ are done before + and −. Division of whole numbers drops the fraction (rounds toward zero). There are no brackets. Example: '3+2*2' → 7; ' 3/2 ' → 1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Running last-term, no stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def calculate(self, s):\n        total = last = num = 0\n        op = '+'\n        s += '+'\n        for ch in s:\n            if ch.isdigit(): num = num * 10 + int(ch)\n            elif ch != ' ':\n                if op == '+':\n                    total += last\n                    last = num\n                elif op == '-':\n                    total += last\n                    last = -num\n                elif op == '*': last = last * num\n                else: last = int(last / num)\n                op, num = ch, 0\n        return total + last",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep the total so far and the last term; × and ÷ change the last term, + and − commit it.",
   "frames": [],
   "alt": true
  }
 ]
};
