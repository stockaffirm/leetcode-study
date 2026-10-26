window.PROBLEM = {
 "id": "788",
 "title": "Rotated Digits",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
