window.PROBLEM = {
 "id": "316",
 "title": "Remove Duplicate Letters",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'cbacdcbc' → 'acdb': every letter once, and it is the smallest possible order.",
 "idea": "Build the answer on a stack. When a smaller letter comes and the letter on top will appear again later, pop the top (it can be re-added later). A letter already in the stack is skipped.",
 "input": "s = \"cbacdcbc\"",
 "output": "\"acdb\"",
 "notes": [],
 "best": "Build the answer on a stack. When a smaller letter comes and the letter on top will appear again later, pop the top (it can be re-added later). A letter already in the stack is skipped.",
 "variants": [
  {
   "name": "Monotonic stack with last positions",
   "code": "class Solution:\n    def removeDuplicateLetters(self, s):\n        last = {c: i for i, c in enumerate(s)}\n        st, seen = [], set()\n        for i, c in enumerate(s):\n            if c in seen:\n                continue\n            while st and st[-1] > c and last[st[-1]] > i:\n                seen.remove(st.pop())\n            st.append(c)\n            seen.add(c)\n        return \"\".join(st)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Build the answer on a stack. When a smaller letter comes and the letter on top will appear again later, pop the top (it can be re-added later). A letter already in the stack is skipped.",
   "frames": []
  }
 ]
};
