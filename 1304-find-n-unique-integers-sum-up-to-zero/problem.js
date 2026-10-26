window.PROBLEM = {
 "id": "1304",
 "title": "Find N Unique Integers Sum up to Zero",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "n=5 → [-4,-2,0,2,4].",
 "idea": "Use the values 2i − (n − 1) for i = 0 … n−1: they are distinct, symmetric around 0, and sum to zero.",
 "input": "n = 5",
 "output": "[-4, -2, 0, 2, 4]",
 "notes": [],
 "best": "Use the values 2i − (n − 1) for i = 0 … n−1: they are distinct, symmetric around 0, and sum to zero.",
 "variants": [
  {
   "name": "Symmetric values around zero",
   "code": "class Solution:\n    def sumZero(self, n):\n        return [2 * i - (n - 1) for i in range(n)]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Use the values 2i − (n − 1) for i = 0 … n−1: they are distinct, symmetric around 0, and sum to zero.",
   "frames": []
  }
 ]
};
