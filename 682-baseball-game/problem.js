window.PROBLEM = {
 "id": "682",
 "title": "Baseball Game",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "['5','2','C','D','+']: 5, 2, then C removes the 2, D doubles 5 → 10, + adds the last two (5 + 10) = 15. Scores 5 + 10 + 15 = 30.",
 "idea": "Keep a stack of valid scores. A number is pushed; 'C' pops the last score; 'D' pushes double the last; '+' pushes the sum of the last two. The answer is the sum of the stack.",
 "input": "operations = [\"5\",\"2\",\"C\",\"D\",\"+\"]",
 "output": "30",
 "notes": [],
 "best": "Keep a stack of valid scores. A number is pushed; 'C' pops the last score; 'D' pushes double the last; '+' pushes the sum of the last two. The answer is the sum of the stack.",
 "variants": [
  {
   "name": "Stack of scores",
   "code": "class Solution:\n    def calPoints(self, operations):\n        st = []\n        for op in operations:\n            if op == \"C\":\n                st.pop()\n            elif op == \"D\":\n                st.append(2 * st[-1])\n            elif op == \"+\":\n                st.append(st[-1] + st[-2])\n            else:\n                st.append(int(op))\n        return sum(st)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack of valid scores. A number is pushed; 'C' pops the last score; 'D' pushes double the last; '+' pushes the sum of the last two. The answer is the sum of the stack.",
   "frames": []
  }
 ]
};
