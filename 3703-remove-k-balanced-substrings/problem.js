window.PROBLEM = {
 "id": "3703",
 "title": "Remove K-Balanced Substrings",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'((()))()()()' with k=3 → the first six characters cancel → '()()()'.",
 "idea": "Keep a stack of runs (character, length). When a run of ')' reaches length k directly above a run of '(' of length ≥ k, remove k from both. Merge equal neighbouring runs when pushing. The stack contents are the final string.",
 "input": "s = \"((()))()()()\", k = 3",
 "output": "\"()()()\"",
 "notes": [],
 "best": "Keep a stack of runs (character, length). When a run of ')' reaches length k directly above a run of '(' of length ≥ k, remove k from both. Merge equal neighbouring runs when pushing. The stack contents are the final string.",
 "variants": [
  {
   "name": "Stack of runs: k '(' then k ')' cancel",
   "code": "class Solution:\n    def removeSubstring(self, s, k):\n        st = []\n        for c in s:\n            if st and st[-1][0] == c:\n                st[-1][1] += 1\n            else:\n                st.append([c, 1])\n            if c == ')' and st[-1][1] == k and len(st) >= 2 and st[-2][0] == '(' and st[-2][1] >= k:\n                st.pop()\n                st[-1][1] -= k\n                if st[-1][1] == 0:\n                    st.pop()\n        return ''.join(ch * cnt for ch, cnt in st)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack of runs (character, length). When a run of ')' reaches length k directly above a run of '(' of length ≥ k, remove k from both. Merge equal neighbouring runs when pushing. The stack contents are the final string.",
   "frames": []
  }
 ]
};
