window.PROBLEM = {
 "id": "1047",
 "title": "Remove All Adjacent Duplicates In String",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "Take a string of lowercase letters. Repeatedly choose two neighbouring equal letters and delete both, until no such pair is left. Return the final string. Example: 'abbaca' → 'ca' (delete 'bb', then 'aa').",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Keep deleting pairs",
   "tag": "Brute force",
   "code": "class Solution:\n    def removeDuplicates(self, s):\n        changed = True\n        while changed:\n            changed = False\n            for i in range(len(s) - 1):\n                if s[i] == s[i + 1]:\n                    s = s[:i] + s[i + 2:]\n                    changed = True\n                    break\n        return s",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Scan for any adjacent equal pair, delete it, and repeat until nothing changes.",
   "frames": [],
   "alt": true
  }
 ]
};
