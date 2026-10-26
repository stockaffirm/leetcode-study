window.PROBLEM = {
 "id": "2452",
 "title": "Words Within Two Edits of Dictionary",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "'word' differs from 'wood' in one letter, 'note' from 'joke' in two, 'wood' equals 'wood' → those three are kept; 'ants' is too far from everything.",
 "idea": "Words have the same length, so an edit is a changed letter. For every query check whether some dictionary word differs in at most 2 positions.",
 "input": "queries = [\"word\",\"note\",\"ants\",\"wood\"], dictionary = [\"wood\",\"joke\",\"moat\"]",
 "output": "[\"word\",\"note\",\"wood\"]",
 "notes": [],
 "best": "Words have the same length, so an edit is a changed letter. For every query check whether some dictionary word differs in at most 2 positions.",
 "variants": [
  {
   "name": "Count differing letters",
   "code": "class Solution:\n    def twoEditWords(self, queries, dictionary):\n        return [q for q in queries\n                if any(sum(a != b for a, b in zip(q, w)) <= 2 for w in dictionary)]",
   "time": "O(q · d · L)",
   "space": "O(1)",
   "explain": "Words have the same length, so an edit is a changed letter. For every query check whether some dictionary word differs in at most 2 positions.",
   "frames": []
  }
 ]
};
