window.PROBLEM = {
 "id": "3168",
 "title": "Minimum Number of Chairs in a Waiting Room",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'ELELEEL': the room holds at most 2 people at the same time → 2 chairs.",
 "idea": "E means a person enters (+1) and L means a person leaves (−1). The chairs needed equal the largest running total.",
 "input": "s = \"ELELEEL\"",
 "output": "2",
 "notes": [],
 "best": "E means a person enters (+1) and L means a person leaves (−1). The chairs needed equal the largest running total.",
 "variants": [
  {
   "name": "Maximum number of people inside at once",
   "code": "class Solution:\n    def minimumChairs(self, s):\n        cur = best = 0\n        for c in s:\n            cur += 1 if c == 'E' else -1\n            best = max(best, cur)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "E means a person enters (+1) and L means a person leaves (−1). The chairs needed equal the largest running total.",
   "frames": []
  }
 ]
};
