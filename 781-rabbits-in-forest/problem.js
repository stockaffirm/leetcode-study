window.PROBLEM = {
 "id": "781",
 "title": "Rabbits in Forest",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,1,2]: two rabbits say '1' (they are a pair of the same colour) and one says '2' (needs two more of its colour) → at least 2 + 3 = 5 rabbits.",
 "idea": "A rabbit answering a belongs to a colour group of size a + 1. All rabbits answering a can share groups of that size, so with c such rabbits we need ceil(c / (a + 1)) groups, i.e. ceil(c / (a + 1)) · (a + 1) rabbits. Add this over all answers.",
 "input": "answers = [1,1,2]",
 "output": "5",
 "notes": [],
 "best": "A rabbit answering a belongs to a colour group of size a + 1. All rabbits answering a can share groups of that size, so with c such rabbits we need ceil(c / (a + 1)) groups, i.e. ceil(c / (a + 1)) · (a + 1) rabbits. Add this over all answers.",
 "variants": [
  {
   "name": "Group the same answers",
   "code": "class Solution:\n    def numRabbits(self, answers):\n        cnt = Counter(answers)\n        return sum((c + a) // (a + 1) * (a + 1) for a, c in cnt.items())",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A rabbit answering a belongs to a colour group of size a + 1. All rabbits answering a can share groups of that size, so with c such rabbits we need ceil(c / (a + 1)) groups, i.e. ceil(c / (a + 1)) · (a + 1) rabbits. Add this over all answers.",
   "frames": []
  }
 ]
};
