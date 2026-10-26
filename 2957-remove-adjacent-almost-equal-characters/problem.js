window.PROBLEM = {
 "id": "2957",
 "title": "Remove Adjacent Almost-Equal Characters",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'aaaaa': change the 2nd and 4th letters to something far away → 2 changes.",
 "idea": "Two neighbours are 'almost equal' if they are the same or adjacent in the alphabet. When a pair is bad, change the second letter of the pair to something far from both neighbours; that also fixes the next pair, so skip one position.",
 "input": "word = \"aaaaa\"",
 "output": "2",
 "notes": [],
 "best": "Two neighbours are 'almost equal' if they are the same or adjacent in the alphabet. When a pair is bad, change the second letter of the pair to something far from both neighbours; that also fixes the next pair, so skip one position.",
 "variants": [
  {
   "name": "Fix a bad pair, then skip one",
   "code": "class Solution:\n    def removeAlmostEqualCharacters(self, word):\n        ops = 0\n        i = 1\n        while i < len(word):\n            if abs(ord(word[i]) - ord(word[i - 1])) <= 1:\n                ops += 1\n                i += 2\n            else:\n                i += 1\n        return ops",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Two neighbours are 'almost equal' if they are the same or adjacent in the alphabet. When a pair is bad, change the second letter of the pair to something far from both neighbours; that also fixes the next pair, so skip one position.",
   "frames": []
  }
 ]
};
