window.PROBLEM = {
 "id": "2124",
 "title": "Check if All A's Appears Before All B's",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'aaabbb' → true; 'abab' → false.",
 "idea": "All a's come before all b's exactly when the string never has a 'b' directly followed (at any distance) by an 'a'; checking for the substring 'ba' is enough.",
 "input": "s = \"aaabbb\"",
 "output": "true",
 "notes": [],
 "best": "All a's come before all b's exactly when the string never has a 'b' directly followed (at any distance) by an 'a'; checking for the substring 'ba' is enough.",
 "variants": [
  {
   "name": "No 'ba' anywhere",
   "code": "class Solution:\n    def checkString(self, s):\n        return 'ba' not in s",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "All a's come before all b's exactly when the string never has a 'b' directly followed (at any distance) by an 'a'; checking for the substring 'ba' is enough.",
   "frames": []
  }
 ]
};
