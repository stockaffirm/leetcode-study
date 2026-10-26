window.PROBLEM = {
 "id": "3522",
 "title": "Calculate Score After Performing Instructions",
 "level": "Medium",
 "topic": "Array / String",
 "question": "You have a program of instructions with values. Start at instruction 0 with score 0. An 'add' instruction adds its value to the score and moves to the next instruction; a 'jump' moves to the instruction at (position + value) without changing the score. Stop when you leave the program or would run an instruction you already ran (that one is not run again). Return the score. Example: instructions ['jump','add','add','jump','add','jump'], values [2,1,3,1,−2,−3] → 1.",
 "why": "Follow a program: 'add' adds a value to the score and moves on to the next instruction, 'jump' moves by a value. Stop when you leave the program or would run an instruction a second time. Return the score.",
 "idea": "Just simulate, remembering which instructions already ran.",
 "input": "['jump','add','add','jump','add','jump'], [2,1,3,1,−2,−3]",
 "output": "1",
 "notes": [],
 "best": "Just simulate, remembering which instructions already ran.",
 "variants": [
  {
   "name": "Simulate with a visited set",
   "code": "class Solution:\n    def calculateScore(self, instructions, values):\n        n = len(instructions)\n        seen = set()\n        i = score = 0\n        while 0 <= i < n and i not in seen:\n            seen.add(i)\n            if instructions[i] == 'add':\n                score += values[i]\n                i += 1\n            else:\n                i += values[i]\n        return score",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Just simulate, remembering which instructions already ran.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect the path first",
   "tag": "Alternative",
   "code": "class Solution:\n    def calculateScore(self, instructions, values):\n        n = len(instructions)\n        path, seen = [], [False] * n\n        i = 0\n        while 0 <= i < n and not seen[i]:\n            seen[i] = True\n            path.append(i)\n            i += 1 if instructions[i] == 'add' else values[i]\n        return sum(values[j] for j in path if instructions[j] == 'add')",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Walk the program recording the visited indices, then add up the 'add' values.",
   "frames": [],
   "alt": true
  }
 ]
};
