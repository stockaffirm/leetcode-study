window.PROBLEM = {
 "id": "165",
 "title": "Compare Version Numbers",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Which software version is newer? '1.2' vs '1.10' → 10 is bigger than 2, so 1.10 is newer. Missing parts count as 0 ('1.0' = '1.0.0').",
 "idea": "Split both on '.', turn each part into a number (so '01' = 1), and compare part by part, treating a missing part as 0.",
 "input": "\"1.2\", \"1.10\"",
 "output": "-1",
 "notes": [],
 "best": "Split both on '.', turn each part into a number (so '01' = 1), and compare part by part, treating a missing part as 0.",
 "variants": [
  {
   "name": "Split on dots, compare as numbers",
   "code": "class Solution:\n    def compareVersion(self, version1, version2):\n        a, b = version1.split('.'), version2.split('.')\n        for i in range(max(len(a), len(b))):\n            x = int(a[i]) if i < len(a) else 0\n            y = int(b[i]) if i < len(b) else 0\n            if x != y: return 1 if x > y else -1\n        return 0",
   "time": "O(n + m)",
   "space": "O(n + m)",
   "explain": "Split both on '.', turn each part into a number (so '01' = 1), and compare part by part, treating a missing part as 0.",
   "frames": []
  }
 ]
};
