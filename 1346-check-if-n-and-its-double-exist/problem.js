window.PROBLEM = {
 "id": "1346",
 "title": "Check If N and Its Double Exist",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Return true if there are two different indices i, j with arr[i] == 2 × arr[j]. Example: [10,2,5,3] → true.",
 "why": "[10,2,5,3]: 5 and 10 → true.",
 "idea": "For each number check whether its double or (when even) its half has been seen, then record it.",
 "input": "arr = [10,2,5,3]",
 "output": "true",
 "notes": [],
 "best": "For each number check whether its double or (when even) its half has been seen, then record it.",
 "variants": [
  {
   "name": "Set of seen values",
   "code": "class Solution:\n    def checkIfExist(self, arr):\n        seen = set()\n        for x in arr:\n            if x * 2 in seen or (x % 2 == 0 and x // 2 in seen):\n                return True\n            seen.add(x)\n        return False",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each number check whether its double or (when even) its half has been seen, then record it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort and binary search",
   "tag": "Alternative",
   "code": "class Solution:\n    def checkIfExist(self, arr):\n        a = sorted(arr)\n        for i, x in enumerate(a):\n            j = bisect_left(a, 2 * x)\n            if j < len(a) and a[j] == 2 * x and j != i:\n                return True\n            if j < len(a) and a[j] == 2 * x and x == 0 and a.count(0) > 1:\n                return True\n        return False",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "For each element binary search its double (handle zero separately).",
   "frames": [],
   "alt": true
  }
 ]
};
