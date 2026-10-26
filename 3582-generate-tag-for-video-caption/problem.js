window.PROBLEM = {
 "id": "3582",
 "title": "Generate Tag for Video Caption",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'Leetcode daily streak achieved' → '#leetcodeDailyStreakAchieved'.",
 "idea": "Split on spaces. The first word is all lowercase, each later word has a capital first letter and lowercase rest. Drop every character that is not a letter, prefix '#', and keep at most 100 characters.",
 "input": "caption = \"Leetcode daily streak achieved\"",
 "output": "\"#leetcodeDailyStreakAchieved\"",
 "notes": [],
 "best": "Split on spaces. The first word is all lowercase, each later word has a capital first letter and lowercase rest. Drop every character that is not a letter, prefix '#', and keep at most 100 characters.",
 "variants": [
  {
   "name": "Camel-case the words, keep letters, cut at 100",
   "code": "class Solution:\n    def generateTag(self, caption):\n        words = caption.split()\n        out = \"\"\n        for i, w in enumerate(words):\n            w = ''.join(c for c in w if c.isalpha())\n            out += w.lower() if i == 0 else w.capitalize()\n        return (\"#\" + out)[:100]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Split on spaces. The first word is all lowercase, each later word has a capital first letter and lowercase rest. Drop every character that is not a letter, prefix '#', and keep at most 100 characters.",
   "frames": []
  }
 ]
};
