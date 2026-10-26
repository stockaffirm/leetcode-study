window.PROBLEM = {
 "id": "131",
 "title": "Palindrome Partitioning",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "'aab' can be cut as a | a | b or aa | b — every piece is a palindrome.",
 "idea": "From the current start, try every end; if s[start:end] is a palindrome add it, recurse on the rest, and remove it again. When the start reaches the end of the string record the partition.",
 "input": "s = \"aab\"",
 "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
 "notes": [],
 "best": "From the current start, try every end; if s[start:end] is a palindrome add it, recurse on the rest, and remove it again. When the start reaches the end of the string record the partition.",
 "variants": [
  {
   "name": "Backtracking over cut positions",
   "code": "class Solution:\n    def partition(self, s):\n        res, path = [], []\n        def go(start):\n            if start == len(s):\n                res.append(path[:])\n                return\n            for end in range(start + 1, len(s) + 1):\n                t = s[start:end]\n                if t == t[::-1]:\n                    path.append(t)\n                    go(end)\n                    path.pop()\n        go(0)\n        return res",
   "time": "O(n · 2ⁿ)",
   "space": "O(n)",
   "explain": "From the current start, try every end; if s[start:end] is a palindrome add it, recurse on the rest, and remove it again. When the start reaches the end of the string record the partition.",
   "frames": []
  }
 ]
};
