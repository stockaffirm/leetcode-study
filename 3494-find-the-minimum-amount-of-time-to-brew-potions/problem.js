window.PROBLEM = {
 "id": "3494",
 "title": "Find the Minimum Amount of Time to Brew Potions",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "skill [1,5,2,4], mana [5,1,4,2] → the last potion is done at time 110.",
 "idea": "Potions pass through wizards without waiting, so for each potion only its start time matters. Keep done[i], the time wizard i finishes the previous potion. For the next potion compute forward the earliest finish at the last wizard (each wizard starts when both it is free and the potion arrives), then walk backwards subtracting work times to get the new done[] values.",
 "input": "skill = [1,5,2,4], mana = [5,1,4,2]",
 "output": "110",
 "notes": [],
 "best": "Potions pass through wizards without waiting, so for each potion only its start time matters. Keep done[i], the time wizard i finishes the previous potion. For the next potion compute forward the earliest finish at the last wizard (each wizard starts when both it is free and the potion arrives), then walk backwards subtracting work times to get the new done[] values.",
 "variants": [
  {
   "name": "Finish times, then shift back by the last wizard",
   "code": "class Solution:\n    def minTime(self, skill, mana):\n        n = len(skill)\n        done = [0] * n\n        for m in mana:\n            cur = 0\n            for i in range(n):\n                cur = max(cur, done[i]) + skill[i] * m\n            done[n - 1] = cur\n            for i in range(n - 2, -1, -1):\n                done[i] = done[i + 1] - skill[i + 1] * m\n        return done[-1]",
   "time": "O(n·m)",
   "space": "O(n)",
   "explain": "Potions pass through wizards without waiting, so for each potion only its start time matters. Keep done[i], the time wizard i finishes the previous potion. For the next potion compute forward the earliest finish at the last wizard (each wizard starts when both it is free and the potion arrives), then walk backwards subtracting work times to get the new done[] values.",
   "frames": []
  }
 ]
};
