window.PROBLEM = {
 "id": "447",
 "title": "Number of Boomerangs",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Points (0,0), (1,0), (2,0): from (1,0) the other two are equidistant → 2 boomerangs.",
 "idea": "A boomerang is (i, j, k) with dist(i, j) = dist(i, k). For each point i count the other points by squared distance; for a distance with c points there are c(c−1) ordered pairs (j, k).",
 "input": "points = [[0,0],[1,0],[2,0]]",
 "output": "2",
 "notes": [],
 "best": "A boomerang is (i, j, k) with dist(i, j) = dist(i, k). For each point i count the other points by squared distance; for a distance with c points there are c(c−1) ordered pairs (j, k).",
 "variants": [
  {
   "name": "Group the other points by distance from each point",
   "code": "class Solution:\n    def numberOfBoomerangs(self, points):\n        res = 0\n        for x1, y1 in points:\n            cnt = Counter((x1 - x2) ** 2 + (y1 - y2) ** 2 for x2, y2 in points)\n            res += sum(c * (c - 1) for c in cnt.values())\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "A boomerang is (i, j, k) with dist(i, j) = dist(i, k). For each point i count the other points by squared distance; for a distance with c points there are c(c−1) ordered pairs (j, k).",
   "frames": []
  }
 ]
};
