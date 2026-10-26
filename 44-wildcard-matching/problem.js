window.PROBLEM = {
 "id": "44",
 "title": "Wildcard Matching",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "Match a pattern against the whole text; '?' matches any one character and '*' matches any sequence (including none).",
 "idea": "Walk both strings. On '*' remember its position and how much text it covers; if a later mismatch happens, go back to the last star and let it swallow one more character of the text.",
 "input": "s=\"adceb\", p=\"*a*b\"",
 "output": "True",
 "notes": [],
 "best": "Walk both strings. On '*' remember its position and how much text it covers; if a later mismatch happens, go back to the last star and let it swallow one more character of the text.",
 "variants": [
  {
   "name": "Greedy with a remembered star",
   "code": "class Solution:\n    def isMatch(self, s, p):\n        i = j = 0\n        star = match = -1\n        while i < len(s):\n            if j < len(p) and (p[j] == s[i] or p[j] == '?'):\n                i += 1\n                j += 1\n            elif j < len(p) and p[j] == '*':\n                star, match = j, i\n                j += 1\n            elif star != -1:\n                j = star + 1\n                match += 1\n                i = match\n            else:\n                return False\n        while j < len(p) and p[j] == '*': j += 1\n        return j == len(p)",
   "time": "O(n·m) worst case",
   "space": "O(1)",
   "explain": "Walk both strings. On '*' remember its position and how much text it covers; if a later mismatch happens, go back to the last star and let it swallow one more character of the text.",
   "frames": []
  }
 ]
};
