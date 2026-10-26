window.PROBLEM = {
 "id": "1722",
 "title": "Minimize Hamming Distance After Swap Operations",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "source [1,2,3,4], target [2,1,4,5], swaps (0,1),(2,3) → hamming distance 1.",
 "idea": "Indices connected by allowed swaps can be permuted arbitrarily. Group them with Union-Find; within a group count how many source values can match target values (multiset intersection). The distance is n minus the total matches.",
 "input": "source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]",
 "output": "1",
 "notes": [],
 "best": "Indices connected by allowed swaps can be permuted arbitrarily. Group them with Union-Find; within a group count how many source values can match target values (multiset intersection). The distance is n minus the total matches.",
 "variants": [
  {
   "name": "Union-Find groups, match multisets",
   "code": "class Solution:\n    def minimumHammingDistance(self, source, target, allowedSwaps):\n        n = len(source)\n        p = list(range(n))\n        def find(x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        for a, b in allowedSwaps:\n            p[find(a)] = find(b)\n        groups = defaultdict(list)\n        for i in range(n):\n            groups[find(i)].append(i)\n        match = 0\n        for idx in groups.values():\n            have = Counter(source[i] for i in idx)\n            want = Counter(target[i] for i in idx)\n            match += sum((have & want).values())\n        return n - match",
   "time": "O(n α)",
   "space": "O(n)",
   "explain": "Indices connected by allowed swaps can be permuted arbitrarily. Group them with Union-Find; within a group count how many source values can match target values (multiset intersection). The distance is n minus the total matches.",
   "frames": []
  }
 ]
};
