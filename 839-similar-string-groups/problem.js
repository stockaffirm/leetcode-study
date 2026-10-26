window.PROBLEM = {
 "id": "839",
 "title": "Similar String Groups",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "Two strings are similar if they are equal, or if swapping two letters of one gives the other. Strings that are connected through chains of similar strings form a group. All strings are anagrams of each other. Return the number of groups. Example: ['tars','rats','arts','star'] → 2 (tars–rats–arts; star alone).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS over components",
   "tag": "Alternative",
   "code": "class Solution:\n    def numSimilarGroups(self, strs):\n        n = len(strs)\n        seen = [False] * n\n        groups = 0\n        for s in range(n):\n            if seen[s]: continue\n            groups += 1\n            seen[s] = True\n            st = [s]\n            while st:\n                u = st.pop()\n                for v in range(n):\n                    if not seen[v] and sum(a != b for a, b in zip(strs[u], strs[v])) in (0, 2):\n                        seen[v] = True\n                        st.append(v)\n        return groups",
   "time": "O(n²·L)",
   "space": "O(n)",
   "explain": "Explore each group with a stack and count the groups.",
   "frames": [],
   "alt": true
  }
 ]
};
