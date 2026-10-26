window.PROBLEM = {
 "id": "468",
 "title": "Validate IP Address",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Return 'IPv4', 'IPv6' or 'Neither' for a text.",
 "idea": "IPv4: four numbers 0–255 separated by dots, written without leading zeros. IPv6: eight groups of 1–4 hexadecimal digits separated by colons.",
 "input": "'172.16.254.1'",
 "output": "'IPv4'",
 "notes": [],
 "best": "IPv4: four numbers 0–255 separated by dots, written without leading zeros. IPv6: eight groups of 1–4 hexadecimal digits separated by colons.",
 "variants": [
  {
   "name": "Check the IPv4 and IPv6 rules",
   "code": "class Solution:\n    def validIPAddress(self, queryIP):\n        digits, hexd = '0123456789', '0123456789abcdefABCDEF'\n        parts = queryIP.split('.')\n        if len(parts) == 4 and all(p and all(c in digits for c in p) and (p == '0' or p[0] != '0') and int(p) <= 255 for p in parts):\n            return 'IPv4'\n        parts = queryIP.split(':')\n        if len(parts) == 8 and all(1 <= len(p) <= 4 and all(c in hexd for c in p) for p in parts):\n            return 'IPv6'\n        return 'Neither'",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "IPv4: four numbers 0–255 separated by dots, written without leading zeros. IPv6: eight groups of 1–4 hexadecimal digits separated by colons.",
   "frames": []
  }
 ]
};
