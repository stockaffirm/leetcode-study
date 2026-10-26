window.PROBLEM = {
 "id": "271",
 "title": "Encode and Decode Strings",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Turn a list of strings into ONE string and back, even if the strings contain any characters (including '#' or commas).",
 "idea": "Write each string as its length, a '#', then the string itself. When decoding, read the length up to '#', then take exactly that many characters — no separator inside a string can confuse it.",
 "input": "[\"hello\", \"wor#ld\", \"\"]",
 "output": "same list",
 "notes": [],
 "best": "Write each string as its length, a '#', then the string itself. When decoding, read the length up to '#', then take exactly that many characters — no separator inside a string can confuse it.",
 "variants": [
  {
   "name": "Length prefix: 5#hello",
   "code": "class Codec:\n    def encode(self, strs):\n        return ''.join(str(len(s)) + '#' + s for s in strs)\n    def decode(self, s):\n        out, i = [], 0\n        while i < len(s):\n            j = s.index('#', i)\n            n = int(s[i:j])\n            out.append(s[j + 1:j + 1 + n])\n            i = j + 1 + n\n        return out",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Write each string as its length, a '#', then the string itself. When decoding, read the length up to '#', then take exactly that many characters — no separator inside a string can confuse it.",
   "frames": []
  }
 ]
};
