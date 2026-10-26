window.PROBLEM = {
 "id": "316",
 "title": "Remove Duplicate Letters",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "Remove duplicate letters from a string so that every letter appears exactly once and the result is the smallest possible in dictionary order (the order of the kept letters stays as in the string). Example: 'cbacdcbc' → 'acdb'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Pick the smallest letter that can lead",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeDuplicateLetters(self, s):\n        for c in sorted(set(s)):\n            suffix = s[s.index(c):]\n            if set(suffix) == set(s):\n                return c + self.removeDuplicateLetters(suffix.replace(c, \"\"))\n        return \"\"",
   "time": "O(26 · n)",
   "space": "O(n)",
   "explain": "The first letter is the smallest letter whose first occurrence still leaves all other letters to the right; recurse on the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
