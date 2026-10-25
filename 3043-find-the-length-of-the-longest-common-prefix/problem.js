window.PROBLEM = {
 "id": "3043",
 "title": "Find the Length of the Longest Common Prefix",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "You are given two lists of positive whole numbers arr1 and arr2. The longest common prefix of two numbers is the longest run of digits they both start with (for example 100 and 1000 share '100'). Return the length of the longest common prefix over all pairs of one number from arr1 and one from arr2 (0 if none share a first digit). Example: [1,10,100] and [1000] → 100 and 1000 share 3 digits → 3.",
 "why": "Take one number from each list; their longest common prefix is the longest shared start of their digits. What is the longest one over all pairs?",
 "idea": "Put every digit-prefix of every number in the first list into a set. For each number in the second list, find its longest prefix that is in the set.",
 "input": "arr1 [1, 10, 100], arr2 [1000]",
 "output": "3",
 "notes": [],
 "best": "Put every digit-prefix of every number in the first list into a set. For each number in the second list, find its longest prefix that is in the set.",
 "variants": [
  {
   "name": "Set of all prefixes",
   "code": "class Solution:\n    def longestCommonPrefix(self, arr1, arr2):\n        prefixes = set()\n        for x in arr1:\n            s = str(x)\n            for k in range(1, len(s) + 1): prefixes.add(s[:k])\n        best = 0\n        for y in arr2:\n            s = str(y)\n            for k in range(len(s), 0, -1):\n                if s[:k] in prefixes:\n                    best = max(best, k)\n                    break\n        return best",
   "time": "O((n + m)·digits)",
   "space": "O(n·digits)",
   "explain": "Put every digit-prefix of every number in the first list into a set. For each number in the second list, find its longest prefix that is in the set.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare every pair of numbers",
   "tag": "Brute force",
   "code": "class Solution:\n    def longestCommonPrefix(self, arr1, arr2):\n        best = 0\n        for x in arr1:\n            for y in arr2:\n                a, b = str(x), str(y)\n                k = 0\n                while k < min(len(a), len(b)) and a[k] == b[k]: k += 1\n                best = max(best, k)\n        return best",
   "time": "O(n·m·digits)",
   "space": "O(1)",
   "explain": "Find the common prefix of every pair of numbers.",
   "frames": [],
   "alt": true
  }
 ]
};
