window.PROBLEM = {
 "id": "953",
 "title": "Verifying an Alien Dictionary",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "In an alien language the letters have a different alphabetical order. Are the given words sorted in that order?",
 "idea": "Map each letter to its rank. Compare each word with the next by their rank lists (lists compare like dictionary order; a longer word loses to its own prefix).",
 "input": "['hello','leetcode'], order 'hlabcdefgijkmnopqrstuvwxyz'",
 "output": "True",
 "notes": [],
 "best": "Map each letter to its rank. Compare each word with the next by their rank lists (lists compare like dictionary order; a longer word loses to its own prefix).",
 "variants": [
  {
   "name": "Rank map and neighbour comparison",
   "code": "class Solution:\n    def isAlienSorted(self, words, order):\n        rank = {c: i for i, c in enumerate(order)}\n        for a, b in zip(words, words[1:]):\n            if [rank[c] for c in a] > [rank[c] for c in b]: return False\n        return True",
   "time": "O(total letters)",
   "space": "O(1)",
   "explain": "Map each letter to its rank. Compare each word with the next by their rank lists (lists compare like dictionary order; a longer word loses to its own prefix).",
   "frames": []
  }
 ]
};
