window.PROBLEM = {
 "id": "541",
 "title": "Reverse String II",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Process a string in blocks of 2k characters: reverse the first k characters of every block (if fewer than k remain reverse them all; if fewer than 2k but at least k remain, reverse the first k). Example: 'abcdefg', k=2 → 'bacdfeg'.",
 "why": "'abcdefg', k=2: reverse 'ab' → 'ba', skip 'cd', reverse 'ef' → 'fe', keep 'g' → 'bacdfeg'.",
 "idea": "Jump through the string in steps of 2k and reverse the first k characters of each block (the slice just clips at the end of the string).",
 "input": "s = \"abcdefg\", k = 2",
 "output": "\"bacdfeg\"",
 "notes": [],
 "best": "Jump through the string in steps of 2k and reverse the first k characters of each block (the slice just clips at the end of the string).",
 "variants": [
  {
   "name": "Reverse each 2k block's first k",
   "code": "class Solution:\n    def reverseStr(self, s, k):\n        a = list(s)\n        for i in range(0, len(a), 2 * k):\n            a[i:i + k] = a[i:i + k][::-1]\n        return \"\".join(a)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Jump through the string in steps of 2k and reverse the first k characters of each block (the slice just clips at the end of the string).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Join slices",
   "tag": "Pythonic",
   "code": "class Solution:\n    def reverseStr(self, s, k):\n        return \"\".join(s[i:i + k][::-1] + s[i + k:i + 2 * k] for i in range(0, len(s), 2 * k))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each block of 2k reverse the first k letters and keep the next k.",
   "frames": [],
   "alt": true
  }
 ]
};
