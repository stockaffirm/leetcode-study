window.PROBLEM = {
 "id": "2375",
 "title": "Construct Smallest Number From DI String",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'IIIDIDDD' → 123549876.",
 "idea": "Write digits 1, 2, 3 … in order, but for every group of consecutive D's reverse the matching digits. A stack does this: push each digit, and pop everything whenever you reach an I (or the end).",
 "input": "pattern = \"IIIDIDDD\"",
 "output": "\"123549876\"",
 "notes": [],
 "best": "Write digits 1, 2, 3 … in order, but for every group of consecutive D's reverse the matching digits. A stack does this: push each digit, and pop everything whenever you reach an I (or the end).",
 "variants": [
  {
   "name": "Stack reverses every D-run",
   "code": "class Solution:\n    def smallestNumber(self, pattern):\n        res = []\n        st = []\n        for i in range(len(pattern) + 1):\n            st.append(str(i + 1))\n            if i == len(pattern) or pattern[i] == 'I':\n                while st:\n                    res.append(st.pop())\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Write digits 1, 2, 3 … in order, but for every group of consecutive D's reverse the matching digits. A stack does this: push each digit, and pop everything whenever you reach an I (or the end).",
   "frames": []
  }
 ]
};
