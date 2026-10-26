window.PROBLEM = {
 "id": "2309",
 "title": "Greatest English Letter in Upper and Lower Case",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'lEeTcOdE' → 'E'.",
 "idea": "Put the characters in a set and check letters from 'Z' down to 'A': the first letter whose upper- and lower-case forms are both present is the answer (or an empty string).",
 "input": "s = \"lEeTcOdE\"",
 "output": "\"E\"",
 "notes": [],
 "best": "Put the characters in a set and check letters from 'Z' down to 'A': the first letter whose upper- and lower-case forms are both present is the answer (or an empty string).",
 "variants": [
  {
   "name": "Largest letter present in both cases",
   "code": "class Solution:\n    def greatestLetter(self, s):\n        seen = set(s)\n        for c in 'ZYXWVUTSRQPONMLKJIHGFEDCBA':\n            if c in seen and c.lower() in seen:\n                return c\n        return \"\"",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Put the characters in a set and check letters from 'Z' down to 'A': the first letter whose upper- and lower-case forms are both present is the answer (or an empty string).",
   "frames": []
  }
 ]
};
