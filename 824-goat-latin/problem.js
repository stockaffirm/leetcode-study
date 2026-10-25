window.PROBLEM = {
 "id": "824",
 "title": "Goat Latin",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Convert a sentence to 'Goat Latin': if a word starts with a vowel (a, e, i, o, u, either case) append 'ma'; otherwise move its first letter to the end and then append 'ma'. Finally append one 'a' for the first word, two for the second, and so on. Example: 'I speak Goat Latin' → 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'.",
 "why": "'I speak': 'I' starts with a vowel → 'Imaa'; 'speak' → move 's' to the end → 'peaksmaaa'.",
 "idea": "Split into words. If a word starts with a consonant, move its first letter to the end. Then add 'ma' and as many 'a's as the word's position (1, 2, 3 …).",
 "input": "\"I speak Goat Latin\"",
 "output": "\"Imaa peaksmaaa oatGmaaaa atinLmaaaaa\"",
 "notes": [],
 "best": "Split into words. If a word starts with a consonant, move its first letter to the end. Then add 'ma' and as many 'a's as the word's position (1, 2, 3 …).",
 "variants": [
  {
   "name": "Transform word by word",
   "code": "class Solution:\n    def toGoatLatin(self, sentence):\n        out = []\n        for i, w in enumerate(sentence.split(), 1):\n            if w[0] not in \"aeiouAEIOU\":\n                w = w[1:] + w[0]\n            out.append(w + \"ma\" + \"a\" * i)\n        return \" \".join(out)",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Split into words. If a word starts with a consonant, move its first letter to the end. Then add 'ma' and as many 'a's as the word's position (1, 2, 3 …).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Build the suffix as you go",
   "tag": "Alternative",
   "code": "class Solution:\n    def toGoatLatin(self, sentence):\n        res = []\n        tail = \"ma\"\n        for w in sentence.split():\n            tail += \"a\"\n            if w[0].lower() in \"aeiou\":\n                res.append(w + tail)\n            else:\n                res.append(w[1:] + w[0] + tail)\n        return \" \".join(res)",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Keep a growing string of 'a's and append it after each word.",
   "frames": [],
   "alt": true
  }
 ]
};
