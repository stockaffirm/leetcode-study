window.PROBLEM = {
 "id": "393",
 "title": "UTF-8 Validation",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "UTF-8 stores each character in 1 to 4 bytes. A 1-byte character starts with bit 0. An n-byte character (n = 2, 3 or 4) starts with n bits 1 followed by a 0 in its first byte, and each of its n−1 following bytes starts with the bits 10. Given a list of integers (only the lowest 8 bits of each count as a byte), return true if they form a valid UTF-8 encoding. Example: [197,130,1] → true; [235,140,4] → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bit strings",
   "tag": "Alternative",
   "code": "class Solution:\n    def validUtf8(self, data):\n        bits = [format(b & 255, '08b') for b in data]\n        i = 0\n        while i < len(bits):\n            b = bits[i]\n            n = len(b) - len(b.lstrip('1'))\n            if n == 0: i += 1\n            elif n in (2, 3, 4):\n                if i + n > len(bits) or any(not bits[j].startswith('10') for j in range(i + 1, i + n)): return False\n                i += n\n            else: return False\n        return True",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Turn every byte into 8 characters of '0'/'1' and read the leading ones.",
   "frames": [],
   "alt": true
  }
 ]
};
