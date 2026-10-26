window.PROBLEM = {
 "id": "1427",
 "title": "Perform String Shifts",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'abc' with [0,1] (left 1) and [1,2] (right 2): net right 1 → 'cab'.",
 "idea": "Left shifts and right shifts cancel. Sum them into one net amount (left positive), reduce modulo the length, and rotate once.",
 "input": "s = \"abc\", shift = [[0,1],[1,2]]",
 "output": "\"cab\"",
 "notes": [],
 "best": "Left shifts and right shifts cancel. Sum them into one net amount (left positive), reduce modulo the length, and rotate once.",
 "variants": [
  {
   "name": "Add up the net shift",
   "code": "class Solution:\n    def stringShift(self, s, shift):\n        net = sum(a if d == 0 else -a for d, a in shift) % len(s)\n        return s[net:] + s[:net]",
   "time": "O(n + m)",
   "space": "O(n)",
   "explain": "Left shifts and right shifts cancel. Sum them into one net amount (left positive), reduce modulo the length, and rotate once.",
   "frames": []
  }
 ]
};
