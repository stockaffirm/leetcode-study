window.PROBLEM = {
 "id": "771",
 "title": "Jewels and Stones",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "jewels lists the stone types that are jewels; stones lists the stones you have (letters are case-sensitive). Return how many of your stones are jewels. Example: jewels 'aA', stones 'aAAbbbb' → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count every stone letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def numJewelsInStones(self, jewels, stones):\n        cnt = Counter(stones)\n        return sum(cnt[j] for j in jewels)",
   "time": "O(n + m)",
   "space": "O(n)",
   "explain": "Count the letters of the stones and add the counts of the jewel letters.",
   "frames": [],
   "alt": true
  }
 ]
};
