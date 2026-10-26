window.PROBLEM = {
 "id": "2243",
 "title": "Calculate Digit Sum of a String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Cut a digit string into groups of k, replace each group by the sum of its digits, glue the results together, and repeat until the string has at most k characters.",
 "idea": "Simulate it: a loop that slices every k characters, sums each slice, and rebuilds the string, until the length is ≤ k.",
 "input": "s=\"11111222223\", k=3",
 "output": "\"135\"",
 "notes": [],
 "best": "Simulate it: a loop that slices every k characters, sums each slice, and rebuilds the string, until the length is ≤ k.",
 "variants": [
  {
   "name": "Repeat: group by k and add",
   "code": "class Solution:\n    def digitSum(self, s, k):\n        while len(s) > k:\n            s = ''.join(str(sum(int(c) for c in s[i:i + k])) for i in range(0, len(s), k))\n        return s",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Simulate it: a loop that slices every k characters, sums each slice, and rebuilds the string, until the length is ≤ k.",
   "frames": []
  }
 ]
};
