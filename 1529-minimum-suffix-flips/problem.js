window.PROBLEM = {
 "id": "1529",
 "title": "Minimum Suffix Flips",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'10111' changes at 0→1, 1→0, 0→1 → 3 flips.",
 "idea": "A flip inverts everything from index i to the end, so only the places where the target changes from the previous bit need a flip (starting from an all-0 string). Count the positions where the bit differs from the one before it (with an initial 0).",
 "input": "target = \"10111\"",
 "output": "3",
 "notes": [],
 "best": "A flip inverts everything from index i to the end, so only the places where the target changes from the previous bit need a flip (starting from an all-0 string). Count the positions where the bit differs from the one before it (with an initial 0).",
 "variants": [
  {
   "name": "Count the changes in the target",
   "code": "class Solution:\n    def minFlips(self, target):\n        flips = 0\n        prev = '0'\n        for c in target:\n            if c != prev:\n                flips += 1\n                prev = c\n        return flips",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A flip inverts everything from index i to the end, so only the places where the target changes from the previous bit need a flip (starting from an all-0 string). Count the positions where the bit differs from the one before it (with an initial 0).",
   "frames": []
  }
 ]
};
