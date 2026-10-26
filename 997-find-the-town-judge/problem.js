window.PROBLEM = {
 "id": "997",
 "title": "Find the Town Judge",
 "level": "Easy",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
