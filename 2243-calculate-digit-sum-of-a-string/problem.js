window.PROBLEM = {
 "id": "2243",
 "title": "Calculate Digit Sum of a String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given a string s of digits and a number k, repeat this round while the string is longer than k: cut the string into groups of k characters (the last group may be shorter), replace every group by the SUM of its digits written as text, and glue the results together. Return the string when it has at most k characters. Example: s='11111222223', k=3 → groups 111, 112, 222, 23 → '3', '4', '6', '5' → '3465' → groups 346, 5 → '13' and '5' → '135'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def digitSum(self, s, k):\n        if len(s) <= k: return s\n        parts = [s[i:i + k] for i in range(0, len(s), k)]\n        return self.digitSum(''.join(str(sum(map(int, p))) for p in parts), k)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The same grouping step applied recursively.",
   "frames": [],
   "alt": true
  }
 ]
};
