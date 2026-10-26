window.PROBLEM = {
 "id": "997",
 "title": "Find the Town Judge",
 "level": "Easy",
 "topic": "Graph",
 "question": "In a town of n people one may be the judge: the judge trusts nobody and everybody else trusts the judge. trust[i] = [a, b] means a trusts b. Return the judge's label or −1. Example: n=2, trust [[1,2]] → 2.",
 "why": "n=2, trust [[1,2]] → person 2 is trusted by 1 and trusts nobody → 2.",
 "idea": "The judge is trusted by everyone else (n−1) and trusts nobody. Keep a score per person: +1 when trusted, −1 when trusting someone. The judge's score is n−1.",
 "input": "n = 2, trust = [[1,2]]",
 "output": "2",
 "notes": [],
 "best": "The judge is trusted by everyone else (n−1) and trusts nobody. Keep a score per person: +1 when trusted, −1 when trusting someone. The judge's score is n−1.",
 "variants": [
  {
   "name": "Trust balance: in-degree minus out-degree",
   "code": "class Solution:\n    def findJudge(self, n, trust):\n        score = [0] * (n + 1)\n        for a, b in trust:\n            score[a] -= 1\n            score[b] += 1\n        for i in range(1, n + 1):\n            if score[i] == n - 1:\n                return i\n        return -1",
   "time": "O(n + t)",
   "space": "O(n)",
   "explain": "The judge is trusted by everyone else (n−1) and trusts nobody. Keep a score per person: +1 when trusted, −1 when trusting someone. The judge's score is n−1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "In/out degree arrays",
   "tag": "Alternative",
   "code": "class Solution:\n    def findJudge(self, n, trust):\n        indeg = [0] * (n + 1)\n        outdeg = [0] * (n + 1)\n        for a, b in trust:\n            outdeg[a] += 1\n            indeg[b] += 1\n        for i in range(1, n + 1):\n            if indeg[i] == n - 1 and outdeg[i] == 0:\n                return i\n        return -1",
   "time": "O(n + t)",
   "space": "O(n)",
   "explain": "The judge has in-degree n−1 and out-degree 0.",
   "frames": [],
   "alt": true
  }
 ]
};
