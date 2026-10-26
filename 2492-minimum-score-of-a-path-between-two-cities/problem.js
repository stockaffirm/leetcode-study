window.PROBLEM = {
 "id": "2492",
 "title": "Minimum Score of a Path Between Two Cities",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "Roads (1-2:9, 2-3:6, 2-4:5, 1-4:7): the cheapest road reachable from city 1 weighs 5.",
 "idea": "A path may revisit cities and edges, so the best score is the smallest road weight in the connected component that contains both city 1 and city n (they are guaranteed connected). Union the endpoints and take the minimum weight among roads in city 1's component.",
 "input": "n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]",
 "output": "5",
 "notes": [],
 "best": "A path may revisit cities and edges, so the best score is the smallest road weight in the connected component that contains both city 1 and city n (they are guaranteed connected). Union the endpoints and take the minimum weight among roads in city 1's component.",
 "variants": [
  {
   "name": "Smallest edge in the component of city 1",
   "code": "class Solution:\n    def minScore(self, n, roads):\n        p = list(range(n + 1))\n        def find(x):\n            while p[x] != x:\n                p[x] = p[p[x]]\n                x = p[x]\n            return x\n        for a, b, _ in roads:\n            p[find(a)] = find(b)\n        return min(w for a, b, w in roads if find(a) == find(1))",
   "time": "O(E α)",
   "space": "O(n)",
   "explain": "A path may revisit cities and edges, so the best score is the smallest road weight in the connected component that contains both city 1 and city n (they are guaranteed connected). Union the endpoints and take the minimum weight among roads in city 1's component.",
   "frames": []
  }
 ]
};
