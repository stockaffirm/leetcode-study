window.PROBLEM = {
 "id": "1592",
 "title": "Rearrange Spaces Between Words",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'  this   is  a sentence ' → 'this   is   a   sentence'.",
 "idea": "Count the spaces and the words. Put spaces // (words − 1) between words and the remainder at the end (for a single word all spaces go to the end).",
 "input": "text = \"  this   is  a sentence \"",
 "output": "\"this   is   a   sentence\"",
 "notes": [],
 "best": "Count the spaces and the words. Put spaces // (words − 1) between words and the remainder at the end (for a single word all spaces go to the end).",
 "variants": [
  {
   "name": "Equal gaps, leftover at the end",
   "code": "class Solution:\n    def reorderSpaces(self, text):\n        words = text.split()\n        spaces = text.count(' ')\n        if len(words) == 1:\n            return words[0] + ' ' * spaces\n        gap, extra = divmod(spaces, len(words) - 1)\n        return (' ' * gap).join(words) + ' ' * extra",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count the spaces and the words. Put spaces // (words − 1) between words and the remainder at the end (for a single word all spaces go to the end).",
   "frames": []
  }
 ]
};
