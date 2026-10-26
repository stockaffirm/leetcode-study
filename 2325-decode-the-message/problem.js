window.PROBLEM = {
 "id": "2325",
 "title": "Decode the Message",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are given a key (a string with all 26 letters, repeated and in any order, and spaces) and a message. Build a substitution table: the first different letter in the key stands for 'a', the next new letter for 'b', and so on; spaces stay spaces. Use it to decode the message. Example: key 'the quick brown fox jumps over the lazy dog' (t=a, h=b, e=c, …), message 'vkbs bs t suepuv' → 'this is a secret'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Ordered letters + table",
   "tag": "Alternative",
   "code": "class Solution:\n    def decodeMessage(self, key, message):\n        order = []\n        for ch in key:\n            if ch != ' ' and ch not in order: order.append(ch)\n        table = {c: chr(97 + i) for i, c in enumerate(order)}\n        table[' '] = ' '\n        return ''.join(table[c] for c in message)",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "First collect the key's distinct letters in order, then build the translation table.",
   "frames": [],
   "alt": true
  }
 ]
};
