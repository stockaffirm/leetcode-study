window.PROBLEM = {
 "id": "575",
 "title": "Distribute Candies",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,1,2,2,3,3]: 3 kinds, may eat 3 candies → 3.",
 "idea": "Alice can eat n/2 candies. She gets the most types by eating different ones: min(number of distinct types, n/2).",
 "input": "candyType = [1,1,2,2,3,3]",
 "output": "3",
 "notes": [],
 "best": "Alice can eat n/2 candies. She gets the most types by eating different ones: min(number of distinct types, n/2).",
 "variants": [
  {
   "name": "min(n/2, number of kinds)",
   "code": "class Solution:\n    def distributeCandies(self, candyType):\n        return min(len(set(candyType)), len(candyType) // 2)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Alice can eat n/2 candies. She gets the most types by eating different ones: min(number of distinct types, n/2).",
   "frames": []
  }
 ]
};
