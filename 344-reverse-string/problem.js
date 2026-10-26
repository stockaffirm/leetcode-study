window.PROBLEM = {
 "id": "344",
 "title": "Reverse String",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "Reverse a list of characters in place: h,e,l,l,o → o,l,l,e,h.",
 "idea": "Keep one pointer at each end, swap, and walk inward until they meet.",
 "input": "[\"h\",\"e\",\"l\",\"l\",\"o\"]",
 "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
 "notes": [],
 "best": "Keep one pointer at each end, swap, and walk inward until they meet.",
 "variants": [
  {
   "name": "Swap from both ends",
   "code": "class Solution:\n    def reverseString(self, s):\n        i, j = 0, len(s) - 1\n        while i < j:\n            s[i], s[j] = s[j], s[i]\n            i += 1\n            j -= 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep one pointer at each end, swap, and walk inward until they meet.",
   "frames": []
  }
 ]
};
