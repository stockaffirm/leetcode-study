window.PROBLEM = {
 "id": "1257",
 "title": "Smallest Common Region",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "You are given a list of regions; each list's first element is a region that directly contains all the following ones (a region contains each other region in only one list, so it forms a tree). Given two regions, return the SMALLEST region that contains both (a region counts as containing itself). Example: Quebec (inside Canada inside North America) and New York (inside United States inside North America) → 'North America'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare root paths",
   "tag": "Alternative",
   "code": "class Solution:\n    def findSmallestRegion(self, regions, region1, region2):\n        parent = {}\n        for r in regions:\n            for child in r[1:]: parent[child] = r[0]\n        def path(x):\n            p = [x]\n            while x in parent:\n                x = parent[x]\n                p.append(x)\n            return p[::-1]\n        a, b = path(region1), path(region2)\n        i = 0\n        while i < min(len(a), len(b)) and a[i] == b[i]: i += 1\n        return a[i - 1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Write each region's path from the top region and find where the two paths stop agreeing.",
   "frames": [],
   "alt": true
  }
 ]
};
