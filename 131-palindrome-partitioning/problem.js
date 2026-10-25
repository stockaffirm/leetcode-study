window.PROBLEM = {
 "id": "131",
 "title": "Palindrome Partitioning",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Cut a string into pieces so that every piece is a palindrome and return all possible ways. Example: 'aab' → [['a','a','b'], ['aa','b']].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoized partitions of every suffix",
   "tag": "Alternative",
   "code": "class Solution:\n    def partition(self, s):\n        n = len(s)\n        @lru_cache(None)\n        def go(i):\n            if i == n:\n                return [[]]\n            res = []\n            for j in range(i + 1, n + 1):\n                t = s[i:j]\n                if t == t[::-1]:\n                    for rest in go(j):\n                        res.append([t] + rest)\n            return res\n        return go(0)",
   "time": "O(n · 2ⁿ)",
   "space": "O(n · 2ⁿ)",
   "explain": "go(i) returns all palindrome partitions of s[i:].",
   "frames": [],
   "alt": true
  }
 ]
};
