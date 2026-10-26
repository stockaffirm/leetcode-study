window.PROBLEM = {
 "id": "2264",
 "title": "Largest 3-Same-Digit Number in String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Find a substring of exactly three equal digits and return the largest such substring (as a string), or '' if none exists. Example: '6777133339' → '777'.",
 "why": "'6777133339' → '777' and '333': the largest is '777'.",
 "idea": "Check each window of three characters; if they are equal it is a candidate. Return the largest candidate (or an empty string).",
 "input": "num = \"6777133339\"",
 "output": "\"777\"",
 "notes": [],
 "best": "Check each window of three characters; if they are equal it is a candidate. Return the largest candidate (or an empty string).",
 "variants": [
  {
   "name": "Find triples of equal digits, take the largest",
   "code": "class Solution:\n    def largestGoodInteger(self, num):\n        best = \"\"\n        for i in range(len(num) - 2):\n            if num[i] == num[i + 1] == num[i + 2]:\n                best = max(best, num[i:i + 3])\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Check each window of three characters; if they are equal it is a candidate. Return the largest candidate (or an empty string).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check all digits",
   "tag": "Alternative",
   "code": "class Solution:\n    def largestGoodInteger(self, num):\n        for d in '9876543210':\n            if d * 3 in num:\n                return d * 3\n        return \"\"",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Look for 999, 888, … 000 inside the string.",
   "frames": [],
   "alt": true
  }
 ]
};
