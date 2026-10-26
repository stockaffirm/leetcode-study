window.PROBLEM = {
 "id": "717",
 "title": "1-bit and 2-bit Characters",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,0,0] → '10' then '0' → true.",
 "idea": "A 1 starts a two-bit character, a 0 is a one-bit character. Walk from the start skipping 2 on a 1 and 1 on a 0; the last character is one-bit if we land exactly on the last index.",
 "input": "bits = [1,0,0]",
 "output": "true",
 "notes": [],
 "best": "A 1 starts a two-bit character, a 0 is a one-bit character. Walk from the start skipping 2 on a 1 and 1 on a 0; the last character is one-bit if we land exactly on the last index.",
 "variants": [
  {
   "name": "Walk the encoding",
   "code": "class Solution:\n    def isOneBitCharacter(self, bits):\n        i = 0\n        while i < len(bits) - 1:\n            i += bits[i] + 1\n        return i == len(bits) - 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A 1 starts a two-bit character, a 0 is a one-bit character. Walk from the start skipping 2 on a 1 and 1 on a 0; the last character is one-bit if we land exactly on the last index.",
   "frames": []
  }
 ]
};
