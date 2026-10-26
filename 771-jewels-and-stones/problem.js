window.PROBLEM = {
 "id": "771",
 "title": "Jewels and Stones",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Jewels 'aA': the stones 'aAAbbbb' contain a, A, A → 3 jewels.",
 "idea": "Put the jewel types in a set and count the stones that are in it.",
 "input": "jewels = \"aA\", stones = \"aAAbbbb\"",
 "output": "3",
 "notes": [],
 "best": "Put the jewel types in a set and count the stones that are in it.",
 "variants": [
  {
   "name": "Set lookup",
   "code": "class Solution:\n    def numJewelsInStones(self, jewels, stones):\n        js = set(jewels)\n        return sum(s in js for s in stones)",
   "time": "O(n + m)",
   "space": "O(m)",
   "explain": "Put the jewel types in a set and count the stones that are in it.",
   "frames": []
  }
 ]
};
