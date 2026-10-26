window.PROBLEM = {
 "id": "2325",
 "title": "Decode the Message",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "A secret key's letters, in order of first appearance, stand for a, b, c, … Decode a message with it.",
 "idea": "Walk the key and give each new letter the next alphabet letter in a dictionary; then replace every message letter (spaces stay).",
 "input": "key \"the quick brown fox jumps over the lazy dog\", message \"vkbs bs t suepuv\"",
 "output": "\"this is a secret\"",
 "notes": [],
 "best": "Walk the key and give each new letter the next alphabet letter in a dictionary; then replace every message letter (spaces stay).",
 "variants": [
  {
   "name": "Build the substitution table",
   "code": "class Solution:\n    def decodeMessage(self, key, message):\n        mapping, nxt = {' ': ' '}, 0\n        for ch in key:\n            if ch not in mapping:\n                mapping[ch] = chr(97 + nxt)\n                nxt += 1\n        return ''.join(mapping[c] for c in message)",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "Walk the key and give each new letter the next alphabet letter in a dictionary; then replace every message letter (spaces stay).",
   "frames": []
  }
 ]
};
