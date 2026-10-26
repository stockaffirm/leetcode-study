window.PROBLEM = {
 "id": "2351",
 "title": "First Letter to Appear Twice",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Return the first letter whose second occurrence appears before the second occurrence of any other letter.",
 "idea": "Scan left to right with a set; the first letter already in the set is the answer.",
 "input": "'abccbaacz'",
 "output": "'c'",
 "notes": [],
 "best": "Scan left to right with a set; the first letter already in the set is the answer.",
 "variants": [
  {
   "name": "Set of seen letters",
   "code": "class Solution:\n    def repeatedCharacter(self, s):\n        seen = set()\n        for ch in s:\n            if ch in seen: return ch\n            seen.add(ch)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Scan left to right with a set; the first letter already in the set is the answer.",
   "frames": []
  }
 ]
};
