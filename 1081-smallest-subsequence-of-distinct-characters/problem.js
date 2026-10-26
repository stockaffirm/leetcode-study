window.PROBLEM = {
 "id": "1081",
 "title": "Smallest Subsequence of Distinct Characters",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'cbacdcbc' → 'acdb'.",
 "idea": "Same as 'remove duplicate letters': keep a stack of chosen letters. For each letter not yet on the stack, pop larger letters from the top as long as they occur again later (last-occurrence index), then push it.",
 "input": "s = \"cbacdcbc\"",
 "output": "\"acdb\"",
 "notes": [],
 "best": "Same as 'remove duplicate letters': keep a stack of chosen letters. For each letter not yet on the stack, pop larger letters from the top as long as they occur again later (last-occurrence index), then push it.",
 "variants": [
  {
   "name": "Monotonic stack with last occurrences",
   "code": "class Solution:\n    def smallestSubsequence(self, s):\n        last = {c: i for i, c in enumerate(s)}\n        st = []\n        used = set()\n        for i, c in enumerate(s):\n            if c in used:\n                continue\n            while st and st[-1] > c and last[st[-1]] > i:\n                used.discard(st.pop())\n            st.append(c)\n            used.add(c)\n        return ''.join(st)",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "Same as 'remove duplicate letters': keep a stack of chosen letters. For each letter not yet on the stack, pop larger letters from the top as long as they occur again later (last-occurrence index), then push it.",
   "frames": []
  }
 ]
};
