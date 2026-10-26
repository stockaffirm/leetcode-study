window.PROBLEM = {
 "id": "541",
 "title": "Reverse String II",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
