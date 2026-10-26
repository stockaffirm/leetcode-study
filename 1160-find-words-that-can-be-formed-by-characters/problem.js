window.PROBLEM = {
 "id": "1160",
 "title": "Find Words That Can Be Formed by Characters",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "words ['cat','bt','hat','tree'], chars 'atach': 'cat' and 'hat' can be formed → 3 + 3 = 6.",
 "idea": "A word is good if every letter appears in chars at least as many times as in the word. Count the letters of chars once, test each word with a Counter, and add the lengths of the good words.",
 "input": "words = [\"cat\",\"bt\",\"hat\",\"tree\"], chars = \"atach\"",
 "output": "6",
 "notes": [],
 "best": "A word is good if every letter appears in chars at least as many times as in the word. Count the letters of chars once, test each word with a Counter, and add the lengths of the good words.",
 "variants": [
  {
   "name": "Compare letter counts with chars",
   "code": "class Solution:\n    def countCharacters(self, words, chars):\n        have = Counter(chars)\n        total = 0\n        for w in words:\n            need = Counter(w)\n            if all(have[c] >= v for c, v in need.items()):\n                total += len(w)\n        return total",
   "time": "O(total length)",
   "space": "O(1)",
   "explain": "A word is good if every letter appears in chars at least as many times as in the word. Count the letters of chars once, test each word with a Counter, and add the lengths of the good words.",
   "frames": []
  }
 ]
};
