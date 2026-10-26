window.PROBLEM = {
 "id": "2337",
 "title": "Move Pieces to Obtain a String",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "'_L__R__R_' → 'L______RR': L moves left, R moves right: true.",
 "idea": "'L' can only move left and 'R' only right, and pieces never pass each other. Skip blanks with two pointers; the next piece must be the same letter in both strings, and an L must not end up to the right of where it started, an R not to the left.",
 "input": "start = \"_L__R__R_\", target = \"L______RR\"",
 "output": "true",
 "notes": [],
 "best": "'L' can only move left and 'R' only right, and pieces never pass each other. Skip blanks with two pointers; the next piece must be the same letter in both strings, and an L must not end up to the right of where it started, an R not to the left.",
 "variants": [
  {
   "name": "Two pointers over the pieces",
   "code": "class Solution:\n    def canChange(self, start, target):\n        n = len(start)\n        i = j = 0\n        while i < n or j < n:\n            while i < n and start[i] == '_':\n                i += 1\n            while j < n and target[j] == '_':\n                j += 1\n            if i == n or j == n:\n                return i == n and j == n\n            if start[i] != target[j]:\n                return False\n            if start[i] == 'L' and i < j:\n                return False\n            if start[i] == 'R' and i > j:\n                return False\n            i += 1\n            j += 1\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "'L' can only move left and 'R' only right, and pieces never pass each other. Skip blanks with two pointers; the next piece must be the same letter in both strings, and an L must not end up to the right of where it started, an R not to the left.",
   "frames": []
  }
 ]
};
