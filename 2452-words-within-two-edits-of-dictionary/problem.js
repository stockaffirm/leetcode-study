window.PROBLEM = {
 "id": "2452",
 "title": "Words Within Two Edits of Dictionary",
 "level": "Medium",
 "topic": "Array / String",
 "question": "An edit changes one letter. Return the words of queries that can be turned into some word of the dictionary with at most two edits (all words have the same length), in the original order. Example: queries ['word','note','ants','wood'], dictionary ['wood','joke','moat'] → ['word','note','wood'].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Loop with an early exit",
   "tag": "Alternative",
   "code": "class Solution:\n    def twoEditWords(self, queries, dictionary):\n        res = []\n        for q in queries:\n            for w in dictionary:\n                diff = 0\n                for a, b in zip(q, w):\n                    if a != b:\n                        diff += 1\n                        if diff > 2:\n                            break\n                if diff <= 2:\n                    res.append(q)\n                    break\n        return res",
   "time": "O(q · d · L)",
   "space": "O(1)",
   "explain": "Count differences per pair and stop as soon as more than 2 are found.",
   "frames": [],
   "alt": true
  }
 ]
};
