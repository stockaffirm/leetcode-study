window.PROBLEM = {
 "id": "672",
 "title": "Bulb Switcher II",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=3, presses=1 → 4 different patterns.",
 "idea": "The four buttons flip all, evens, odds, or every 3rd bulb (1, 4, 7, …). Pressing a button twice cancels, and a few combinations equal one button, so only 8 distinct effects exist, and they are fully visible on the first three bulbs. Count patterns by (n, presses): for n ≥ 3 it is 1, 4, 7, 8 for 0, 1, 2, 3+ presses; smaller n give smaller tables.",
 "input": "n = 3, presses = 1",
 "output": "4",
 "notes": [],
 "best": "The four buttons flip all, evens, odds, or every 3rd bulb (1, 4, 7, …). Pressing a button twice cancels, and a few combinations equal one button, so only 8 distinct effects exist, and they are fully visible on the first three bulbs. Count patterns by (n, presses): for n ≥ 3 it is 1, 4, 7, 8 for 0, 1, 2, 3+ presses; smaller n give smaller tables.",
 "variants": [
  {
   "name": "Only a few patterns exist (n ≥ 3 behaves the same)",
   "code": "class Solution:\n    def flipLights(self, n, presses):\n        if presses == 0:\n            return 1\n        if n == 1:\n            return 2\n        if n == 2:\n            return 3 if presses == 1 else 4\n        return 4 if presses == 1 else 7 if presses == 2 else 8",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "The four buttons flip all, evens, odds, or every 3rd bulb (1, 4, 7, …). Pressing a button twice cancels, and a few combinations equal one button, so only 8 distinct effects exist, and they are fully visible on the first three bulbs. Count patterns by (n, presses): for n ≥ 3 it is 1, 4, 7, 8 for 0, 1, 2, 3+ presses; smaller n give smaller tables.",
   "frames": []
  }
 ]
};
