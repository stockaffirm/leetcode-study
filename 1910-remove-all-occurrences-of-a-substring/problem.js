window.PROBLEM = {
 "id": "1910",
 "title": "Remove All Occurrences of a Substring",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'daabcbaabcbc' removing 'abc' repeatedly → 'dab'.",
 "idea": "Push characters one by one; whenever the top of the stack spells part, pop those characters. Removing as soon as a match completes is the same as removing the leftmost occurrence repeatedly.",
 "input": "s = \"daabcbaabcbc\", part = \"abc\"",
 "output": "\"dab\"",
 "notes": [],
 "best": "Push characters one by one; whenever the top of the stack spells part, pop those characters. Removing as soon as a match completes is the same as removing the leftmost occurrence repeatedly.",
 "variants": [
  {
   "name": "Stack of characters, pop when the tail matches",
   "code": "class Solution:\n    def removeOccurrences(self, s, part):\n        st = []\n        m = len(part)\n        for c in s:\n            st.append(c)\n            if len(st) >= m and ''.join(st[-m:]) == part:\n                del st[-m:]\n        return ''.join(st)",
   "time": "O(n·m)",
   "space": "O(n)",
   "explain": "Push characters one by one; whenever the top of the stack spells part, pop those characters. Removing as soon as a match completes is the same as removing the leftmost occurrence repeatedly.",
   "frames": []
  }
 ]
};
