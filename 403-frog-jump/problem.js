window.PROBLEM = {
 "id": "403",
 "title": "Frog Jump",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Stones [0,1,3,5,6,8,12,17]: jumps 1,2,2,1,2,4,5 reach the last stone → true.",
 "idea": "For every stone keep the set of jump sizes with which the frog can arrive. From a stone reached with jump k, the next jump is k−1, k or k+1 (positive); if there is a stone there, record that jump for it. The frog can cross if the last stone has any arrival jump.",
 "input": "stones = [0,1,3,5,6,8,12,17]",
 "output": "true",
 "notes": [],
 "best": "For every stone keep the set of jump sizes with which the frog can arrive. From a stone reached with jump k, the next jump is k−1, k or k+1 (positive); if there is a stone there, record that jump for it. The frog can cross if the last stone has any arrival jump.",
 "variants": [
  {
   "name": "For each stone, the set of jump sizes that reach it",
   "code": "class Solution:\n    def canCross(self, stones):\n        jumps = {s: set() for s in stones}\n        jumps[0].add(0)\n        for s in stones:\n            for k in jumps[s]:\n                for step in (k - 1, k, k + 1):\n                    if step > 0 and s + step in jumps:\n                        jumps[s + step].add(step)\n        return bool(jumps[stones[-1]])",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "For every stone keep the set of jump sizes with which the frog can arrive. From a stone reached with jump k, the next jump is k−1, k or k+1 (positive); if there is a stone there, record that jump for it. The frog can cross if the last stone has any arrival jump.",
   "frames": []
  }
 ]
};
