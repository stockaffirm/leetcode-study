window.PROBLEM = {
 "id": "839",
 "title": "Similar String Groups",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "Two strings are 'similar' if equal or if swapping two letters of one gives the other. Similarity chains form groups. How many groups?",
 "idea": "Compare every pair (they are all anagrams, so being similar means differing in 0 or 2 places) and union the similar ones. Count the components.",
 "input": "[\"tars\",\"rats\",\"arts\",\"star\"]",
 "output": "2",
 "notes": [],
 "best": "Compare every pair (they are all anagrams, so being similar means differing in 0 or 2 places) and union the similar ones. Count the components.",
 "variants": [
  {
   "name": "Union-find on similar pairs",
   "code": "class Solution:\n    def numSimilarGroups(self, strs):\n        n = len(strs)\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        def similar(a, b):\n            diff = [i for i in range(len(a)) if a[i] != b[i]]\n            return len(diff) in (0, 2)\n        for i in range(n):\n            for j in range(i + 1, n):\n                if similar(strs[i], strs[j]): parent[find(i)] = find(j)\n        return len({find(i) for i in range(n)})",
   "time": "O(n²·L)",
   "space": "O(n)",
   "explain": "Compare every pair (they are all anagrams, so being similar means differing in 0 or 2 places) and union the similar ones. Count the components.",
   "frames": []
  }
 ]
};
