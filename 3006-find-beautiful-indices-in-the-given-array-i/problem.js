window.PROBLEM = {
 "id": "3006",
 "title": "Find Beautiful Indices in the Given Array I",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "s 'isawsquirrelnearmysquirrelhouseohmy', a 'my', b 'squirrel', k 15 → [16, 33].",
 "idea": "Collect every start index of a and of b. An a-index i is beautiful if some b-index j has |i − j| ≤ k. With both lists sorted, binary search the closest b-index to i.",
 "input": "s = \"isawsquirrelnearmysquirrelhouseohmy\", a = \"my\", b = \"squirrel\", k = 15",
 "output": "[16, 33]",
 "notes": [],
 "best": "Collect every start index of a and of b. An a-index i is beautiful if some b-index j has |i − j| ≤ k. With both lists sorted, binary search the closest b-index to i.",
 "variants": [
  {
   "name": "Positions of a and b, then a near-b check",
   "code": "class Solution:\n    def beautifulIndices(self, s, a, b, k):\n        pa = [i for i in range(len(s) - len(a) + 1) if s.startswith(a, i)]\n        pb = [j for j in range(len(s) - len(b) + 1) if s.startswith(b, j)]\n        res = []\n        for i in pa:\n            p = bisect_left(pb, i - k)\n            if p < len(pb) and pb[p] <= i + k:\n                res.append(i)\n        return res",
   "time": "O(n·L + p log q)",
   "space": "O(n)",
   "explain": "Collect every start index of a and of b. An a-index i is beautiful if some b-index j has |i − j| ≤ k. With both lists sorted, binary search the closest b-index to i.",
   "frames": []
  }
 ]
};
