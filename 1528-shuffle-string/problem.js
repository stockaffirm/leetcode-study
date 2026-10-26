window.PROBLEM = {
 "id": "1528",
 "title": "Shuffle String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "s 'codeleet', indices [4,5,6,7,0,2,1,3] → 'leetcode'.",
 "idea": "The letter s[i] belongs at position indices[i] of the answer. Create an array and write each letter to its place.",
 "input": "s = \"codeleet\", indices = [4,5,6,7,0,2,1,3]",
 "output": "\"leetcode\"",
 "notes": [],
 "best": "The letter s[i] belongs at position indices[i] of the answer. Create an array and write each letter to its place.",
 "variants": [
  {
   "name": "Place each letter at its target index",
   "code": "class Solution:\n    def restoreString(self, s, indices):\n        res = [''] * len(s)\n        for c, i in zip(s, indices):\n            res[i] = c\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The letter s[i] belongs at position indices[i] of the answer. Create an array and write each letter to its place.",
   "frames": []
  }
 ]
};
