window.PROBLEM = {
 "id": "1128",
 "title": "Number of Equivalent Domino Pairs",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[[1,2],[2,1],[3,4],[5,6]] → [1,2] and [2,1] are equivalent → 1.",
 "idea": "Two dominoes are equivalent when one is a rotation of the other. Normalise each to (min, max) and count; a group of c equal dominoes gives c·(c−1)/2 pairs.",
 "input": "dominoes = [[1,2],[2,1],[3,4],[5,6]]",
 "output": "1",
 "notes": [],
 "best": "Two dominoes are equivalent when one is a rotation of the other. Normalise each to (min, max) and count; a group of c equal dominoes gives c·(c−1)/2 pairs.",
 "variants": [
  {
   "name": "Count normalised dominoes, add C(c, 2)",
   "code": "class Solution:\n    def numEquivDominoPairs(self, dominoes):\n        cnt = Counter(tuple(sorted(d)) for d in dominoes)\n        return sum(c * (c - 1) // 2 for c in cnt.values())",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Two dominoes are equivalent when one is a rotation of the other. Normalise each to (min, max) and count; a group of c equal dominoes gives c·(c−1)/2 pairs.",
   "frames": []
  }
 ]
};
