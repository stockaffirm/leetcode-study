window.PROBLEM = {
 "id": "838",
 "title": "Push Dominoes",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "Dominoes standing in a row are pushed ('L' left, 'R' right) at the start. A falling domino pushes its neighbour, and a domino pushed from both sides stays upright. Return the final state. Example: '.L.R...LR..L..' → 'LL.RR.LLRRLL..'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate rounds",
   "tag": "Brute force",
   "code": "class Solution:\n    def pushDominoes(self, dominoes):\n        cur = list(dominoes)\n        while True:\n            new = cur[:]\n            for i, c in enumerate(cur):\n                if c == '.':\n                    l = cur[i - 1] == 'R' if i else False\n                    r = cur[i + 1] == 'L' if i + 1 < len(cur) else False\n                    if l and not r:\n                        new[i] = 'R'\n                    elif r and not l:\n                        new[i] = 'L'\n            if new == cur:\n                return ''.join(cur)\n            cur = new",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Apply pushes simultaneously until nothing changes.",
   "frames": [],
   "alt": true
  }
 ]
};
