window.PROBLEM = {
 "id": "1324",
 "title": "Print Words Vertically",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "'HOW ARE YOU' → ['HAY','ORO','WEU'].",
 "idea": "Split into words. For each column index up to the longest word take the character of every word (a space where the word is too short), then strip trailing spaces from each column string.",
 "input": "s = \"HOW ARE YOU\"",
 "output": "['HAY', 'ORO', 'WEU']",
 "notes": [],
 "best": "Split into words. For each column index up to the longest word take the character of every word (a space where the word is too short), then strip trailing spaces from each column string.",
 "variants": [
  {
   "name": "Pad words, read column by column",
   "code": "class Solution:\n    def printVertically(self, s):\n        words = s.split()\n        width = max(map(len, words))\n        res = []\n        for c in range(width):\n            col = ''.join(w[c] if c < len(w) else ' ' for w in words)\n            res.append(col.rstrip())\n        return res",
   "time": "O(total)",
   "space": "O(total)",
   "explain": "Split into words. For each column index up to the longest word take the character of every word (a space where the word is too short), then strip trailing spaces from each column string.",
   "frames": []
  }
 ]
};
