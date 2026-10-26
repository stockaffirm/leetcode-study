window.PROBLEM = {
 "id": "393",
 "title": "UTF-8 Validation",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Is a list of bytes a valid UTF-8 text? A character takes 1–4 bytes: the first byte tells how many, the rest must start with bits 10.",
 "idea": "Read the leading bits of the first byte (0… = 1 byte, 110… = 2, 1110… = 3, 11110… = 4) to know how many continuation bytes follow; each must start with 10.",
 "input": "[197, 130, 1]",
 "output": "True",
 "notes": [],
 "best": "Read the leading bits of the first byte (0… = 1 byte, 110… = 2, 1110… = 3, 11110… = 4) to know how many continuation bytes follow; each must start with 10.",
 "variants": [
  {
   "name": "Check each byte's leading bits",
   "code": "class Solution:\n    def validUtf8(self, data):\n        need = 0\n        for byte in data:\n            if need == 0:\n                if byte >> 7 == 0: continue\n                elif byte >> 5 == 0b110: need = 1\n                elif byte >> 4 == 0b1110: need = 2\n                elif byte >> 3 == 0b11110: need = 3\n                else: return False\n            else:\n                if byte >> 6 != 0b10: return False\n                need -= 1\n        return need == 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Read the leading bits of the first byte (0… = 1 byte, 110… = 2, 1110… = 3, 11110… = 4) to know how many continuation bytes follow; each must start with 10.",
   "frames": []
  }
 ]
};
