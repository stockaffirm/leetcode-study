window.PROBLEM = {
 "id": "1257",
 "title": "Smallest Common Region",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Regions contain smaller regions (like Earth ⊃ North America ⊃ Canada). Find the smallest region that contains both of two given regions.",
 "idea": "Record each region's parent. Collect all ancestors of the first region (including itself), then climb from the second until you hit one of them.",
 "input": "regions tree, Quebec and New York",
 "output": "\"North America\"",
 "notes": [],
 "best": "Record each region's parent. Collect all ancestors of the first region (including itself), then climb from the second until you hit one of them.",
 "variants": [
  {
   "name": "Parent map, ancestors of the first region",
   "code": "class Solution:\n    def findSmallestRegion(self, regions, region1, region2):\n        parent = {}\n        for r in regions:\n            for child in r[1:]: parent[child] = r[0]\n        anc = set()\n        while region1:\n            anc.add(region1)\n            region1 = parent.get(region1)\n        while region2 not in anc: region2 = parent[region2]\n        return region2",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Record each region's parent. Collect all ancestors of the first region (including itself), then climb from the second until you hit one of them.",
   "frames": []
  }
 ]
};
