window.PROBLEM = {
 "id": "2975",
 "title": "Maximum Square Area by Removing Fences From a Field",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "m=4, n=3, hFences [2,3], vFences [2]: a 2×2 square is possible → 4.",
 "idea": "After removing fences you can pick any two horizontal fences (including the borders 1 and m) and any two vertical ones. A square needs equal distances, so compute all pairwise distances of the horizontal lines and of the vertical lines, intersect the two sets, and square the largest common distance. Modulo 1e9+7; −1 if none.",
 "input": "m = 4, n = 3, hFences = [2,3], vFences = [2]",
 "output": "4",
 "notes": [],
 "best": "After removing fences you can pick any two horizontal fences (including the borders 1 and m) and any two vertical ones. A square needs equal distances, so compute all pairwise distances of the horizontal lines and of the vertical lines, intersect the two sets, and square the largest common distance. Modulo 1e9+7; −1 if none.",
 "variants": [
  {
   "name": "Common pairwise distances of both fence sets",
   "code": "class Solution:\n    def maximizeSquareArea(self, m, n, hFences, vFences):\n        h = sorted(hFences + [1, m])\n        v = sorted(vFences + [1, n])\n        hd = {b - a for a, b in combinations(h, 2)}\n        vd = {b - a for a, b in combinations(v, 2)}\n        common = hd & vd\n        return max(common) ** 2 % (10**9 + 7) if common else -1",
   "time": "O(h² + v²)",
   "space": "O(h² + v²)",
   "explain": "After removing fences you can pick any two horizontal fences (including the borders 1 and m) and any two vertical ones. A square needs equal distances, so compute all pairwise distances of the horizontal lines and of the vertical lines, intersect the two sets, and square the largest common distance. Modulo 1e9+7; −1 if none.",
   "frames": []
  }
 ]
};
