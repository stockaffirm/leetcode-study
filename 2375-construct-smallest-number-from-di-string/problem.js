window.PROBLEM = {
 "id": "2375",
 "title": "Construct Smallest Number From DI String",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "A pattern of 'I' (increasing) and 'D' (decreasing) of length n describes a string num of n+1 distinct digits 1–9: num[i] < num[i+1] for 'I', num[i] > num[i+1] for 'D'. Return the lexicographically smallest num. Example: 'IIIDIDDD' → '123549876'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Backtracking in increasing order",
   "tag": "Brute force",
   "code": "class Solution:\n    def smallestNumber(self, pattern):\n        n = len(pattern)\n        used = [False] * 10\n        cur = []\n        def go():\n            if len(cur) == n + 1:\n                return True\n            for d in range(1, 10):\n                if used[d]:\n                    continue\n                if cur:\n                    if pattern[len(cur) - 1] == 'I' and d < cur[-1]:\n                        continue\n                    if pattern[len(cur) - 1] == 'D' and d > cur[-1]:\n                        continue\n                used[d] = True\n                cur.append(d)\n                if go():\n                    return True\n                cur.pop()\n                used[d] = False\n            return False\n        go()\n        return ''.join(map(str, cur))",
   "time": "O(9!)",
   "space": "O(n)",
   "explain": "Try digits 1-9 in order, keeping the first full number that matches the pattern.",
   "frames": [],
   "alt": true
  }
 ]
};
