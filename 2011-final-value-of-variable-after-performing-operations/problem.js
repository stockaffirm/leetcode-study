window.PROBLEM = {
 "id": "2011",
 "title": "Final Value of Variable After Performing Operations",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "['--X','X++','X++'] → 1.",
 "idea": "Each operation contains either '++' (adds 1) or '--' (subtracts 1). Check the middle character: '+' adds, '-' subtracts.",
 "input": "operations = [\"--X\",\"X++\",\"X++\"]",
 "output": "1",
 "notes": [],
 "best": "Each operation contains either '++' (adds 1) or '--' (subtracts 1). Check the middle character: '+' adds, '-' subtracts.",
 "variants": [
  {
   "name": "Count '+' operations",
   "code": "class Solution:\n    def finalValueAfterOperations(self, operations):\n        return sum(1 if '+' in op else -1 for op in operations)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each operation contains either '++' (adds 1) or '--' (subtracts 1). Check the middle character: '+' adds, '-' subtracts.",
   "frames": []
  }
 ]
};
