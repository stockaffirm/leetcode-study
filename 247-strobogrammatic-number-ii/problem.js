window.PROBLEM = {
 "id": "247",
 "title": "Strobogrammatic Number II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Return all strobogrammatic numbers of length n (numbers that look the same when rotated by 180°: 0, 1, 8 stay and 6, 9 swap). Numbers do not start with 0 (except the single digit 0 itself). Example: n=2 → ['11','69','88','96'].",
 "why": "Length 2: wrap the empty middle with a pair — 11, 69, 88, 96 (no leading 0).",
 "idea": "A strobogrammatic number of length n is a strobogrammatic number of length n−2 wrapped in a pair (0…0, 1…1, 6…9, 8…8, 9…6). The middle is empty (n even) or one of 0, 1, 8 (n odd). The outermost pair must not be 0.",
 "input": "n = 2",
 "output": "[\"11\",\"69\",\"88\",\"96\"]",
 "notes": [],
 "best": "A strobogrammatic number of length n is a strobogrammatic number of length n−2 wrapped in a pair (0…0, 1…1, 6…9, 8…8, 9…6). The middle is empty (n even) or one of 0, 1, 8 (n odd). The outermost pair must not be 0.",
 "variants": [
  {
   "name": "Build from the middle outwards",
   "code": "class Solution:\n    def findStrobogrammatic(self, n):\n        pairs = ((\"0\", \"0\"), (\"1\", \"1\"), (\"6\", \"9\"), (\"8\", \"8\"), (\"9\", \"6\"))\n        def build(m):\n            if m == 0:\n                return [\"\"]\n            if m == 1:\n                return [\"0\", \"1\", \"8\"]\n            res = []\n            for mid in build(m - 2):\n                for a, b in pairs:\n                    if m == n and a == \"0\":\n                        continue\n                    res.append(a + mid + b)\n            return res\n        return build(n)",
   "time": "O(5^(n/2))",
   "space": "O(5^(n/2))",
   "explain": "A strobogrammatic number of length n is a strobogrammatic number of length n−2 wrapped in a pair (0…0, 1…1, 6…9, 8…8, 9…6). The middle is empty (n even) or one of 0, 1, 8 (n odd). The outermost pair must not be 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Grow layer by layer from the centre",
   "tag": "Alternative",
   "code": "class Solution:\n    def findStrobogrammatic(self, n):\n        pairs = ((\"0\", \"0\"), (\"1\", \"1\"), (\"6\", \"9\"), (\"8\", \"8\"), (\"9\", \"6\"))\n        cur = [\"\"] if n % 2 == 0 else [\"0\", \"1\", \"8\"]\n        for length in range(n % 2 + 2, n + 1, 2):\n            nxt = []\n            for s in cur:\n                for a, b in pairs:\n                    if length == n and a == \"0\":\n                        continue\n                    nxt.append(a + s + b)\n            cur = nxt\n        return cur",
   "time": "O(5^(n/2))",
   "space": "O(5^(n/2))",
   "explain": "Start with the middle (empty or 0/1/8) and wrap every number in a pair, two digits at a time.",
   "frames": [],
   "alt": true
  }
 ]
};
