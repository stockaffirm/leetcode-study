window.PROBLEM = {
 "id": "796",
 "title": "Rotate String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A shift moves the first letter of s to the end. Return true if s can become goal after some number of shifts. Example: s 'abcde', goal 'cdeab' → true.",
 "why": "'abcde' shifted left twice becomes 'cdeab' → true.",
 "idea": "Every rotation of s is a substring of s + s. So goal is a rotation of s exactly when the lengths match and goal appears inside s + s.",
 "input": "s = \"abcde\", goal = \"cdeab\"",
 "output": "true",
 "notes": [],
 "best": "Every rotation of s is a substring of s + s. So goal is a rotation of s exactly when the lengths match and goal appears inside s + s.",
 "variants": [
  {
   "name": "Search in the doubled string",
   "code": "class Solution:\n    def rotateString(self, s, goal):\n        return len(s) == len(goal) and goal in s + s",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Every rotation of s is a substring of s + s. So goal is a rotation of s exactly when the lengths match and goal appears inside s + s.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every rotation",
   "tag": "Brute force",
   "code": "class Solution:\n    def rotateString(self, s, goal):\n        return len(s) == len(goal) and any(s[i:] + s[:i] == goal for i in range(len(s)))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Rotate s by every amount and compare with goal.",
   "frames": [],
   "alt": true
  }
 ]
};
