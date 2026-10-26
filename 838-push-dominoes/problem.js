window.PROBLEM = {
 "id": "838",
 "title": "Push Dominoes",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "'.L.R...LR..L..' → 'LL.RR.LLRRLL..'.",
 "idea": "For each upright domino the force comes from the nearest 'R' to its left and the nearest 'L' to its right. Compute the distance to the nearest pushing domino from each side (an 'L' blocks an earlier 'R' and vice versa); the nearer push wins, equal distances cancel.",
 "input": "dominoes = \".L.R...LR..L..\"",
 "output": "\"LL.RR.LLRRLL..\"",
 "notes": [],
 "best": "For each upright domino the force comes from the nearest 'R' to its left and the nearest 'L' to its right. Compute the distance to the nearest pushing domino from each side (an 'L' blocks an earlier 'R' and vice versa); the nearer push wins, equal distances cancel.",
 "variants": [
  {
   "name": "Look at the nearest push on each side",
   "code": "class Solution:\n    def pushDominoes(self, dominoes):\n        n = len(dominoes)\n        force = [0] * n\n        f = 0\n        for i in range(n):\n            if dominoes[i] == 'R':\n                f = n\n            elif dominoes[i] == 'L':\n                f = 0\n            else:\n                f = max(f - 1, 0)\n            force[i] += f\n        f = 0\n        for i in range(n - 1, -1, -1):\n            if dominoes[i] == 'L':\n                f = n\n            elif dominoes[i] == 'R':\n                f = 0\n            else:\n                f = max(f - 1, 0)\n            force[i] -= f\n        return ''.join('R' if x > 0 else 'L' if x < 0 else '.' for x in force)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each upright domino the force comes from the nearest 'R' to its left and the nearest 'L' to its right. Compute the distance to the nearest pushing domino from each side (an 'L' blocks an earlier 'R' and vice versa); the nearer push wins, equal distances cancel.",
   "frames": []
  }
 ]
};
