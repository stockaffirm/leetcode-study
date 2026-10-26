window.PROBLEM = {
 "id": "1975",
 "title": "Maximum Matrix Sum",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[[1,-1],[-1,1]] → flip a pair to make everything positive → 4.",
 "idea": "One operation flips the signs of two neighbouring cells. So the parity of the number of negatives is invariant. Take the sum of absolute values; if the count of negatives is odd, one cell must stay negative — subtract twice the smallest absolute value.",
 "input": "matrix = [[1,-1],[-1,1]]",
 "output": "4",
 "notes": [],
 "best": "One operation flips the signs of two neighbouring cells. So the parity of the number of negatives is invariant. Take the sum of absolute values; if the count of negatives is odd, one cell must stay negative — subtract twice the smallest absolute value.",
 "variants": [
  {
   "name": "Flip signs in pairs: at most one number stays negative",
   "code": "class Solution:\n    def maxMatrixSum(self, matrix):\n        total = neg = 0\n        small = float('inf')\n        for row in matrix:\n            for v in row:\n                total += abs(v)\n                neg += v < 0\n                small = min(small, abs(v))\n        return total - (2 * small if neg % 2 else 0)",
   "time": "O(m·n)",
   "space": "O(1)",
   "explain": "One operation flips the signs of two neighbouring cells. So the parity of the number of negatives is invariant. Take the sum of absolute values; if the count of negatives is odd, one cell must stay negative — subtract twice the smallest absolute value.",
   "frames": []
  }
 ]
};
