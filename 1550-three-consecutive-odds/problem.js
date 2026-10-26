window.PROBLEM = {
 "id": "1550",
 "title": "Three Consecutive Odds",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,2,34,3,4,5,7,23,12] has 5, 7, 23 in a row → true.",
 "idea": "Walk through the array counting consecutive odd numbers; return true when the run reaches three.",
 "input": "arr = [1,2,34,3,4,5,7,23,12]",
 "output": "true",
 "notes": [],
 "best": "Walk through the array counting consecutive odd numbers; return true when the run reaches three.",
 "variants": [
  {
   "name": "Count the current run of odd numbers",
   "code": "class Solution:\n    def threeConsecutiveOdds(self, arr):\n        run = 0\n        for x in arr:\n            run = run + 1 if x % 2 else 0\n            if run == 3:\n                return True\n        return False",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk through the array counting consecutive odd numbers; return true when the run reaches three.",
   "frames": []
  }
 ]
};
