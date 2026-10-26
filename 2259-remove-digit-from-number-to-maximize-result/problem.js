window.PROBLEM = {
 "id": "2259",
 "title": "Remove Digit From Number to Maximize Result",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "number '123', digit '3' → '12'.",
 "idea": "The digit appears at a few positions. Remove each in turn and keep the largest resulting string (all candidates have the same length, so string comparison works).",
 "input": "number = \"1231\", digit = \"1\"",
 "output": "\"231\"",
 "notes": [],
 "best": "The digit appears at a few positions. Remove each in turn and keep the largest resulting string (all candidates have the same length, so string comparison works).",
 "variants": [
  {
   "name": "Try each occurrence, keep the largest",
   "code": "class Solution:\n    def removeDigit(self, number, digit):\n        return max(number[:i] + number[i + 1:] for i, c in enumerate(number) if c == digit)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "The digit appears at a few positions. Remove each in turn and keep the largest resulting string (all candidates have the same length, so string comparison works).",
   "frames": []
  }
 ]
};
