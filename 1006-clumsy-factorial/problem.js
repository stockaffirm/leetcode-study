window.PROBLEM = {
 "id": "1006",
 "title": "Clumsy Factorial",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "n=4 → 4 * 3 / 2 + 1 = 7.",
 "idea": "Apply the operators in the rotating order *, /, +, − from n down to 1, with the usual precedence (and integer division towards zero). Use a stack: * and / combine with the stack top, + pushes the next number and − pushes its negative; the answer is the stack sum.",
 "input": "n = 4",
 "output": "7",
 "notes": [],
 "best": "Apply the operators in the rotating order *, /, +, − from n down to 1, with the usual precedence (and integer division towards zero). Use a stack: * and / combine with the stack top, + pushes the next number and − pushes its negative; the answer is the stack sum.",
 "variants": [
  {
   "name": "Stack with the fixed cycle * / + -",
   "code": "class Solution:\n    def clumsy(self, n):\n        stack = [n]\n        op = 0\n        for x in range(n - 1, 0, -1):\n            if op == 0:\n                stack.append(stack.pop() * x)\n            elif op == 1:\n                stack.append(int(stack.pop() / x))\n            elif op == 2:\n                stack.append(x)\n            else:\n                stack.append(-x)\n            op = (op + 1) % 4\n        return sum(stack)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Apply the operators in the rotating order *, /, +, − from n down to 1, with the usual precedence (and integer division towards zero). Use a stack: * and / combine with the stack top, + pushes the next number and − pushes its negative; the answer is the stack sum.",
   "frames": []
  }
 ]
};
