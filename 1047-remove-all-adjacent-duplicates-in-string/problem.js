window.PROBLEM = {
 "id": "1047",
 "title": "Remove All Adjacent Duplicates In String",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "Repeatedly delete two equal neighbouring letters until none are left. Return the final string.",
 "idea": "Use a stack: if the new letter equals the top, pop; otherwise push.",
 "input": "'abbaca'",
 "output": "'ca'",
 "notes": [],
 "best": "Use a stack: if the new letter equals the top, pop; otherwise push.",
 "variants": [
  {
   "name": "Stack",
   "code": "class Solution:\n    def removeDuplicates(self, s):\n        st = []\n        for ch in s:\n            if st and st[-1] == ch: st.pop()\n            else: st.append(ch)\n        return ''.join(st)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Use a stack: if the new letter equals the top, pop; otherwise push.",
   "frames": []
  }
 ]
};
