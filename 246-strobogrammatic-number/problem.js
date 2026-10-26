window.PROBLEM = {
 "id": "246",
 "title": "Strobogrammatic Number",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "'69' turned upside down becomes '69' again (6 → 9 and 9 → 6) → true. '962' is not.",
 "idea": "Rotating the number by 180° swaps its two ends. Use two pointers from both ends: the left digit must rotate into the right digit (0→0, 1→1, 8→8, 6→9, 9→6).",
 "input": "num = \"69\"",
 "output": "true",
 "notes": [],
 "best": "Rotating the number by 180° swaps its two ends. Use two pointers from both ends: the left digit must rotate into the right digit (0→0, 1→1, 8→8, 6→9, 9→6).",
 "variants": [
  {
   "name": "Two pointers with a rotation map",
   "code": "class Solution:\n    def isStrobogrammatic(self, num):\n        pairs = {\"0\": \"0\", \"1\": \"1\", \"6\": \"9\", \"8\": \"8\", \"9\": \"6\"}\n        l, r = 0, len(num) - 1\n        while l <= r:\n            if num[l] not in pairs or pairs[num[l]] != num[r]:\n                return False\n            l += 1\n            r -= 1\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Rotating the number by 180° swaps its two ends. Use two pointers from both ends: the left digit must rotate into the right digit (0→0, 1→1, 8→8, 6→9, 9→6).",
   "frames": []
  }
 ]
};
