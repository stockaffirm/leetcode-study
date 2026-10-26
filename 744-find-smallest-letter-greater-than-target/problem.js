window.PROBLEM = {
 "id": "744",
 "title": "Find Smallest Letter Greater Than Target",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "Given letters sorted ascending and a target letter, return the smallest letter in the list that is strictly greater than the target. If there is none, return the first letter of the list (wrap around). Example: ['c','f','j'], target 'a' → 'c'; target 'j' → 'c'.",
 "why": "Given sorted letters and a target letter, return the smallest letter that is strictly bigger; if none, wrap around to the first letter.",
 "idea": "bisect_right gives the position of the first letter bigger than the target. Using index % length handles the wrap-around.",
 "input": "['c','f','j'], target 'a'",
 "output": "'c'",
 "notes": [],
 "best": "bisect_right gives the position of the first letter bigger than the target. Using index % length handles the wrap-around.",
 "variants": [
  {
   "name": "Binary search, wrap around",
   "code": "class Solution:\n    def nextGreatestLetter(self, letters, target):\n        i = bisect_right(letters, target)\n        return letters[i % len(letters)]",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "bisect_right gives the position of the first letter bigger than the target. Using index % length handles the wrap-around.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Linear scan",
   "tag": "Brute force",
   "code": "class Solution:\n    def nextGreatestLetter(self, letters, target):\n        for ch in letters:\n            if ch > target: return ch\n        return letters[0]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Return the first letter that is bigger than the target; wrap to the first letter if none.",
   "frames": [],
   "alt": true
  }
 ]
};
