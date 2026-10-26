window.PROBLEM = {
 "id": "2138",
 "title": "Divide a String Into Groups of Size k",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'abcdefghij', k=3, fill 'x' → ['abc','def','ghi','jxx'].",
 "idea": "Cut the string into pieces of length k; pad the last piece with the fill character.",
 "input": "s = \"abcdefghij\", k = 3, fill = \"x\"",
 "output": "['abc', 'def', 'ghi', 'jxx']",
 "notes": [],
 "best": "Cut the string into pieces of length k; pad the last piece with the fill character.",
 "variants": [
  {
   "name": "Slice and pad the last group",
   "code": "class Solution:\n    def divideString(self, s, k, fill):\n        s += fill * (-len(s) % k)\n        return [s[i:i + k] for i in range(0, len(s), k)]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Cut the string into pieces of length k; pad the last piece with the fill character.",
   "frames": []
  }
 ]
};
