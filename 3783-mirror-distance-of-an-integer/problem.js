window.PROBLEM = {
 "id": "3783",
 "title": "Mirror Distance of an Integer",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=25 → reverse 52 → distance 27.",
 "idea": "Reverse the digits of n and return the absolute difference with n.",
 "input": "n = 25",
 "output": "27",
 "notes": [],
 "best": "Reverse the digits of n and return the absolute difference with n.",
 "variants": [
  {
   "name": "|n − reverse(n)|",
   "code": "class Solution:\n    def mirrorDistance(self, n):\n        return abs(n - int(str(n)[::-1]))",
   "time": "O(d)",
   "space": "O(d)",
   "explain": "Reverse the digits of n and return the absolute difference with n.",
   "frames": []
  }
 ]
};
