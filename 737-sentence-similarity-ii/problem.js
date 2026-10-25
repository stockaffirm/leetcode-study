window.PROBLEM = {
 "id": "737",
 "title": "Sentence Similarity II",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "Two sentences (lists of words) are similar if they have the same length and every pair of words at the same position is equal or 'similar'. A list of similar word pairs is given, and similarity is transitive: if a~b and b~c then a~c. Return True if the sentences are similar. Example: ['great','acting','skills'] and ['fine','drama','talent'] with pairs great~good, fine~good, drama~acting, skills~talent → True.",
 "why": "Two sentences are similar if they have the same length and each word pair is equal or 'similar'. Similarity is transitive (a~b and b~c means a~c). Pairs of similar words are given.",
 "idea": "Union the words of every pair; two words are similar when they have the same representative.",
 "input": "great acting skills / fine drama talent",
 "output": "True",
 "notes": [],
 "best": "Union the words of every pair; two words are similar when they have the same representative.",
 "variants": [
  {
   "name": "Union-Find over similar words",
   "code": "class Solution:\n    def areSentencesSimilarTwo(self, sentence1, sentence2, similarPairs):\n        if len(sentence1) != len(sentence2): return False\n        parent = {}\n        def find(x):\n            parent.setdefault(x, x)\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for a, b in similarPairs: parent[find(a)] = find(b)\n        return all(a == b or find(a) == find(b) for a, b in zip(sentence1, sentence2))",
   "time": "O((n + p)·α)",
   "space": "O(p)",
   "explain": "Union the words of every pair; two words are similar when they have the same representative.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS on a graph",
   "tag": "Alternative",
   "code": "class Solution:\n    def areSentencesSimilarTwo(self, sentence1, sentence2, similarPairs):\n        if len(sentence1) != len(sentence2): return False\n        g = defaultdict(set)\n        for a, b in similarPairs:\n            g[a].add(b)\n            g[b].add(a)\n        def reach(a, b):\n            seen, st = {a}, [a]\n            while st:\n                u = st.pop()\n                if u == b: return True\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        st.append(v)\n            return False\n        return all(a == b or reach(a, b) for a, b in zip(sentence1, sentence2))",
   "time": "O(n·(V+E))",
   "space": "O(V+E)",
   "explain": "Build the word graph and search from each word for its partner.",
   "frames": [],
   "alt": true
  }
 ]
};
