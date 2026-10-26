window.PROBLEM = {
 "id": "917",
 "title": "Reverse Only Letters",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "Reverse only the letters of a string; every other character stays put. 'a-bC-dEf-ghIj' → 'j-Ih-gfE-dCba'.",
 "idea": "Move a left and right pointer inward, skipping non-letters, and swap when both point at letters.",
 "input": "\"a-bC-dEf-ghIj\"",
 "output": "\"j-Ih-gfE-dCba\"",
 "notes": [],
 "best": "Move a left and right pointer inward, skipping non-letters, and swap when both point at letters.",
 "variants": [
  {
   "name": "Two pointers skipping non-letters",
   "code": "class Solution:\n    def reverseOnlyLetters(self, s):\n        chars = list(s)\n        i, j = 0, len(chars) - 1\n        while i < j:\n            if not chars[i].isalpha(): i += 1\n            elif not chars[j].isalpha(): j -= 1\n            else:\n                chars[i], chars[j] = chars[j], chars[i]\n                i += 1\n                j -= 1\n        return ''.join(chars)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Move a left and right pointer inward, skipping non-letters, and swap when both point at letters.",
   "frames": []
  }
 ]
};
