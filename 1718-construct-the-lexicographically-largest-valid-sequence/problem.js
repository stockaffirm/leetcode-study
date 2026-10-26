window.PROBLEM = {
 "id": "1718",
 "title": "Construct the Lexicographically Largest Valid Sequence",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Build a sequence of length 2n − 1 using 1 once and every other number 2 … n twice, such that the two copies of a number i are exactly i positions apart. Return the lexicographically largest such sequence. Example: n=3 → [3,1,2,3,2].",
 "why": "n = 3 → [3,1,2,3,2]: 1 appears once, 2 twice with two positions between them, 3 twice with three positions between them.",
 "idea": "Fill the sequence left to right. At the first empty slot try the numbers from n down to 1: a number v > 1 also takes slot i + v, number 1 takes only one slot. Trying big numbers first makes the first complete sequence the largest one.",
 "input": "n = 3",
 "output": "[3,1,2,3,2]",
 "notes": [],
 "best": "Fill the sequence left to right. At the first empty slot try the numbers from n down to 1: a number v > 1 also takes slot i + v, number 1 takes only one slot. Trying big numbers first makes the first complete sequence the largest one.",
 "variants": [
  {
   "name": "Backtracking, biggest number first",
   "code": "class Solution:\n    def constructDistancedSequence(self, n):\n        size = 2 * n - 1\n        res = [0] * size\n        used = [False] * (n + 1)\n        def go(i):\n            if i == size:\n                return True\n            if res[i]:\n                return go(i + 1)\n            for v in range(n, 0, -1):\n                if used[v]:\n                    continue\n                j = i + v if v > 1 else i\n                if j >= size or res[j]:\n                    continue\n                used[v] = True\n                res[i] = res[j] = v\n                if go(i + 1):\n                    return True\n                used[v] = False\n                res[i] = res[j] = 0\n            return False\n        go(0)\n        return res",
   "time": "O(n!)",
   "space": "O(n)",
   "explain": "Fill the sequence left to right. At the first empty slot try the numbers from n down to 1: a number v > 1 also takes slot i + v, number 1 takes only one slot. Trying big numbers first makes the first complete sequence the largest one.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Backtracking over the set of unused numbers",
   "tag": "Alternative",
   "code": "class Solution:\n    def constructDistancedSequence(self, n):\n        size = 2 * n - 1\n        res = [0] * size\n        def go(remaining):\n            if not remaining:\n                return True\n            i = res.index(0)\n            for v in sorted(remaining, reverse=True):\n                j = i + v if v > 1 else i\n                if j < size and (v == 1 or res[j] == 0):\n                    res[i] = v\n                    if v > 1:\n                        res[j] = v\n                    if go(remaining - {v}):\n                        return True\n                    res[i] = 0\n                    if v > 1:\n                        res[j] = 0\n            return False\n        go(set(range(1, n + 1)))\n        return res",
   "time": "O(n!)",
   "space": "O(n)",
   "explain": "Find the first empty slot and try the unused numbers from the biggest.",
   "frames": [],
   "alt": true
  }
 ]
};
