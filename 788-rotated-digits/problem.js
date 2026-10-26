window.PROBLEM = {
 "id": "788",
 "title": "Rotated Digits",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "A number is 'good' if rotating each digit by 180° gives a valid number that is different from the original. Digits 0, 1, 8 rotate to themselves; 2 ↔ 5 and 6 ↔ 9; 3, 4 and 7 are invalid. Count the good numbers from 1 to n. Example: n=10 → 4 (2, 5, 6, 9).",
 "why": "Rotate each digit by 180° (0,1,8 stay; 2↔5; 6↔9; 3, 4, 7 become invalid). A number is 'good' if it stays valid and changes. Count the good numbers in 1..n.",
 "idea": "A number is good if it has no 3, 4 or 7 and contains at least one of 2, 5, 6, 9.",
 "input": "n = 10",
 "output": "4",
 "notes": [],
 "best": "A number is good if it has no 3, 4 or 7 and contains at least one of 2, 5, 6, 9.",
 "variants": [
  {
   "name": "Check each digit",
   "code": "class Solution:\n    def rotatedDigits(self, n):\n        count = 0\n        for x in range(1, n + 1):\n            s = str(x)\n            if not set(s) & set('347') and set(s) & set('2569'): count += 1\n        return count",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "A number is good if it has no 3, 4 or 7 and contains at least one of 2, 5, 6, 9.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Build the rotated number",
   "tag": "Alternative",
   "code": "class Solution:\n    def rotatedDigits(self, n):\n        rot = {'0': '0', '1': '1', '8': '8', '2': '5', '5': '2', '6': '9', '9': '6'}\n        count = 0\n        for x in range(1, n + 1):\n            s = str(x)\n            if all(c in rot for c in s) and ''.join(rot[c] for c in s) != s: count += 1\n        return count",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Rotate every digit with a table; the number is good if the rotation is valid and different.",
   "frames": [],
   "alt": true
  }
 ]
};
