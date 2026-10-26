window.PROBLEM = {
 "id": "1346",
 "title": "Check If N and Its Double Exist",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
