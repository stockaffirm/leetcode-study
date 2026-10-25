window.PROBLEM = {
 "id": "412",
 "title": "Fizz Buzz",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Given a whole number n, return a list of n text items, one for each number i from 1 to n: 'FizzBuzz' if i is divisible by both 3 and 5, 'Fizz' if only by 3, 'Buzz' if only by 5, and otherwise the number i written as text. Example: n=5 → ['1','2','Fizz','4','Buzz'].",
 "why": "For 1..n write 'Fizz' if the number divides by 3, 'Buzz' if by 5, 'FizzBuzz' if by both, otherwise the number itself.",
 "idea": "Test the 'both' case (divisible by 15) first, otherwise the Fizz and Buzz checks would swallow it.",
 "input": "n = 15",
 "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",…,\"FizzBuzz\"]",
 "notes": [],
 "best": "Test the 'both' case (divisible by 15) first, otherwise the Fizz and Buzz checks would swallow it.",
 "variants": [
  {
   "name": "Check 15, 3, then 5",
   "code": "class Solution:\n    def fizzBuzz(self, n):\n        ans = []\n        for i in range(1, n + 1):\n            if i % 15 == 0: ans.append('FizzBuzz')\n            elif i % 3 == 0: ans.append('Fizz')\n            elif i % 5 == 0: ans.append('Buzz')\n            else: ans.append(str(i))\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Test the 'both' case (divisible by 15) first, otherwise the Fizz and Buzz checks would swallow it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "String building",
   "tag": "Alternative",
   "code": "class Solution:\n    def fizzBuzz(self, n):\n        ans = []\n        for i in range(1, n + 1):\n            s = ''\n            if i % 3 == 0: s += 'Fizz'\n            if i % 5 == 0: s += 'Buzz'\n            ans.append(s or str(i))\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Append 'Fizz' and/or 'Buzz' to an empty string; if it stays empty, use the number.",
   "frames": [],
   "alt": true
  }
 ]
};
