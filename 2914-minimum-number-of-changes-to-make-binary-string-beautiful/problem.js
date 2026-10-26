window.PROBLEM = {
 "id": "2914",
 "title": "Minimum Number of Changes to Make Binary String Beautiful",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'1001': pairs '10' and '01' both differ → 2 changes.",
 "idea": "A beautiful string can be cut into even-length blocks of equal bits; every block splits into aligned pairs of equal letters, and pairs are enough. So count aligned pairs (positions 2i, 2i+1) whose letters differ.",
 "input": "s = \"1001\"",
 "output": "2",
 "notes": [],
 "best": "A beautiful string can be cut into even-length blocks of equal bits; every block splits into aligned pairs of equal letters, and pairs are enough. So count aligned pairs (positions 2i, 2i+1) whose letters differ.",
 "variants": [
  {
   "name": "Make every aligned pair equal",
   "code": "class Solution:\n    def minChanges(self, s):\n        return sum(s[i] != s[i + 1] for i in range(0, len(s), 2))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A beautiful string can be cut into even-length blocks of equal bits; every block splits into aligned pairs of equal letters, and pairs are enough. So count aligned pairs (positions 2i, 2i+1) whose letters differ.",
   "frames": []
  }
 ]
};
