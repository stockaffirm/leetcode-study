window.PROBLEM = {
 "id": "271",
 "title": "Encode and Decode Strings",
 "level": "Medium",
 "topic": "Design",
 "question": "Design two functions: encode(strs) turns a list of strings into ONE string, and decode(s) turns that string back into exactly the original list. The strings can contain ANY characters, including any symbol you might want to use as a separator, and there may be empty strings. Example: ['hello','wor#ld',''] → encode → decode gives ['hello','wor#ld','']; the list [''] and the empty list [] must also come back correctly.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Escape the separator",
   "tag": "Alternative",
   "code": "class Codec:\n    def encode(self, strs):\n        return ''.join(s.replace('/', '//') + '/:' for s in strs)\n    def decode(self, s):\n        out, cur, i = [], [], 0\n        while i < len(s):\n            if s[i] == '/' and s[i + 1] == '/':\n                cur.append('/')\n                i += 2\n            elif s[i] == '/' and s[i + 1] == ':':\n                out.append(''.join(cur))\n                cur = []\n                i += 2\n            else:\n                cur.append(s[i])\n                i += 1\n        return out",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "End every string with '/:' and double any '/' inside the strings.",
   "frames": [],
   "alt": true
  }
 ]
};
