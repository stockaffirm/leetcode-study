window.PROBLEM = {
 "id": "277",
 "title": "Find the Celebrity",
 "level": "Medium",
 "topic": "Graph",
 "question": "At a party of n people, labelled 0 to n−1, a celebrity is someone who is known by EVERYONE else but knows NOBODY. You can only ask one kind of question: knows(a, b), which says whether person a knows person b. Find the celebrity, or return -1 if there is none, asking as few questions as you can. Example: 3 people where everybody knows person 1 and person 1 knows nobody → 1.",
 "why": "At a party a celebrity is known by everybody but knows nobody. You can only ask 'does A know B?'. Find the celebrity with as few questions as you can.",
 "idea": "Each question removes one person: if the candidate knows i, the candidate cannot be the celebrity (i is the new candidate); otherwise i cannot be. After one pass check the single survivor against everyone.",
 "input": "3 people; everybody knows person 1, who knows nobody",
 "output": "1",
 "notes": [],
 "best": "Each question removes one person: if the candidate knows i, the candidate cannot be the celebrity (i is the new candidate); otherwise i cannot be. After one pass check the single survivor against everyone.",
 "variants": [
  {
   "name": "Eliminate candidates, then verify",
   "code": "class Solution:\n    def findCelebrity(self, n):\n        cand = 0\n        for i in range(1, n):\n            if knows(cand, i): cand = i\n        for i in range(n):\n            if i != cand and (knows(cand, i) or not knows(i, cand)): return -1\n        return cand",
   "time": "O(n) questions",
   "space": "O(1)",
   "explain": "Each question removes one person: if the candidate knows i, the candidate cannot be the celebrity (i is the new candidate); otherwise i cannot be. After one pass check the single survivor against everyone.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Test every person",
   "tag": "Brute force",
   "code": "class Solution:\n    def findCelebrity(self, n):\n        for c in range(n):\n            if all(i == c or (knows(i, c) and not knows(c, i)) for i in range(n)): return c\n        return -1",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For each person check that everyone else knows them and they know nobody.",
   "frames": [],
   "alt": true
  }
 ]
};
