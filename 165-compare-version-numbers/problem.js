window.PROBLEM = {
 "id": "165",
 "title": "Compare Version Numbers",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Software versions are written as numbers separated by dots, like '1.2' or '1.10.3'. Compare two version strings: return -1 if version1 is older (smaller), 1 if version1 is newer (bigger), or 0 if they are the same. Compare the numbers part by part from the left, as WHOLE numbers (so 10 is bigger than 2, and '01' equals 1); a part that is missing counts as 0, so '1.0' equals '1.0.0'. Example: '1.2' vs '1.10' → 2 < 10 → -1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Parse without split",
   "tag": "Alternative",
   "code": "class Solution:\n    def compareVersion(self, version1, version2):\n        i = j = 0\n        n, m = len(version1), len(version2)\n        while i < n or j < m:\n            x = 0\n            while i < n and version1[i] != '.':\n                x = x * 10 + int(version1[i])\n                i += 1\n            y = 0\n            while j < m and version2[j] != '.':\n                y = y * 10 + int(version2[j])\n                j += 1\n            if x != y: return 1 if x > y else -1\n            i += 1\n            j += 1\n        return 0",
   "time": "O(n + m)",
   "space": "O(1)",
   "explain": "Read each number digit by digit with two index pointers; nothing is built.",
   "frames": [],
   "alt": true
  }
 ]
};
